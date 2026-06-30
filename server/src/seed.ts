import mysql from 'mysql2/promise'
import bcrypt from 'bcryptjs'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.resolve(__dirname, '../.env') })

const DB_CONFIG = {
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3306,
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
}

async function seed() {
  const conn = await mysql.createConnection(DB_CONFIG)

  await conn.query(`CREATE DATABASE IF NOT EXISTS \`${process.env.DB_NAME || 'nestlink'}\``)
  await conn.query(`USE \`${process.env.DB_NAME || 'nestlink'}\``)

  // Create tables
  await conn.query(`
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      username VARCHAR(100) NOT NULL UNIQUE,
      email VARCHAR(255) NOT NULL UNIQUE,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `)

  await conn.query(`
    CREATE TABLE IF NOT EXISTS blogs (
      id INT AUTO_INCREMENT PRIMARY KEY,
      slug VARCHAR(255) NOT NULL UNIQUE,
      title VARCHAR(255) NOT NULL,
      excerpt TEXT,
      category VARCHAR(100),
      author VARCHAR(100),
      read_time VARCHAR(50),
      date VARCHAR(50),
      image VARCHAR(255),
      content LONGTEXT,
      sidebar JSON,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `)

  await conn.query(`
    CREATE TABLE IF NOT EXISTS portfolio (
      id INT AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      category VARCHAR(100) NOT NULL,
      description TEXT,
      image VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    )
  `)

  // Seed admin user
  const hashedPassword = await bcrypt.hash('@@NestLink@@2026#', 10)
  await conn.query(
    `INSERT IGNORE INTO users (username, email, password) VALUES (?, ?, ?)`,
    ['admin', 'admin@nestlink.ae', hashedPassword],
  )
  console.log('✓ Admin user seeded (username: admin, password: @@NestLink@@2026#)')

  // Seed blogs
  const blogs = [
    {
      slug: 'future-of-smart-home-automation',
      title: 'The Future of Smart Home Automation: Trends to Watch in 2026',
      excerpt: 'Discover how AI, voice control, and integrated ecosystems are reshaping the way we live in modern homes.',
      category: 'Smart Home',
      author: 'Daniel Miller',
      read_time: '8 min read',
      date: 'Jan 15, 2026',
      image: '/footer.jpg',
      content: `<p>Smart home automation has moved far beyond simple remote controls and programmable thermostats. Today's systems are intelligent, adaptive, and deeply integrated into the architecture of modern living spaces.</p><h3>Why Automation Matters</h3><p>In a world where convenience and efficiency are paramount, smart home technology offers homeowners unprecedented control over their environments.</p><h3>Key Trends Shaping 2026</h3><p>Artificial intelligence is making homes truly responsive. Systems now learn your routines, anticipate your needs, and adjust automatically.</p><h3>Conclusion</h3><p>The future of smart home automation is about creating spaces that respond to you.</p>`,
      sidebar: JSON.stringify(['Why Automation Matters', 'Key Trends Shaping 2026', 'Conclusion']),
    },
    {
      slug: 'securing-your-property-with-cctv',
      title: 'Securing Your Property: A Complete Guide to CCTV Systems',
      excerpt: 'Learn how modern surveillance systems protect homes and businesses with smart alerts and remote monitoring.',
      category: 'Security',
      author: 'Sarah Chen',
      read_time: '6 min read',
      date: 'Jan 10, 2026',
      image: '/smart-home.jpg',
      content: `<p>Security is one of the top reasons homeowners and businesses invest in smart technology.</p><h3>Types of CCTV Cameras</h3><p>From dome cameras to bullet cameras, choosing the right camera depends on your specific needs.</p><h3>Smart Features</h3><p>Today's CCTV systems include motion detection, night vision, facial recognition, and mobile notifications.</p><h3>Integration</h3><p>When integrated with access control and alarm systems, CCTV becomes part of a comprehensive security ecosystem.</p>`,
      sidebar: JSON.stringify(['Types of CCTV Cameras', 'Smart Features', 'Integration with Other Systems']),
    },
    {
      slug: 'enterprise-networking-for-smart-buildings',
      title: 'Enterprise Networking: Building Reliable Infrastructure for Smart Buildings',
      excerpt: 'Explore the structured cabling, Wi-Fi, and network solutions that power connected commercial spaces.',
      category: 'Networking',
      author: 'Michael Ross',
      read_time: '7 min read',
      date: 'Jan 5, 2026',
      image: '/hero/ezgif-frame-030.jpg',
      content: `<p>Behind every smart building is a robust network infrastructure.</p><h3>Structured Cabling</h3><p>A well-designed cabling system is the backbone of any modern building.</p><h3>Wi-Fi Coverage</h3><p>Enterprise-grade Wi-Fi ensures seamless connectivity across large spaces.</p><h3>Scalability</h3><p>Smart buildings must be designed with growth in mind.</p>`,
      sidebar: JSON.stringify(['Structured Cabling', 'Wi-Fi Coverage', 'Scalability']),
    },
    {
      slug: 'home-cinema-design-tips',
      title: 'Home Cinema Design: Creating the Ultimate Entertainment Experience',
      excerpt: 'From acoustic treatment to display selection, learn what it takes to build a private theater at home.',
      category: 'Audio Visual',
      author: 'Emma Wilson',
      read_time: '5 min read',
      date: 'Dec 28, 2025',
      image: '/hero/ezgif-frame-070.jpg',
      content: `<p>A home cinema is more than a large screen and comfortable seating.</p><h3>Display Technology</h3><p>Choosing between projection and large-format LED depends on room size and ambient light.</p><h3>Audio Systems</h3><p>Surround sound systems with carefully placed speakers create a cinematic audio experience.</p><h3>Lighting & Control</h3><p>Automated lighting scenes make it easy to transform your room with one touch.</p>`,
      sidebar: JSON.stringify(['Display Technology', 'Audio Systems', 'Lighting & Control']),
    },
  ]

  for (const blog of blogs) {
    await conn.query(
      `INSERT IGNORE INTO blogs (slug, title, excerpt, category, author, read_time, date, image, content, sidebar)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      Object.values(blog),
    )
  }
  console.log(`✓ ${blogs.length} blog posts seeded`)

  // Seed portfolio
  const projects = [
    { title: 'Villa Smart Home Automation', category: 'Smart Home', description: 'Full automation of lighting, climate, curtains, and security for a luxury villa in Dubai.', image: '/footer.jpg' },
    { title: 'Office Security & Networking', category: 'Security', description: 'Enterprise-grade CCTV, access control, and structured cabling for a corporate office.', image: '/smart-home.jpg' },
    { title: 'Home Cinema & Multi-Room Audio', category: 'Audio Visual', description: 'Immersive home theater and distributed audio system for a private residence.', image: '/hero/ezgif-frame-090.jpg' },
    { title: 'Commercial CCTV Installation', category: 'Security', description: 'Complete surveillance system with smart alerts and remote monitoring.', image: '/hero/ezgif-frame-030.jpg' },
    { title: 'Smart Lighting & ELV Infrastructure', category: 'Lighting', description: 'Indoor and outdoor lighting control with full ELV infrastructure design.', image: '/hero/ezgif-frame-110.jpg' },
    { title: 'Residential Networking & Wi-Fi', category: 'Networking', description: 'Whole-home mesh Wi-Fi, structured cabling, and network rack setup.', image: '/hero/ezgif-frame-070.jpg' },
    { title: 'Access Control for Commercial Building', category: 'Access Control', description: 'Smart locks, video intercom, and visitor management for a multi-tenancy building.', image: '/hero/ezgif-frame-050.jpg' },
    { title: 'Luxury Apartment Smart System', category: 'Smart Home', description: 'Integrated automation, security, and AV for a high-end apartment.', image: '/footer.jpg' },
  ]

  for (const project of projects) {
    await conn.query(
      `INSERT IGNORE INTO portfolio (title, category, description, image) VALUES (?, ?, ?, ?)`,
      [project.title, project.category, project.description, project.image],
    )
  }
  console.log(`✓ ${projects.length} portfolio projects seeded`)

  await conn.end()
  console.log('\n✅ Database seeded successfully!')
   console.log('   Login: admin / @@NestLink@@2026#')
}

seed().catch((err) => {
  console.error('Seed failed:', err)
  process.exit(1)
})
