import { Link } from 'react-router-dom'
import AnimatedSection from '../components/AnimatedSection'
import { blogPosts } from '../data/blogs'

export default function Blog() {
  return (
    <div className="min-h-screen bg-[#f2f2f2] pt-28 pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-12">
        <AnimatedSection className="text-center">
          <span className="inline-block rounded-full border border-black/10 bg-white px-4 py-1.5 font-sans text-[11px] font-bold uppercase tracking-[0.15em] text-black/70">
            Our Blog
          </span>
          <h1 className="mx-auto mt-5 max-w-3xl font-sans text-3xl font-bold leading-[1.1] tracking-tight text-black md:text-5xl lg:text-6xl">
            Latest Insights And Tips From Our Experts
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-sans text-sm leading-relaxed text-black/70 md:text-lg">
            Explore articles on smart home technology, security solutions, networking, and AV systems.
          </p>
        </AnimatedSection>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {blogPosts.map((post, index) => (
            <AnimatedSection key={post.id} delay={index * 0.1}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl"
              >
                <div className="relative h-48 overflow-hidden sm:h-56">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/20 bg-white/10 px-3 py-1 font-sans text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm sm:left-5 sm:top-5">
                    {post.category}
                  </span>
                </div>

                <div className="flex flex-1 flex-col overflow-hidden p-5 sm:p-6">
                  <h2 className="break-words font-sans text-base font-bold leading-tight text-black transition-colors group-hover:text-[#0000FF] sm:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 break-words font-sans text-xs leading-relaxed text-black/60 sm:text-sm sm:mt-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4 sm:mt-6 sm:pt-5">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f2f2f2] font-sans text-[10px] font-bold text-black sm:h-8 sm:w-8 sm:text-xs">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <span className="font-sans text-[11px] font-medium text-black/70 sm:text-xs">
                        {post.author}
                      </span>
                    </div>
                    <span className="font-sans text-[11px] text-black/50 sm:text-xs">
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
