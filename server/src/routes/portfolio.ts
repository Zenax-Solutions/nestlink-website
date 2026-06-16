import { Router, Response } from 'express'
import pool from '../db.js'
import auth, { AuthRequest } from '../middleware/auth.js'

const router = Router()

router.get('/', async (_req, res: Response) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM portfolio ORDER BY created_at DESC')
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.get('/:id', async (req, res: Response) => {
  try {
    const [rows] = await pool.execute<any[]>('SELECT * FROM portfolio WHERE id = ?', [req.params.id])
    if (rows.length === 0) {
      res.status(404).json({ error: 'Project not found' })
      return
    }
    res.json(rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.post('/', auth, async (req: AuthRequest, res: Response) => {
  const { title, category, description, image } = req.body

  if (!title || !category) {
    res.status(400).json({ error: 'Title and category are required' })
    return
  }

  try {
    const [result] = await pool.execute<any>(
      'INSERT INTO portfolio (title, category, description, image) VALUES (?, ?, ?, ?)',
      [title, category, description || '', image || ''],
    )
    res.status(201).json({ id: result.insertId, title, category })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.put('/:id', auth, async (req: AuthRequest, res: Response) => {
  const { title, category, description, image } = req.body

  try {
    await pool.execute(
      'UPDATE portfolio SET title = ?, category = ?, description = ?, image = ? WHERE id = ?',
      [title, category, description, image, req.params.id],
    )
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    await pool.execute('DELETE FROM portfolio WHERE id = ?', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
