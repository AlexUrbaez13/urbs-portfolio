const projects = [
  {
    title: "Project One",
    description: "A brief description of what this project does and the problem it solves.",
    tag: "React",
    github: "https://github.com/AlexUrbaez13",
    live: "#"
  },
  {
    title: "Project Two",
    description: "A brief description of what this project does and the problem it solves.",
    tag: "JavaScript",
    github: "https://github.com/AlexUrbaez13",
    live: "#"
  },
  {
    title: "Project Three",
    description: "A brief description of what this project does and the problem it solves.",
    tag: "CSS",
    github: "https://github.com/AlexUrbaez13",
    live: "#"
  }
]

function Projects() {
  return (
    <section id="projects" className="py-12 border-t border-gray-200">
      <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Selected Projects</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-xl p-5">
            <span className="text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-3 inline-block">
              {project.tag}
            </span>
            <h3 className="font-medium text-sm mb-2">{project.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed mb-4">{project.description}</p>
            <div className="flex gap-2">
              <a href={project.github} target="_blank" rel="noreferrer" className="text-xs px-3 py-1 border border-gray-200 rounded-md text-gray-500 hover:text-black">GitHub</a>
              <a href={project.live} className="text-xs px-3 py-1 border border-gray-200 rounded-md text-gray-500 hover:text-black">Live</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects