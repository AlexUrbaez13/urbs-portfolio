"use client"

import { useEffect, useState } from "react"

function FloatingNavBar() {
  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ]

  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

        if (visibleSection?.target?.id) {
          setActiveSection(visibleSection.target.id)
        }
      },
      {
        threshold: 0.45,
        rootMargin: "-20% 0px -20% 0px",
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => {
      sections.forEach((section) => observer.unobserve(section))
    }
  }, [])

  return (
    <div className="w-full flex justify-center pt-5 mb-8">
      <nav className="flex items-center gap-2">
        {links.map((link) => {
          const isActive = activeSection === link.id

          return (
            <a
              key={link.name}
              href={link.href}
              className={`px-3.5 py-2 rounded-full border backdrop-blur-xl text-sm transition-all duration-300 ${
                isActive
                  ? "text-white border-[#e07b39]/50 bg-[#1a1a1a]/90 shadow-[0_0_14px_rgba(224,123,57,0.18)]"
                  : "text-white/60 border-white/10 bg-[#111111]/70 hover:text-white hover:border-[#e07b39]/40 hover:shadow-[0_0_12px_rgba(224,123,57,0.15)]"
              }`}
            >
              {link.name}
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default FloatingNavBar