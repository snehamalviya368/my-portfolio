import { useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4">

        {/* Top Navbar */}
        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#home"
            onClick={closeMenu}
            className="text-xl font-bold tracking-wide"
          >
            Sneha<span className="text-blue-400">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm">
            <a
              href="#home"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-300 hover:text-blue-400 transition duration-300"
            >
              Contact
            </a>
          </div>

          {/* Desktop Let's Talk */}
          <a
            href="#contact"
            className="hidden md:block border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-blue-400 hover:text-black transition duration-300"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-blue-400 text-2xl"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-3 border-t border-white/10 pt-4">

            <div className="flex flex-col gap-5 text-sm">

              <a
                href="#home"
                onClick={closeMenu}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={closeMenu}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="text-gray-300 hover:text-blue-400 transition duration-300"
              >
                Contact
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="w-fit border border-white/20 px-4 py-2 rounded-full hover:border-blue-400 hover:text-blue-400 transition duration-300"
              >
                Let's Talk
              </a>

            </div>
          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar