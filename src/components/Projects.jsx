function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-white/8">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-5 h-px bg-[#e07b39]"></span>
        <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">
          Portfolio
        </span>
      </div>

      <h2 className="text-3xl font-medium tracking-tight mb-8">
        My best projects.
      </h2>

      <div className="grid grid-cols-3 gap-3">
        <div className="bg-[#161616] border border-white/7 rounded-xl flex flex-col overflow-hidden
          hover:border-[#e07b39]/50 hover:shadow-[0_0_20px_rgba(224,123,57,0.15)]
          hover:scale-105 transition-all duration-300 cursor-pointer">

          <div className="w-full h-40 flex items-center justify-center bg-black">
            <img
src="https://api.microlink.io/?url=https://next-pokedex-neon.vercel.app/&screenshot=true&meta=false&embed=screenshot.url"
  className="w-full h-full object-cover object-top"
/>
          </div>

          <div className="p-6 flex flex-col gap-3 flex-1">
            <div className="text-[11px] text-white/25">01</div>
            <h3 className="text-sm font-medium">Pokedex</h3>
            <p className="text-xs text-white/40 leading-relaxed flex-1">
              A Next.js Pokedex app that lets you browse and search all Pokemon.
            </p>

            <div className="flex justify-between items-center pt-3 border-t border-white/7">
              <span className="text-[11px] text-[#e07b39]">Next.js</span>
              <a
                href="https://next-pokedex-neon.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="text-xs text-white/30 hover:text-white"
              >
                ↗
              </a>
            </div>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/7 rounded-xl p-6 flex flex-col gap-3
          hover:border-[#e07b39]/50 hover:shadow-[0_0_20px_rgba(224,123,57,0.15)]
          hover:scale-105 transition-all duration-300 cursor-pointer">

          <div className="text-[11px] text-white/25">02</div>
          <h3 className="text-sm font-medium">Project two</h3>
          <p className="text-xs text-white/40 leading-relaxed flex-1">
            A short description of what this project does and the problem it solves.
          </p>

          <div className="flex justify-between items-center pt-3 border-t border-white/7">
            <span className="text-[11px] text-[#e07b39]">React</span>
            <a
              href="https://highcaliber-project.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/30 hover:text-white"
            >
              ↗
            </a>
          </div>
        </div>

        <div className="bg-[#161616] border border-white/7 rounded-xl p-6 flex flex-col gap-3
          hover:border-[#e07b39]/50 hover:shadow-[0_0_20px_rgba(224,123,57,0.15)]
          hover:scale-105 transition-all duration-300 cursor-pointer">

          <div className="text-[11px] text-white/25">03</div>
          <h3 className="text-sm font-medium">Project three</h3>
          <p className="text-xs text-white/40 leading-relaxed flex-1">
            A short description of what this project does and the problem it solves.
          </p>

          <div className="flex justify-between items-center pt-3 border-t border-white/7">
            <span className="text-[11px] text-[#e07b39]">CSS</span>
            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="text-xs text-white/30 hover:text-white"
            >
              ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects