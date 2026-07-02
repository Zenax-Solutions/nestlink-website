import { Router, Response } from 'express'
import pool from '../db.js'
import auth, { AuthRequest } from '../middleware/auth.js'
import nodemailer from 'nodemailer'

const router = Router()

// Auth: Get email config
router.get('/email-config', auth, async (_req: AuthRequest, res: Response) => {
  try {
    const [rows] = await pool.execute<any[]>('SELECT * FROM email_settings LIMIT 1')
    if (rows.length === 0) {
      res.json({
        smtp_host: '',
        smtp_port: 587,
        smtp_user: '',
        smtp_pass: '',
        from_email: '',
        from_name: 'NestLink Website',
        admin_emails: [],
        forwarding_enabled: false,
      })
      return
    }
    const settings = rows[0]
    settings.admin_emails = JSON.parse(settings.admin_emails || '[]')
    settings.smtp_pass = '' // never send password back
    res.json(settings)
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: Update email config
router.put('/email-config', auth, async (req: AuthRequest, res: Response) => {
  const { smtp_host, smtp_port, smtp_user, smtp_pass, from_email, from_name, admin_emails, forwarding_enabled } = req.body

  try {
    const [rows] = await pool.execute<any[]>('SELECT * FROM email_settings LIMIT 1')

    const data: any = {
      smtp_host: smtp_host || '',
      smtp_port: smtp_port || 587,
      smtp_user: smtp_user || '',
      from_email: from_email || '',
      from_name: from_name || 'NestLink Website',
      admin_emails: JSON.stringify(admin_emails || []),
      forwarding_enabled: forwarding_enabled ? 1 : 0,
    }

    // Only update password if provided
    if (smtp_pass) {
      data.smtp_pass = smtp_pass
    }

    if (rows.length === 0) {
      if (!data.smtp_pass) data.smtp_pass = ''
      const cols = Object.keys(data)
      const vals = Object.values(data) as any[]
      const placeholders = cols.map(() => '?').join(', ')
      await pool.execute(
        `INSERT INTO email_settings (${cols.join(', ')}) VALUES (${placeholders})`,
        vals,
      )
    } else {
      const existing = rows[0]
      if (!data.smtp_pass) data.smtp_pass = existing.smtp_pass
      const setClause = Object.keys(data).map((k) => `${k} = ?`).join(', ')
      await pool.execute(`UPDATE email_settings SET ${setClause} WHERE id = ?`, [...Object.values(data) as any[], existing.id])
    }

    res.json({ success: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ error: 'Server error' })
  }
})

// Auth: Test email
router.post('/test-email', auth, async (req: AuthRequest, res: Response) => {
  const { to } = req.body
  if (!to) {
    res.status(400).json({ error: 'Recipient email (to) is required' })
    return
  }

  try {
    const [rows] = await pool.execute<any[]>('SELECT * FROM email_settings LIMIT 1')
    if (rows.length === 0) {
      res.status(400).json({ error: 'No email configuration found. Save settings first.' })
      return
    }

    const settings = rows[0]
    if (!settings.smtp_host) {
      res.status(400).json({ error: 'SMTP host not configured' })
      return
    }

    const transporter = nodemailer.createTransport({
      host: settings.smtp_host,
      port: settings.smtp_port,
      secure: settings.smtp_port === 465,
      auth: settings.smtp_user
        ? { user: settings.smtp_user, pass: settings.smtp_pass }
        : undefined,
    })

    await transporter.sendMail({
      from: `"${settings.from_name || 'NestLink'}" <${settings.from_email || settings.smtp_user}>`,
      to,
      subject: 'Test Email from NestLink',
      text: 'This is a test email from your NestLink website email configuration. If you received this, your SMTP settings are working correctly.',
    })

    res.json({ success: true, message: `Test email sent to ${to}` })
  } catch (err: any) {
    console.error(err)
    res.status(500).json({ error: `Failed to send test email: ${err.message}` })
  }
})

export default router
