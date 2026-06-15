import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { blogPosts } from '../data/blogs'

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
            Our Blog
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-sans text-4xl font-bold leading-[1.1] tracking-tight text-black md:text-6xl">
            Latest Insights And Tips From Our Experts
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-sans text-base leading-relaxed text-black/70 md:text-lg">
            Explore articles on smart home technology, security solutions, networking, and AV systems.
          </p>
        </AnimatedSection>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-3xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-sans text-xl font-bold leading-tight text-black transition-colors group-hover:text-[#0000FF]">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 font-sans text-sm leading-relaxed text-black/60">
                    {post.excerpt}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f2f2] font-sans text-xs font-bold text-black">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-sans text-xs font-medium text-black/70">
                        {post.author}
                      </span>
                    </div>
                    <span className="font-sans text-xs text-black/50">
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  )
}
