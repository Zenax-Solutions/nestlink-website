import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { portfolio } from '../../api'
import ImageUploader from '../../components/ImageUploader'

const categories = ['Smart Home', 'Security', 'Networking', 'Audio Visual', 'Lighting', 'Access Control']

export default function PortfolioForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id
  const [saving, setSaving] = useState(false)

  const [form, setForm] = useState({
    title: '',
    category: '',
    description: '',
    image: '',
  })

  useEffect(() => {
    if (id) {
      portfolio.list().then((all) => {
        const project = all.find((p) => p.id === Number(id))
        if (project) {
          setForm({
            title: project.title,
            category: project.category,
            description: project.description,
            image: project.image,
          })
        }
      })
    }
  }, [id])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    try {
      if (isEdit) {
        await portfolio.update(Number(id), form)
      } else {
        await portfolio.create(form)
      }
      navigate('/admin/portfolio')
    } catch (err: any) {
      alert(err.message || 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 className="font-sans text-2xl font-bold text-black">
        {isEdit ? 'Edit Project' : 'New Project'}
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div>          <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Title</label>
          <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
        </div>
        <div>
          <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Category</label>
          <select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50">
            <option value="" className="bg-white">Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-white">{cat}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Description</label>
          <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} rows={3}
            className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
        </div>
        <div>
          <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Image</label>
          <ImageUploader value={form.image} onChange={(url) => setForm({ ...form, image: url })} />
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
          <button type="submit" disabled={saving}
            className="rounded-full bg-[#0000FF] px-8 py-3 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-60">
            {saving ? 'Saving...' : isEdit ? 'Update Project' : 'Create Project'}
          </button>
          <button type="button" onClick={() => navigate('/admin/portfolio')}
            className="rounded-full border border-black/10 bg-white px-8 py-3 font-sans text-sm font-bold text-black/60 transition-all hover:bg-black/5">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
