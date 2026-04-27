"use client"

import { useState } from "react"
import Projects from '../components/Projects'
import FloatingNavBar from "../components/FloatingNavBar"

export default function HomePage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

 async function handleSubmit(e) {
  e.preventDefault()
  setLoading(true)
  setSuccess(false)
  setError(false)

  const formData = new FormData(e.target)

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
      }),
    })

    if (res.ok) {
      setSuccess(true)
      e.target.reset()
    } else {
      setError(true)
    }
  } catch (err) {
    setError(true)
  }

  setLoading(false)
}

  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white relative overflow-hidden">
      <FloatingNavBar />

      {/* Animated background orbs */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255, 107, 8, 0.08) 0%, transparent 70%)',
            top: '-100px',
            left: '-100px',
            animation: 'float1 8s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(224,123,57,0.05) 0%, transparent 70%)',
            bottom: '100px',
            right: '-50px',
            animation: 'float2 10s ease-in-out infinite',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(180,80,20,0.06) 0%, transparent 70%)',
            top: '40%',
            left: '40%',
            animation: 'float3 12s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(40px, 30px); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-30px, -40px); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(20px, -30px); }
        }
        .glow-card {
          transition: all 0.3s ease;
          border: 0.5px solid rgba(255,255,255,0.07);
        }
        .glow-card:hover {
          border-color: rgba(224,123,57,0.5);
          box-shadow: 0 0 25px rgba(224,123,57,0.12), 0 0 60px rgba(224,123,57,0.06);
          transform: translateY(-4px) scale(1.02);
        }
        .glow-btn:hover {
          box-shadow: 0 0 20px rgba(224,123,57,0.4);
        }
        .glow-link:hover {
          color: white;
          border-color: rgba(224,123,57,0.4);
          box-shadow: 0 0 12px rgba(224,123,57,0.15);
        }
      `}</style>

      <div className="max-w-4xl mx-auto px-8 relative z-10">
        <section id="home" className="py-24 mt-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-7 h-px bg-[#e07b39]"></span>
            <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">
              Web Developer
            </span>
          </div>

          <h1 className="text-6xl font-medium leading-tight tracking-tight mb-7">
            Building things
            <br />
            <span className="text-white/25">for the web.</span>
          </h1>

          <p className="text-sm text-white/45 leading-relaxed max-w-sm mb-10">
            I craft clean, fast, and modern web experiences with a focus on great
            design and solid code.
          </p>

          <div className="flex gap-3">
            <a
              href="#projects"
              className="glow-btn bg-[#e07b39] text-white px-7 py-3 rounded-md text-sm font-medium transition-all"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="glow-link border border-white/15 text-white/50 px-7 py-3 rounded-md text-sm transition-all"
            >
              Get in touch
            </a>
          </div>
        </section>

        <div className="flex gap-16 py-10 border-t border-b border-white/8 mb-16">
          <div className="glow-card rounded-lg px-6 py-4">
            <div className="text-3xl font-medium">
              3<span className="text-[#e07b39]">+</span>
            </div>
            <div className="text-xs text-white/40 mt-1">Projects built</div>
          </div>

          <div className="glow-card rounded-lg px-6 py-4">
            <div className="text-3xl font-medium">
              3<span className="text-[#e07b39]">+</span>
            </div>
            <div className="text-xs text-white/40 mt-1">Technologies</div>
          </div>

          <div className="glow-card rounded-lg px-6 py-4">
            <div className="text-3xl font-medium">
              2<span className="text-[#e07b39]">+</span>
            </div>
            <div className="text-xs text-white/40 mt-1">Years learning</div>
          </div>
        </div>

        <Projects />

        <section id="skills" className="py-16 border-t border-white/8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-[#e07b39]"></span>
            <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">
              Skills
            </span>
          </div>

          <h2 className="text-3xl font-medium tracking-tight mb-8">
            What I work with.
          </h2>

          <div className="flex flex-wrap gap-2">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Tailwind',
              'Git',
              'Next.js',
              'Responsive design',
            ].map((skill) => (
              <span
                key={skill}
                className="glow-card text-xs px-5 py-2 rounded-full text-white/50 bg-[#161616] cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="py-16 border-t border-white/8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-5 h-px bg-[#e07b39]"></span>
            <span className="text-[11px] text-[#e07b39] uppercase tracking-widest">
              Contact
            </span>
          </div>

          <div className="flex justify-between items-start gap-8">
            <div>
              <h2 className="text-3xl font-medium tracking-tight mb-3">
                Let's work together.
              </h2>
              <p className="text-sm text-white/40 leading-relaxed max-w-sm">
                Open to new opportunities and collaborations. Reach out and let's
                build something great.
              </p>

              <div className="flex gap-3 mt-6">
                <a
                  href="https://github.com/AlexUrbaez13"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-link text-xs text-white/40 px-5 py-2.5 border border-white/10 rounded-md bg-[#161616] transition-all"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/alex-urbaez-563240391/"
                  target="_blank"
                  rel="noreferrer"
                  className="glow-link text-xs text-white/40 px-5 py-2.5 border border-white/10 rounded-md bg-[#161616] transition-all"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-2 items-end w-full max-w-xs"
            >
              <input
                name="name"
                placeholder="Name"
                required
                className="w-full bg-[#161616] border border-white/10 px-3 py-2 rounded-md text-xs text-white placeholder:text-white/25 outline-none focus:border-[#e07b39]"
              />

              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-[#161616] border border-white/10 px-3 py-2 rounded-md text-xs text-white placeholder:text-white/25 outline-none focus:border-[#e07b39]"
              />

              <textarea
                name="message"
                placeholder="Message"
                required
                className="w-full bg-[#161616] border border-white/10 px-3 py-2 rounded-md text-xs text-white placeholder:text-white/25 h-24 resize-none outline-none focus:border-[#e07b39]"
              />

              <button
                type="submit"
                disabled={loading}
                className="glow-link text-xs text-white/40 px-5 py-2.5 border border-white/10 rounded-md bg-[#161616] transition-all disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send"}
              </button>

              {success && (
                <p className="text-green-400 text-xs mt-1">
                  Message sent ✓
                </p>
              )}
            </form>
          </div>
        </section>

        <footer className="py-8 border-t border-white/8 flex justify-between">
          <span className="text-xs text-white/25">Alex Urbaez — 2026</span>
          <span className="text-xs text-white/25">Web Developer</span>
        </footer>
      </div>
    </div>
  )
}