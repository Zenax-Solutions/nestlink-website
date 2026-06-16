import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'
import dotenv from 'dotenv'
import authRoutes from './routes/auth.js'
import blogRoutes from './routes/blogs.js'
import portfolioRoutes from './routes/portfolio.js'
import uploadRoutes from './routes/upload.js'

dotenv.config()

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())

// Serve uploaded files
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')))

// Serve built frontend
const distPath = path.resolve(__dirname, '../../dist')
app.use(express.static(distPath))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/upload', uploadRoutes)

// SPA fallback — serve index.html for all non-API routes
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`NestLink server running on http://localhost:${PORT}`)
})
