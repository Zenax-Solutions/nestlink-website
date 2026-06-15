import { Router, Response } from 'express'
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const UPLOADS_DIR = path.resolve(__dirname, '../../uploads')

if (!fs.existsSync(UPLOADS_DIR)) {
  fs.mkdirSync(UPLOADS_DIR, { recursive: true })
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, UPLOADS_DIR),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname)
    const name = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}${ext}`
    cb(null, name)
  },
})

const upload = multer({
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = /\.(jpg|jpeg|png|gif|webp|svg|mp4)$/i
    if (allowed.test(path.extname(file.originalname))) {
      cb(null, true)
    } else {
      cb(new Error('Only images and videos allowed'))
    }
  },
})

const router = Router()

router.post('/', upload.single('file'), (req, res: Response) => {
  if (!req.file) {
    res.status(400).json({ error: 'No file uploaded' })
    return
  }
  res.json({ url: `/uploads/${req.file.filename}` })
})

export default router
