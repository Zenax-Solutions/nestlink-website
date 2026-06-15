import { useParams, Link } from 'react-router-dom'
import { ArrowUpRight, Clock, Calendar } from 'lucide-react'
import AnimatedSection from '../components/AnimatedSection'
import { getBlogBySlug } from '../data/blogs'

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>()
  const post = slug ? getBlogBySlug(slug) : undefined

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

  return (
    <div className="min-h-screen bg-[#f2f2f2]">
      {/* Hero */}
      <div className="relative h-[65vh] min-h-[480px] w-full">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-7xl px-6 pb-12 md:px-12">
          <AnimatedSection>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-xl md:p-10">
              <div className="font-sans text-sm text-white/70">
                <Link to="/" className="hover:text-white">Home</Link>
                <span className="mx-2">/</span>
                <Link to="/blog" className="hover:text-white">Blog</Link>
                <span className="mx-2">/</span>
                <span className="text-white/50">Blog Details</span>
              </div>

              <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                <h1 className="max-w-3xl font-sans text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                  {post.title}
                </h1>

                <div className="flex flex-col gap-3 text-white">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 font-sans text-sm font-bold text-white">
                      {post.author.split(' ').map(n => n[0]).join('')}
                    </div>
                    <span className="font-sans text-sm font-semibold">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-4 font-sans text-xs text-white/70">
                    <span className="flex items-center gap-1.5">
                      <Clock size={14} />
                      {post.readTime}
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
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[280px_1fr]">
          <AnimatedSection>
            <div className="sticky top-28">
              <span className="font-sans text-sm font-semibold uppercase tracking-wider text-black/50">
                {post.category}
              </span>
              <div className="mt-5 flex flex-wrap gap-2 lg:flex-col">
                {post.sidebar.map((item) => (
                  <span
                    key={item}
                    className="w-fit rounded-full border border-black/10 bg-white px-4 py-2 font-sans text-sm text-black/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <article
              className="prose prose-lg max-w-none font-sans text-black/80"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className="mt-12 flex flex-wrap items-center justify-between gap-4 border-t border-black/10 pt-8">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-full bg-[#070b0a] px-6 py-3 font-sans text-sm font-bold text-white transition-transform hover:scale-105"
              >
                <ArrowUpRight size={16} />
                Back to Blog
              </Link>
              <div className="flex items-center gap-2">
                <span className="font-sans text-sm text-black/50">Share:</span>
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
