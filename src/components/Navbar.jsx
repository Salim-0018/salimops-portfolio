import { useState } from "react"

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    ["Home", "#home"],
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Projects", "#projects"],
    ["Journey", "#journey"],
    ["Contact", "#contact"],
  ]

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-wide text-cyan-400"
        >
          Salim<span className="text-white">Ops</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {links.map(([name, href]) => (
            <a
              key={name}
              href={href}
              className="text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {name}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden rounded-lg border border-cyan-400 px-4 py-2 text-sm font-medium text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950 md:block"
        >
          Let's Connect
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-slate-700 px-3 py-2 text-xl text-cyan-400 md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map(([name, href]) => (
              <a
                key={name}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 transition hover:bg-slate-900 hover:text-cyan-400"
              >
                {name}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-cyan-400 px-4 py-3 text-center font-semibold text-slate-950"
            >
              Let's Connect
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
