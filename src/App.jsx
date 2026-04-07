import './App.css'
import Projects from './components/Projects'

function App() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white">
      <div className="max-w-4xl mx-auto px-8">

        {/* Navbar */}
        <nav className="flex justify-between items-center py-7 border-b border-white/8">
          <span className="text-sm font-medium tracking-wide">Alex Urbaez</span>
          <div className="flex gap-8">
            <a href="#projects" className="text-xs text-white/45 hover:text-white">work</a>
            <a href="#contact" className="text-xs text-white/45 hover:text-white">contact</a>
          </div>
        </nav>

        {/* Hero */}
        <section className="py-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-[#e07b39]"></span>
            <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">Web Developer</span>
          </div>
          <h1 className="text-6xl font-medium leading-tight tracking-tight mb-7">
            Building things<br />
            <span className="text-white/25">for the web.</span>
          </h1>
          <p className="text-sm text-white/45 leading-relaxed max-w-sm mb-10">
            I craft clean, fast, and modern web experiences with a focus on great design and solid code.
          </p>
          <div className="flex gap-3">
            <a href="#projects" className="bg-[#e07b39] text-white px-7 py-3 rounded-md text-sm font-medium">View my work</a>
            <a href="#contact" className="border border-white/15 text-white/50 px-7 py-3 rounded-md text-sm">Get in touch</a>
          </div>
        </section>

        {/* Stats */}
        <div className="flex gap-16 py-10 border-t border-b border-white/8 mb-16">
          <div>
            <div className="text-3xl font-medium">3<span className="text-[#e07b39]">+</span></div>
            <div className="text-xs text-white/40 mt-1">Projects built</div>
          </div>
          <div>
            <div className="text-3xl font-medium">3<span className="text-[#e07b39]">+</span></div>
            <div className="text-xs text-white/40 mt-1">Technologies</div>
          </div>
          <div>
            <div className="text-3xl font-medium">2<span className="text-[#e07b39]">+</span></div>
            <div className="text-xs text-white/40 mt-1">Years learning</div>
          </div>
        </div>

        {/* Projects */}
        <Projects />

        {/* Skills */}
        <section className="py-16 border-t border-white/8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-[#e07b39]"></span>
            <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">Skills</span>
          </div>
          <h2 className="text-3xl font-medium tracking-tight mb-8">What I work with.</h2>
          <div className="flex flex-wrap gap-2">
            {['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'Git', 'Vite', 'Responsive design'].map(skill => (
              <span key={skill} className="text-xs px-5 py-2 rounded-full border border-white/10 text-white/50 bg-[#161616]">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 border-t border-white/8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-[#e07b39]"></span>
            <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">Contact</span>
          </div>
          <div className="flex justify-between items-end gap-8">
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-3">Let's work together.</h2>
              <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                Open to new opportunities and collaborations. Reach out and let's build something great.
              </p>
            </div>
            <div className="flex flex-col gap-2 items-end">
              <a href="https://github.com/AlexUrbaez13" target="_blank" rel="noreferrer" className="text-xs text-white/40 px-5 py-2.5 border border-white/10 rounded-md bg-[#161616] hover:text-white">GitHub ↗</a>
              <a href="#" className="text-xs text-white/40 px-5 py-2.5 border border-white/10 rounded-md bg-[#161616] hover:text-white">LinkedIn ↗</a>
              <a href="mailto:youremail@gmail.com" className="text-xs text-white/40 px-5 py-2.5 border border-white/10 rounded-md bg-[#161616] hover:text-white">Email ↗</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/8 flex justify-between">
          <span className="text-xs text-white/25">Alex Urbaez — 2026</span>
          <span className="text-xs text-white/25">Web Developer</span>
        </footer>

      </div>
    </div>
  )
}

export default App
