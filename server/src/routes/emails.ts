import { Router, Response } from 'express'
import pool from '../db.js'
import auth, { AuthRequest } from '../middleware/auth.js'
import nodemailer from 'nodemailer'

const router = Router()

// Public: Submit contact form
router.post('/', async (req, res: Response) => {
  const { name, email, phone, service, message } = req.body
  if (!name || !email || !phone || !message) {
    res.status(400).json({ error: 'Name, email, phone, and message are required' })
    return
  }

  try {
    const [result] = await pool.execute<any>(
      `INSERT INTO email_submissions (name, email, phone, service, message) VALUES (?, ?, ?, ?, ?)`,
      [name, email, phone, service || '', message],
    )

    // Forward to admin emails if enabled
    try {
      const [settingsRows] = await pool.execute<any[]>('SELECT * FROM email_settings LIMIT 1')
      if (settingsRows.length > 0) {
        const settings = settingsRows[0]
        if (settings.forwarding_enabled && settings.admin_emails) {
          const adminEmails: string[] = JSON.parse(settings.admin_emails)
          if (adminEmails.length > 0 && settings.smtp_host) {
            const transporter = nodemailer.createTransport({
              host: settings.smtp_host,
              port: settings.smtp_port,
              secure: settings.smtp_port === 465,
              auth: settings.smtp_user ? { user: settings.smtp_user, pass: settings.smtp_pass } : undefined,
            })
            await transporter.sendMail({
              from: `"${settings.from_name || 'NestLink Website'}" <${settings.from_email || settings.smtp_user}>`,
              to: adminEmails.join(', '),
              subject: `New Inquiry from ${name} - NestLink Website`,
              html: `
                <h2>New Contact Form Submission</h2>
                <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-family:sans-serif;">
                  <tr><td style="font-weight:bold">Name</td><td>${name}</td></tr>
                  <tr><td style="font-weight:bold">Email</td><td>${email}</td></tr>
                  <tr><td style="font-weight:bold">Phone</td><td>${phone}</td></tr>
                  <tr><td style="font-weight:bold">Service</td><td>${service || 'N/A'}</td></tr>
                  <tr><td style="font-weight:bold">Message</td><td>${message}</td></tr>
                </table>
                <p style="color:#666;font-size:12px;">Sent via NestLink Contact Form</p>
              `,
            })
          }
        }
      }
    } catch (forwardErr) {
      console.error('Email forward failed:', forwardErr)
    }

    res.status(201).json({ id: result.insertId, success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: List all emails (paginated)
router.get('/', auth, async (req: AuthRequest, res: Response) => {
  const page = Math.max(1, parseInt(req.query.page as string) || 1)
  const limit = Math.min(100, Math.max(1, parseInt(req.query.limit as string) || 20))
  const offset = (page - 1) * limit
  const search = req.query.search as string

  try {
    let countSql = 'SELECT COUNT(*) as total FROM email_submissions'
    let sql = 'SELECT * FROM email_submissions'
    const params: any[] = []

    if (search) {
      const where = ' WHERE name LIKE ? OR email LIKE ? OR phone LIKE ? OR message LIKE ?'
      const searchParam = `%${search}%`
      countSql += where
      sql += where
      params.push(searchParam, searchParam, searchParam, searchParam)
    }

    sql += ' ORDER BY created_at DESC LIMIT ? OFFSET ?'

    const [countRows] = await pool.execute<any[]>(countSql, params)
    const total = countRows[0].total

    const [rows] = await pool.execute<any[]>(sql, [...params, limit, offset])

    res.json({
      data: rows,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: Export to Excel (must be before /:id)
router.get('/export/xlsx', auth, async (req: AuthRequest, res: Response) => {
  try {
    const [rows] = await pool.execute<any[]>(
      'SELECT id, name, email, phone, service, message, is_read, created_at FROM email_submissions ORDER BY created_at DESC',
    )

    const XLSX = await import('xlsx')
    const wb = XLSX.utils.book_new()
    const data = rows.map((r: any) => ({
      ID: r.id,
      Name: r.name,
      Email: r.email,
      Phone: r.phone,
      Service: r.service || '',
      Message: r.message,
      Status: r.is_read ? 'Read' : 'Unread',
      Date: r.created_at,
    }))
    const ws = XLSX.utils.json_to_sheet(data)
    XLSX.utils.book_append_sheet(wb, ws, 'Emails')
    const buf = XLSX.write(wb, { type: 'buffer', bookType: 'xlsx' })

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')
    res.setHeader('Content-Disposition', `attachment; filename=emails-${Date.now()}.xlsx`)
    res.send(buf)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: Get stats (must be before /:id)
router.get('/stats/summary', auth, async (req: AuthRequest, res: Response) => {
  try {
    const [rows] = await pool.execute<any[]>('SELECT COUNT(*) as total, SUM(CASE WHEN is_read = 0 THEN 1 ELSE 0 END) as unread FROM email_submissions')
    res.json({ total: rows[0].total, unread: rows[0].unread || 0 })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: Get single email
router.get('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    const [rows] = await pool.execute<any[]>(
      'SELECT * FROM email_submissions WHERE id = ?',
      [req.params.id],
    )
    if (rows.length === 0) {
      res.status(404).json({ error: 'Email not found' })
      return
    }
    res.json(rows[0])
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: Update read/unread status
router.put('/:id/status', auth, async (req: AuthRequest, res: Response) => {
  const { is_read } = req.body
  if (typeof is_read !== 'boolean') {
    res.status(400).json({ error: 'is_read (boolean) is required' })
    return
  }

  try {
    await pool.execute('UPDATE email_submissions SET is_read = ? WHERE id = ?', [is_read, req.params.id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: Delete email
router.delete('/:id', auth, async (req: AuthRequest, res: Response) => {
  try {
    await pool.execute('DELETE FROM email_submissions WHERE id = ?', [req.params.id])
    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

export default router
