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

app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }))
app.use(express.json())

// Serve uploaded files
app.use('/uploads', express.static(path.resolve(__dirname, '../uploads')))

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

app.use('/api/auth', authRoutes)
app.use('/api/blogs', blogRoutes)
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/upload', uploadRoutes)

app.listen(PORT, () => {
  console.log(`NestLink API running on http://localhost:${PORT}`)
})
