export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  author: string
  readTime: string
  date: string
  image: string
  content: string
  sidebar: string[]
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'future-of-smart-home-automation',
    title: 'The Future of Smart Home Automation: Trends to Watch in 2026',
    excerpt:
      'Discover how AI, voice control, and integrated ecosystems are reshaping the way we live in modern homes.',
    category: 'Smart Home',
    author: 'Daniel Miller',
    readTime: '8 min read',
    date: 'Jan 15, 2026',
    image: '/footer.jpg',
    content: `
      <p>Smart home automation has moved far beyond simple remote controls and programmable thermostats. Today's systems are intelligent, adaptive, and deeply integrated into the architecture of modern living spaces.</p>
      
      <h3>Why Automation Matters</h3>
      <p>In a world where convenience and efficiency are paramount, smart home technology offers homeowners unprecedented control over their environments. From lighting and climate to security and entertainment, every aspect of daily life can be optimized.</p>
      
      <h3>Key Trends Shaping 2026</h3>
      <p>Artificial intelligence is making homes truly responsive. Systems now learn your routines, anticipate your needs, and adjust automatically. Voice assistants have become more natural, while touch panels and mobile apps offer intuitive control from anywhere.</p>
      
      <p>Integration is another major trend. Rather than isolated devices, homeowners want cohesive ecosystems where lighting, security, climate, and audio-visual systems work together seamlessly.</p>
      
      <h3>Conclusion</h3>
      <p>The future of smart home automation is about creating spaces that respond to you. As technology continues to evolve, the homes of tomorrow will be more comfortable, secure, and energy-efficient than ever before.</p>
    `,
    sidebar: [
      'Why Automation Matters',
      'Key Trends Shaping 2026',
      'Integration & Ecosystems',
      'Conclusion',
    ],
  },
  {
    id: '2',
    slug: 'securing-your-property-with-cctv',
    title: 'Securing Your Property: A Complete Guide to CCTV Systems',
    excerpt:
      'Learn how modern surveillance systems protect homes and businesses with smart alerts and remote monitoring.',
    category: 'Security',
    author: 'Sarah Chen',
    readTime: '6 min read',
    date: 'Jan 10, 2026',
    image: '/smart-home.jpg',
    content: `
      <p>Security is one of the top reasons homeowners and businesses invest in smart technology. Modern CCTV systems offer far more than basic video recording — they provide intelligent monitoring and real-time alerts.</p>
      
      <h3>Types of CCTV Cameras</h3>
      <p>From dome cameras for indoor spaces to bullet cameras for outdoor perimeters, choosing the right camera depends on your specific needs. PTZ cameras offer flexible coverage, while discreet cameras blend into interior design.</p>
      
      <h3>Smart Features</h3>
      <p>Today's CCTV systems include motion detection, night vision, facial recognition, and mobile notifications. These features allow you to monitor your property from anywhere in the world.</p>
      
      <h3>Integration</h3>
      <p>When integrated with access control and alarm systems, CCTV becomes part of a comprehensive security ecosystem that actively protects your property.</p>
    `,
    sidebar: [
      'Types of CCTV Cameras',
      'Smart Features',
      'Integration with Other Systems',
    ],
  },
  {
    id: '3',
    slug: 'enterprise-networking-for-smart-buildings',
    title: 'Enterprise Networking: Building Reliable Infrastructure for Smart Buildings',
    excerpt:
      'Explore the structured cabling, Wi-Fi, and network solutions that power connected commercial spaces.',
    category: 'Networking',
    author: 'Michael Ross',
    readTime: '7 min read',
    date: 'Jan 5, 2026',
    image: '/hero/ezgif-frame-030.jpg',
    content: `
      <p>Behind every smart building is a robust network infrastructure. Without reliable connectivity, even the most advanced automation and security systems cannot function properly.</p>
      
      <h3>Structured Cabling</h3>
      <p>A well-designed cabling system is the backbone of any modern building. It supports data, voice, video, and IoT devices while allowing for future expansion.</p>
      
      <h3>Wi-Fi Coverage</h3>
      <p>Enterprise-grade Wi-Fi ensures seamless connectivity across large spaces. Proper access point placement, bandwidth management, and security protocols are essential.</p>
      
      <h3>Scalability</h3>
      <p>Smart buildings must be designed with growth in mind. A scalable network can accommodate new devices and technologies without requiring complete overhauls.</p>
    `,
    sidebar: [
      'Structured Cabling',
      'Wi-Fi Coverage',
      'Scalability',
    ],
  },
  {
    id: '4',
    slug: 'home-cinema-design-tips',
    title: 'Home Cinema Design: Creating the Ultimate Entertainment Experience',
    excerpt:
      'From acoustic treatment to display selection, learn what it takes to build a private theater at home.',
    category: 'Audio Visual',
    author: 'Emma Wilson',
    readTime: '5 min read',
    date: 'Dec 28, 2025',
    image: '/hero/ezgif-frame-070.jpg',
    content: `
      <p>A home cinema is more than a large screen and comfortable seating. It's about creating an immersive environment where image, sound, and atmosphere come together.</p>
      
      <h3>Display Technology</h3>
      <p>Choosing between projection and large-format LED depends on room size, ambient light, and personal preference. Both options can deliver stunning visuals when properly configured.</p>
      
      <h3>Audio Systems</h3>
      <p>Surround sound systems with carefully placed speakers create a cinematic audio experience. Acoustic treatment helps control sound reflections for clarity and impact.</p>
      
      <h3>Lighting & Control</h3>
      <p>Automated lighting scenes and a single control interface make it easy to transform your room from bright living space to dark theater with one touch.</p>
    `,
    sidebar: [
      'Display Technology',
      'Audio Systems',
      'Lighting & Control',
    ],
  },
]

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}
