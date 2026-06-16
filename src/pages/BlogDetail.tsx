import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { blogs, UPLOADS_URL, type Blog } from '../api'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [post, setPost] = useState<Blog | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!slug) return
    setLoading(true)
    blogs.get(slug)
      .then((data) => setPost(data))
      .catch(() => setPost(null))
      .finally(() => setLoading(false))
  }, [slug])

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f2f2f2]">
        <p className="font-sans text-sm text-black/40">Loading post...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-[#f2f2f2] px-6 text-center">
        <h1 className="font-sans text-4xl font-bold text-black">Blog not found</h1>
        <p className="mt-4 font-sans text-black/60">
          The article you are looking for does not exist.
        </p>
        <Link
          to="/blog"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#070b0a] px-6 py-3 font-sans text-sm font-bold text-white"
        >
          Back to Blog
          <ArrowUpRight size={16} />
        </Link>
      </div>
    )
  }

  const sidebarItems: string[] = (() => {
    try { return JSON.parse(post.sidebar) } catch { return [] }
  })()

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[360px] w-full sm:h-[65vh] sm:min-h-[480px]">
        <img
          src={post.image ? `${UPLOADS_URL}${post.image}` : '/placeholder.jpg'}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-4 pb-8 sm:px-6 sm:pb-12 md:px-12">
          <AnimatedSection>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl md:p-10">
              <div className="font-sans text-xs text-white/70 sm:text-sm">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="mx-1.5 sm:mx-2">/</span>
                <Link to="/blog" className="hover:text-white">Blog</Link>
                <span className="mx-1.5 sm:mx-2">/</span>
                <span className="text-white/50">Blog Details</span>
              </div>

              <div className="mt-5 flex flex-col gap-5 sm:mt-6 sm:gap-8 lg:flex-row lg:items-end lg:justify-between">
                <h1 className="max-w-3xl break-words font-sans text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>

                <div className="flex flex-col gap-2 text-white sm:gap-3 shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 font-sans text-sm font-bold text-white sm:h-10 sm:w-10">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-sans text-sm font-semibold">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4 font-sans text-xs text-white/70">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.read_time}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:px-12 md:py-24">
        <div className="grid gap-10 lg:grid-cols-[280px_1fr] lg:gap-12">
          {sidebarItems.length > 0 && (
            <AnimatedSection>
              <div className="lg:sticky lg:top-28">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-black/50 sm:text-sm">
                  {post.category}
                </span>
                <div className="mt-4 flex flex-wrap gap-2 sm:mt-5 lg:flex-col">
                  {sidebarItems.map((item) => (
                    <span
                      key={item}
                      className="w-fit rounded-full border border-black/10 bg-white px-3 py-1.5 font-sans text-xs text-black/80 sm:px-4 sm:py-2 sm:text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          <AnimatedSection delay={0.15} className="min-w-0">
            {post.content ? (
              <article
                className="prose prose-base prose-slate max-w-none font-sans break-words
                  prose-headings:font-sans prose-headings:font-bold prose-headings:text-black
                  prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3 prose-h3:leading-tight
                  prose-p:text-black/80 prose-p:leading-[1.8] prose-p:my-4
                  prose-a:text-[#0000FF] prose-a:no-underline hover:prose-a:underline
                  prose-strong:text-black prose-strong:font-semibold
                  prose-ul:my-4 prose-ul:pl-6 prose-ol:my-4 prose-ol:pl-6
                  prose-li:text-black/80 prose-li:my-1.5
                  prose-blockquote:border-l-[#0000FF] prose-blockquote:bg-[#0000FF]/5 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:my-6 prose-blockquote:text-black/70
                  sm:prose-lg"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <p className="font-sans text-sm text-black/40">No content available.</p>
            )}

            <div className="mt-10 flex flex-col items-start gap-4 border-t border-black/10 pt-8 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#070b0a] px-6 py-3 font-sans text-sm font-bold text-white transition-transform hover:scale-105"
              >
                <ArrowUpRight size={16} />
                Back to Blog
              </Link>
              <div className="flex items-center gap-2">
                <span className="font-sans text-xs text-black/50 sm:text-sm">Share:</span>
                <button
                  type="button"
                  onClick={() => navigator.clipboard.writeText(window.location.href)}
                  className="rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-xs font-medium text-black/70 hover:bg-black hover:text-white"
                >
                  Copy Link
                </button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </div>
  )
}
