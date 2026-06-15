import { Router, Response } from 'express'
import pool from '../db'
import auth, { AuthRequest } from '../middleware/auth'

const router = Router()

router.get('/', async (_req, res: Response) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM blogs ORDER BY created_at DESC')
    res.json(rows)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.get('/:slug', async (req, res: Response) => {
  try {
    const [rows] = await pool.execute<any[]>(
      'SELECT * FROM blogs WHERE slug = ?',
      [req.params.slug],
    )
    if (rows.length === 0) {
      res.status(404).json({ error: 'Blog not found' })
      return
    }
    res.json(rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.post('/', auth, async (req: AuthRequest, res: Response) => {
  const { slug, title, excerpt, category, author, readTime, date, image, content, sidebar } = req.body

  if (!slug || !title) {
    res.status(400).json({ error: 'Slug and title are required' })
    return
  }

  try {
    const [result] = await pool.execute<any>(
      `INSERT INTO blogs (slug, title, excerpt, category, author, read_time, date, image, content, sidebar)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [slug, title, excerpt || '', category || '', author || '', readTime || '', date || '', image || '', content || '', JSON.stringify(sidebar || [])],
    )
    res.status(201).json({ id: result.insertId, slug, title })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.put('/:id', auth, async (req: AuthRequest, res: Response) => {
  const { slug, title, excerpt, category, author, readTime, date, image, content, sidebar } = req.body

  try {
    await pool.execute(
      `UPDATE blogs SET slug = ?, title = ?, excerpt = ?, category = ?, author = ?, read_time = ?, date = ?, image = ?, content = ?, sidebar = ?
       WHERE id = ?`,
      [slug, title, excerpt, category, author, readTime, date, image, content, JSON.stringify(sidebar || []), req.params.id],
    )
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    await pool.execute('DELETE FROM blogs WHERE id = ?', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
