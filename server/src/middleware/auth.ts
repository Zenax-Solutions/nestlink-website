import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

export interface AuthRequest extends Request {
  user?: { id: number; username: string }
}

export default function auth(req: AuthRequest, res: Response, next: NextFunction) {
  const header = req.headers.authorization
  if (!header || !header.startsWith('Bearer ')) {
    res.status(401).json({ error: 'No token provided' })
    return
  }

  try {
    const token = header.split(' ')[1]
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'fallback_secret') as {
      id: number
      username: string
    }
    req.user = decoded
    next()
  } catch {
    res.status(401).json({ error: 'Invalid token' })
  }
}
