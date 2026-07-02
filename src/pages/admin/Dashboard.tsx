import { useEffect, useState } from 'react'
import { FileText, Image, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { blogs, portfolio, emails } from '../../api'

export default function Dashboard() {
  const [blogCount, setBlogCount] = useState(0)
  const [portfolioCount, setPortfolioCount] = useState(0)
  const [emailCount, setEmailCount] = useState(0)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    blogs.list().then((data) => setBlogCount(data.length)).catch(() => {})
    portfolio.list().then((data) => setPortfolioCount(data.length)).catch(() => {})
    emails.stats().then((data) => { setEmailCount(data.total); setUnreadCount(data.unread) }).catch(() => {})
  }, [])

  const cards = [
    { label: 'Email Inquiries', count: emailCount, sub: `${unreadCount} unread`, icon: Mail, href: '/admin/emails', color: 'bg-green-50 text-green-600' },
    { label: 'Blog Posts', count: blogCount, icon: FileText, href: '/admin/blogs', color: 'bg-blue-50 text-[#0000FF]' },
    { label: 'Portfolio Projects', count: portfolioCount, icon: Image, href: '/admin/portfolio', color: 'bg-purple-50 text-purple-600' },
  ]

  return (
    <div>
      <h1 className="font-sans text-2xl font-bold text-black">Dashboard</h1>
      <p className="mt-1 font-sans text-sm text-black/50">Manage your site content</p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon
          return (
            <Link
              key={card.label}
              to={card.href}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${card.color}`}>
                <Icon size={24} />
              </div>
              <h2 className="font-sans text-3xl font-bold text-black">{card.count}</h2>
              {(card as any).sub && <p className="font-sans text-xs font-semibold text-red-500">{(card as any).sub}</p>}
              <p className="mt-1 font-sans text-sm text-black/50">{card.label}</p>
              <div className="mt-4 flex items-center gap-1 font-sans text-xs font-semibold text-[#0000FF] opacity-0 transition-opacity group-hover:opacity-100">
                Manage <ArrowRight size={14} />
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
