const projects = [
  {
    title: "Project one",
    description: "A short description of what this project does and the problem it solves.",
    tag: "React",
    github: "https://github.com/AlexUrbaez13",
    live: "https://next-pokedex-neon.vercel.app/"
  },
  {
    title: "Project two",
    description: "A short description of what this project does and the problem it solves.",
    tag: "JavaScript",
    github: "https://github.com/AlexUrbaez13",
    live: "#"
  },
  {
    title: "Project three",
    description: "A short description of what this project does and the problem it solves.",
    tag: "CSS",
    github: "https://github.com/AlexUrbaez13",
    live: "#"
  }
]

function Projects() {
  return (
    <section id="projects" className="py-16 border-t border-white/8">
      <div className="flex items-center gap-3 mb-4">
        <span className="w-5 h-px bg-[#e07b39]"></span>
        <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">Portfolio</span>
      </div>
      <h2 className="text-3xl font-medium tracking-tight mb-8">My best projects.</h2>
      <div className="grid grid-cols-3 gap-3">
        {projects.map((project, index) => (
          <div key={index} className="bg-[#161616] border border-white/7 rounded-xl p-6 flex flex-col gap-3 hover:border-white/15">
            <div className="text-[11px] text-white/25">0{index + 1}</div>
            <h3 className="text-sm font-medium">{project.title}</h3>
            <p className="text-xs text-white/40 leading-relaxed flex-1">{project.description}</p>
            <div className="flex justify-between items-center pt-3 border-t border-white/7">
              <span className="text-[11px] text-[#e07b39]">{project.tag}</span>
             <a href={project.live} target="_blank" rel="noreferrer" className="text-xs text-white/30 hover:text-white">↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects