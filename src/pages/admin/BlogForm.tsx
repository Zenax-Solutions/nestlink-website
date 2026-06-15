import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { blogs } from '../../api'
import HtmlEditor from '../../components/HtmlEditor'
import ImageUploader from '../../components/ImageUploader'

export default function BlogForm() {
  const { id } = useParams()
  const navigate = useNavigate()
  const isEdit = !!id
  const [saving, setSaving] = useState(false)

  const [form, setForm] = useState({
    slug: '',
    title: '',
    excerpt: '',
    category: '',
    author: '',
    read_time: '',
    date: '',
    image: '',
    content: '',
    sidebar: '',
  })

  useEffect(() => {
    if (id) {
      blogs.list().then((all) => {
        const blog = all.find((b) => b.id === Number(id))
        if (blog) {
          setForm({
            slug: blog.slug,
            title: blog.title,
            excerpt: blog.excerpt,
            category: blog.category,
            author: blog.author,
            read_time: blog.read_time,
            date: blog.date,
            image: blog.image,
            content: blog.content,
            sidebar: Array.isArray(blog.sidebar) ? blog.sidebar.join('\n') : '',
          })
        }
      })
    }
  }, [id])

  const generateSlug = (title: string) =>
    title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

  const handleTitleChange = (title: string) => {
    setForm((prev) => ({
      ...prev,
      title,
      slug: isEdit ? prev.slug : generateSlug(title),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSaving(true)

    const payload = {
      ...form,
      sidebar: JSON.stringify(form.sidebar.split('\n').filter(Boolean)),
    }

    try {
      if (isEdit) {
        await blogs.update(Number(id), payload)
      } else {
        await blogs.create(payload)
      }
      navigate('/admin/blogs')
    } catch (err: any) {
      alert(err.message || 'Failed to save')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div>
      <h1 className="font-sans text-2xl font-bold text-black">
        {isEdit ? 'Edit Blog Post' : 'New Blog Post'}
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Title</label>
            <input value={form.title} onChange={(e) => handleTitleChange(e.target.value)} required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
          <div>
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Slug</label>
            <input value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} required
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
          <div>
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Category</label>
            <input value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
          <div>
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Author</label>
            <input value={form.author} onChange={(e) => setForm({ ...form, author: e.target.value })}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
          <div>
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Read Time</label>
            <input value={form.read_time} onChange={(e) => setForm({ ...form, read_time: e.target.value })} placeholder="5 min read"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
          <div>
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Date</label>
            <input value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} placeholder="Jan 15, 2026"
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Image</label>
            <ImageUploader value={form.image} onChange={(url) => setForm({ ...form, image: url })} />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Excerpt</label>
            <textarea value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} rows={2}
              className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Content</label>
            <HtmlEditor value={form.content} onChange={(html) => setForm({ ...form, content: html })} />
          </div>
          <div className="md:col-span-2">
            <label className="mb-1.5 block font-sans text-xs font-semibold uppercase tracking-wider text-black/60">Sidebar (one item per line)</label>
            <textarea value={form.sidebar} onChange={(e) => setForm({ ...form, sidebar: e.target.value })} rows={4}
              className="w-full resize-none rounded-xl border border-black/10 bg-white px-4 py-3 font-sans text-sm text-black outline-none focus:border-[#0000FF]/50" />
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
          <button type="submit" disabled={saving}
            className="rounded-full bg-[#0000FF] px-8 py-3 font-sans text-sm font-bold text-white transition-all hover:scale-[1.02] disabled:opacity-60">
            {saving ? 'Saving...' : isEdit ? 'Update Post' : 'Create Post'}
          </button>
          <button type="button" onClick={() => navigate('/admin/blogs')}
            className="rounded-full border border-black/10 bg-white px-8 py-3 font-sans text-sm font-bold text-black/60 transition-all hover:bg-black/5">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}
