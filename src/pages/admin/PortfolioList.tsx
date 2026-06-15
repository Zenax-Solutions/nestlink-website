import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Edit2, Trash2 } from 'lucide-react'
import { portfolio, type PortfolioItem } from '../../api'

export default function PortfolioList() {
  const [items, setItems] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)

  const fetchItems = () => {
    setLoading(true)
    portfolio.list().then((data) => setItems(data)).catch(() => {}).finally(() => setLoading(false))
  }

  useEffect(() => { fetchItems() }, [])

  const handleDelete = async (id: number) => {
    if (!confirm('Delete this project?')) return
    try {
      await portfolio.delete(id)
      setItems((prev) => prev.filter((p) => p.id !== id))
    } catch {}
  }

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-sans text-2xl font-bold text-black">Portfolio</h1>
          <p className="mt-1 font-sans text-sm text-black/50">{items.length} projects</p>
        </div>
        <Link
          to="/admin/portfolio/new"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#0000FF] px-5 py-2.5 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02] sm:w-auto sm:inline-flex"
        >
          <Plus size={16} /> New Project
        </Link>
      </div>

      {loading ? (
        <p className="mt-8 font-sans text-sm text-black/40">Loading...</p>
      ) : items.length === 0 ? (
        <p className="mt-8 font-sans text-sm text-black/40">No projects yet.</p>
      ) : (
        <div className="mt-6 space-y-3">
          {items.map((project) => (
            <div key={project.id} className="flex flex-col gap-3 rounded-2xl border border-black/5 bg-white px-5 py-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:px-6">
              <div className="flex-1 min-w-0">
                <h3 className="font-sans text-sm font-bold text-black sm:text-base truncate">{project.title}</h3>
                <p className="mt-0.5 font-sans text-xs text-black/40">{project.category}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <Link
                  to={`/admin/portfolio/edit/${project.id}`}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 text-black/50 transition-colors hover:bg-[#0000FF]/10 hover:text-[#0000FF]"
                >
                  <Edit2 size={15} />
                </Link>
                <button
                  onClick={() => handleDelete(project.id)}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/5 text-black/50 transition-colors hover:bg-red-50 hover:text-red-500"
                >
                  <Trash2 size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
