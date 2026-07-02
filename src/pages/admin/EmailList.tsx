import { useEffect, useState } from 'react'
import { Mail, MailOpen, Trash2, Download, Search, ChevronLeft, ChevronRight } from 'lucide-react'
import { emails as emailsApi, type EmailSubmission } from '../../api'

export default function EmailList() {
  const [items, setItems] = useState<EmailSubmission[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)
  const [total, setTotal] = useState(0)
  const [search, setSearch] = useState('')
  const [selected, setSelected] = useState<EmailSubmission | null>(null)

  const fetchItems = (p = page, s = search) => {
    setLoading(true)
    emailsApi.list(p, 20, s || undefined).then((res) => {
      setItems(res.data)
      setTotalPages(res.totalPages)
      setTotal(res.total)
    }).catch(() => {}).finally(() => setLoading(false))
  }

  useEffect(() => { fetchItems() }, [])

  const handleSearch = () => {
    setPage(1)
    fetchItems(1, search)
  }

  const handleToggleRead = async (id: number, is_read: number) => {
    try {
      await emailsApi.updateStatus(id, !is_read)
      setItems((prev) => prev.map((e) => (e.id === id ? { ...e, is_read: is_read ? 0 : 1 } : e)))
      if (selected?.id === id) {
        setSelected((prev) => prev ? { ...prev, is_read: is_read ? 0 : 1 } : null)
      }
    } catch {}
  }

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this email?')) return
    try {
      await emailsApi.delete(id)
      setItems((prev) => prev.filter((e) => e.id !== id))
      if (selected?.id === id) setSelected(null)
    } catch {}
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-sans text-2xl font-bold text-black">Email Inquiries</h1>
          <p className="mt-1 font-sans text-sm text-black/50">{total} total</p>
        </div>
        <button
          onClick={() => emailsApi.exportXlsx()}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0000FF] px-5 py-2.5 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02] sm:w-auto"
        >
          <Download size={16} /> Export to Excel
        </button>
      </div>

      {/* Search */}
      <div className="mt-6 flex gap-2">
        <div className="relative flex-1">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/30" />
          <input
            type="text" value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
            placeholder="Search by name, email, phone..."
            className="w-full rounded-xl border border-black/10 bg-white py-2.5 pl-9 pr-4 font-sans text-sm text-black outline-none transition-colors focus:border-[#0000FF]/50"
          />
        </div>
        <button onClick={handleSearch}
          className="rounded-xl bg-black/5 px-4 font-sans text-sm font-semibold text-black/60 transition-colors hover:bg-black/10">
          Search
        </button>
      </div>

      {loading ? (
        <p className="mt-8 font-sans text-sm text-black/40">Loading...</p>
      ) : items.length === 0 ? (
        <p className="mt-8 font-sans text-sm text-black/40">No emails yet.</p>
      ) : (
        <>
          {/* Table */}
          <div className="mt-6 overflow-x-auto rounded-2xl border border-black/5 bg-white shadow-sm">
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/5 text-left">
                  <th className="px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Status</th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Name</th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black/40 hidden sm:table-cell">Email</th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black/40 hidden md:table-cell">Phone</th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black/40 hidden lg:table-cell">Service</th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black/40 hidden md:table-cell">Date</th>
                  <th className="px-5 py-3 font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Actions</th>
                </tr>
              </thead>
              <tbody>
                {items.map((email) => (
                  <tr
                    key={email.id}
                    className={`cursor-pointer border-b border-black/5 last:border-0 transition-colors hover:bg-black/[0.02] ${!email.is_read ? 'bg-[#0000FF]/[0.02]' : ''}`}
                    onClick={() => setSelected(email)}
                  >
                    <td className="px-5 py-4">
                      <button onClick={(e) => { e.stopPropagation(); handleToggleRead(email.id, email.is_read) }}
                        className={`flex h-8 w-8 items-center justify-center rounded-lg transition-colors ${email.is_read ? 'text-green-500 hover:bg-green-50' : 'text-[#0000FF] hover:bg-[#0000FF]/10'}`}
                        title={email.is_read ? 'Mark as unread' : 'Mark as read'}
                      >
                        {email.is_read ? <MailOpen size={16} /> : <Mail size={16} />}
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`font-sans text-sm ${!email.is_read ? 'font-bold text-black' : 'font-medium text-black/60'}`}>
                        {email.name}
                      </span>
                    </td>
                    <td className="hidden px-5 py-4 sm:table-cell">
                      <span className="font-sans text-sm text-black/60">{email.email}</span>
                    </td>
                    <td className="hidden px-5 py-4 md:table-cell">
                      <span className="font-sans text-sm text-black/60">{email.phone}</span>
                    </td>
                    <td className="hidden px-5 py-4 lg:table-cell">
                      <span className="font-sans text-sm text-black/60">{email.service || '—'}</span>
                    </td>
                    <td className="hidden px-5 py-4 md:table-cell">
                      <span className="font-sans text-sm text-black/40">{new Date(email.created_at).toLocaleDateString()}</span>
                    </td>
                    <td className="px-5 py-4">
                      <button onClick={(e) => { e.stopPropagation(); handleDelete(email.id) }}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-black/30 transition-colors hover:bg-red-50 hover:text-red-500">
                        <Trash2 size={15} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-4 flex items-center justify-center gap-3">
              <button onClick={() => { const p = page - 1; setPage(p); fetchItems(p, search) }} disabled={page <= 1}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/10 text-black/50 transition-colors hover:bg-black/5 disabled:opacity-30">
                <ChevronLeft size={16} />
              </button>
              <span className="font-sans text-sm text-black/50">Page {page} of {totalPages}</span>
              <button onClick={() => { const p = page + 1; setPage(p); fetchItems(p, search) }} disabled={page >= totalPages}
                className="flex h-9 w-9 items-center justify-center rounded-xl bg-white border border-black/10 text-black/50 transition-colors hover:bg-black/5 disabled:opacity-30">
                <ChevronRight size={16} />
              </button>
            </div>
          )}
        </>
      )}

      {/* Detail Modal */}
      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={() => setSelected(null)}>
          <div className="w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between">
              <h2 className="font-sans text-lg font-bold text-black">Email Detail</h2>
              <button onClick={() => setSelected(null)}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/5 text-black/40 hover:bg-black/10">
                ✕
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Name</span>
                <p className="mt-1 font-sans text-sm font-semibold text-black">{selected.name}</p>
              </div>
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Email</span>
                <p className="mt-1 font-sans text-sm text-black">{selected.email}</p>
              </div>
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Phone</span>
                <p className="mt-1 font-sans text-sm text-black">{selected.phone}</p>
              </div>
              {selected.service && (
                <div>
                  <span className="font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Service</span>
                  <p className="mt-1 font-sans text-sm text-black">{selected.service}</p>
                </div>
              )}
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Message</span>
                <p className="mt-1 whitespace-pre-wrap font-sans text-sm text-black">{selected.message}</p>
              </div>
              <div>
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-black/40">Date</span>
                <p className="mt-1 font-sans text-sm text-black/50">{new Date(selected.created_at).toLocaleString()}</p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button onClick={() => handleToggleRead(selected.id, selected.is_read)}
                className={`flex-1 rounded-xl py-2.5 font-sans text-sm font-semibold transition-colors ${
                  selected.is_read ? 'bg-[#0000FF]/10 text-[#0000FF] hover:bg-[#0000FF]/20' : 'bg-green-50 text-green-600 hover:bg-green-100'
                }`}>
                {selected.is_read ? 'Mark as Unread' : 'Mark as Read'}
              </button>
              <button onClick={() => { handleDelete(selected.id); setSelected(null) }}
                className="rounded-xl bg-red-50 px-5 py-2.5 font-sans text-sm font-semibold text-red-500 transition-colors hover:bg-red-100">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
