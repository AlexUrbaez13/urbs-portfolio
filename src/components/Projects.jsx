function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-white/8">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-5 h-px bg-[#e07b39]" />
        <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">
          Portfolio
        </span>
      </div>

      <h2 className="text-3xl font-medium tracking-tight mb-8">
        My best projects.
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <div className="group project-card">
          <div className="relative w-full h-40 overflow-hidden bg-black">
            <img
              src="https://api.microlink.io/?url=https://next-pokedex-neon.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
              alt="Pokedex project preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e07b39]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className="p-6 flex flex-col gap-3 flex-1">
            <div className="text-[11px] text-white/25">01</div>
            <h3 className="text-sm font-medium transition-colors duration-300 group-hover:text-[#ff9a5c]">
              Pokedex
            </h3>
            <p className="text-xs text-white/40 leading-relaxed flex-1">
              Built a dynamic Pokédex app using Next.js and React Query with advanced filtering, caching, and optimized data fetching to improve performance and user experience.
            </p>

            <div className="flex justify-between items-center pt-3 border-t border-white/7">
              <span className="text-[11px] text-[#e07b39]">Next.js</span>
              <a
                href="https://next-pokedex-neon.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/30 transition-colors duration-300 group-hover:text-white"
              >
                ↗
              </a>
            </div>
          </div>
        </div>

        <div className="group project-card">
          <div className="relative w-full h-40 overflow-hidden bg-black">
            <img
              src="https://api.microlink.io/?url=https://highcaliber-project.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
              alt="HighCaliber project preview"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#e07b39]/25 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>

          <div className="p-6 flex flex-col gap-3 flex-1">
            <div className="text-[11px] text-white/25">02</div>
            <h3 className="text-sm font-medium transition-colors duration-300 group-hover:text-[#ff9a5c]">
              HighCaliber
            </h3>
            <p className="text-xs text-white/40 leading-relaxed flex-1">
              Built an AI-powered search system for YouTube content using OpenAI and Next.js, improving discovery and performance.
            </p>

            <div className="flex justify-between items-center pt-3 border-t border-white/7">
              <span className="text-[11px] text-[#e07b39]">Next.js</span>
              <a
                href="https://highcaliber-project.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/30 transition-colors duration-300 group-hover:text-white"
              >
                ↗
              </a>
            </div>
          </div>
        </div>

        <div className="group project-card">
          <div className="relative w-full h-40 overflow-hidden bg-black">
            <div className="absolute inset-0 bg-gradient-to-br from-[#e07b39]/20 via-transparent to-[#7c3aed]/20" />
            <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm tracking-[0.2em] uppercase">
              Coming Soon
            </div>
          </div>

          <div className="p-6 flex flex-col gap-3 flex-1">
            <div className="text-[11px] text-white/25">03</div>
            <h3 className="text-sm font-medium transition-colors duration-300 group-hover:text-[#ff9a5c]">
              Project three
            </h3>
            <p className="text-xs text-white/40 leading-relaxed flex-1">
              A short description of what this project does and the problem it solves.
            </p>

            <div className="flex justify-between items-center pt-3 border-t border-white/7">
              <span className="text-[11px] text-[#e07b39]">CSS</span>
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/30 transition-colors duration-300 group-hover:text-white"
              >
                ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects