import { Router, Response } from 'express'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import pool from '../db'

const router = Router()

router.post('/login', async (req, res: Response) => {
  const { username, password } = req.body

  if (!username || !password) {
    res.status(400).json({ error: 'Username and password required' })
    return
  }

  try {
    const [rows] = await pool.execute<any[]>(
      'SELECT * FROM users WHERE username = ?',
      [username],
    )

    if (rows.length === 0) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const user = rows[0]
    const valid = await bcrypt.compare(password, user.password)

    if (!valid) {
      res.status(401).json({ error: 'Invalid credentials' })
      return
    }

    const token = jwt.sign(
      { id: user.id, username: user.username },
      process.env.JWT_SECRET || 'fallback_secret',
      { expiresIn: '7d' },
    )

    res.json({ token, username: user.username })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
