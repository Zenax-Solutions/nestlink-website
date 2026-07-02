import { useEffect, useState } from 'react'
import { Save, Send, Plus, X, Loader2, CheckCircle } from 'lucide-react'
import { settings, type EmailConfig } from '../../api'

export default function EmailSettings() {
  const [config, setConfig] = useState<EmailConfig>({
    smtp_host: '', smtp_port: 587, smtp_user: '', smtp_pass: '',
    from_email: '', from_name: 'NestLink Website',
    admin_emails: [], forwarding_enabled: false,
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [testEmail, setTestEmail] = useState('')
  const [testSending, setTestSending] = useState(false)
  const [testResult, setTestResult] = useState<{ ok: boolean; msg: string } | null>(null)
  const [newAdminEmail, setNewAdminEmail] = useState('')

  useEffect(() => {
    settings.getEmailConfig().then((data) => {
      setConfig({ ...data, smtp_pass: '' })
    }).catch(() => {}).finally(() => setLoading(false))
  }, [])

  const handleSave = async () => {
    setSaving(true)
    setSaved(false)
    try {
      await settings.updateEmailConfig(config)
      setSaved(true)
      setTimeout(() => setSaved(false), 3000)
    } catch {}
    setSaving(false)
  }

  const handleTest = async () => {
    if (!testEmail) return
    setTestSending(true)
    setTestResult(null)
    try {
      const res = await settings.testEmail(testEmail)
      setTestResult({ ok: true, msg: res.message })
    } catch (err: any) {
      setTestResult({ ok: false, msg: err.message || 'Failed to send test email' })
    }
    setTestSending(false)
  }

  const addAdminEmail = () => {
    const e = newAdminEmail.trim()
    if (!e || !e.includes('@')) return
    if (config.admin_emails.includes(e)) return
    setConfig({ ...config, admin_emails: [...config.admin_emails, e] })
    setNewAdminEmail('')
  }

  const removeAdminEmail = (email: string) => {
    setConfig({ ...config, admin_emails: config.admin_emails.filter((e) => e !== email) })
  }

  if (loading) return <p className="font-sans text-sm text-black/40">Loading...</p>

  return (
    <div className="max-w-2xl">
      <div>
        <h1 className="font-sans text-2xl font-bold text-black">Email Settings</h1>
        <p className="mt-1 font-sans text-sm text-black/50">Configure SMTP and email forwarding</p>
      </div>

      {/* SMTP Settings */}
      <div className="mt-8 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <h2 className="font-sans text-base font-bold text-black">SMTP Configuration</h2>

        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/50">SMTP Host</label>
            <input type="text" value={config.smtp_host}
              onChange={(e) => setConfig({ ...config, smtp_host: e.target.value })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50"
              placeholder="smtp.gmail.com" />
          </div>
          <div>
            <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/50">Port</label>
            <input type="number" value={config.smtp_port}
              onChange={(e) => setConfig({ ...config, smtp_port: parseInt(e.target.value) || 587 })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50" />
          </div>
          <div>
            <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/50">SMTP User</label>
            <input type="text" value={config.smtp_user}
              onChange={(e) => setConfig({ ...config, smtp_user: e.target.value })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50"
              placeholder="user@gmail.com" />
          </div>
          <div className="sm:col-span-2">
            <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/50">SMTP Password</label>
            <input type="password" value={config.smtp_pass}
              onChange={(e) => setConfig({ ...config, smtp_pass: e.target.value })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50"
              placeholder="Leave blank to keep current" />
          </div>
          <div>
            <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/50">From Email</label>
            <input type="email" value={config.from_email}
              onChange={(e) => setConfig({ ...config, from_email: e.target.value })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50"
              placeholder="noreply@nest-links.com" />
          </div>
          <div>
            <label className="mb-2 block font-sans text-xs font-semibold uppercase tracking-wider text-black/50">From Name</label>
            <input type="text" value={config.from_name}
              onChange={(e) => setConfig({ ...config, from_name: e.target.value })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50"
              placeholder="NestLink Website" />
          </div>
        </div>
      </div>

      {/* Admin Emails & Forwarding */}
      <div className="mt-6 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <h2 className="font-sans text-base font-bold text-black">Admin Forwarding</h2>
        <p className="mt-1 font-sans text-sm text-black/50">
          When a new inquiry comes in, forward it to these admin emails.
        </p>

        <div className="mt-4 flex items-center gap-3">
          <label className="flex cursor-pointer items-center gap-3">
            <div className={`relative h-6 w-11 rounded-full transition-colors ${config.forwarding_enabled ? 'bg-[#0000FF]' : 'bg-black/20'}`}
              onClick={() => setConfig({ ...config, forwarding_enabled: !config.forwarding_enabled })}>
              <div className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${config.forwarding_enabled ? 'translate-x-5' : ''}`} />
            </div>
            <span className="font-sans text-sm font-medium text-black">Enable forwarding</span>
          </label>
        </div>

        <div className="mt-5 space-y-2">
          {config.admin_emails.map((email) => (
            <div key={email} className="flex items-center justify-between rounded-xl bg-black/[0.03] px-4 py-2.5">
              <span className="font-sans text-sm text-black">{email}</span>
              <button onClick={() => removeAdminEmail(email)}
                className="flex h-7 w-7 items-center justify-center rounded-lg text-black/30 hover:bg-red-50 hover:text-red-500">
                <X size={14} />
              </button>
            </div>
          ))}
          <div className="flex gap-2">
            <input type="email" value={newAdminEmail}
              onChange={(e) => setNewAdminEmail(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && addAdminEmail()}
              placeholder="admin@example.com"
              className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50" />
            <button onClick={addAdminEmail}
              className="flex items-center gap-2 rounded-xl bg-black/5 px-4 font-sans text-sm font-semibold text-black/60 transition-colors hover:bg-black/10">
              <Plus size={16} /> Add
            </button>
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="mt-6 flex items-center gap-4">
        <button onClick={handleSave} disabled={saving}
          className="flex items-center gap-2 rounded-full bg-[#0000FF] px-6 py-2.5 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-60">
          {saving ? <Loader2 size={16} className="animate-spin" /> : <Save size={16} />}
          {saving ? 'Saving...' : 'Save Settings'}
        </button>
        {saved && (
          <span className="flex items-center gap-1.5 font-sans text-sm text-green-600">
            <CheckCircle size={16} /> Saved
          </span>
        )}
      </div>

      {/* Test Email */}
      <div className="mt-10 rounded-2xl border border-black/5 bg-white p-6 shadow-sm">
        <h2 className="font-sans text-base font-bold text-black">Test Email Configuration</h2>
        <p className="mt-1 font-sans text-sm text-black/50">Send a test email to verify your SMTP settings.</p>

        <div className="mt-4 flex gap-2">
          <input type="email" value={testEmail}
            onChange={(e) => setTestEmail(e.target.value)}
            placeholder="recipient@example.com"
            className="flex-1 rounded-xl border border-black/10 bg-white px-4 py-2.5 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50" />
          <button onClick={handleTest} disabled={testSending || !testEmail}
            className="flex items-center gap-2 rounded-xl bg-black/5 px-5 font-sans text-sm font-semibold text-black/60 transition-colors hover:bg-black/10 disabled:opacity-40">
            {testSending ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />}
            Send Test
          </button>
        </div>
        {testResult && (
          <p className={`mt-3 font-sans text-sm ${testResult.ok ? 'text-green-600' : 'text-red-500'}`}>
            {testResult.msg}
          </p>
        )}
      </div>
    </div>
  )
}
