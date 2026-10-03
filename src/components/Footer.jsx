function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        {/* Logo */}
        <a
          href="#home"
          className="text-lg font-bold hover:text-blue-400 transition duration-300"
        >
          Sneha<span className="text-blue-400">.</span>
        </a>


        {/* Copyright */}
        <p className="text-gray-500 text-sm text-center">
          © 2026 Sneha Malviya. All rights reserved.
        </p>


        {/* Back to Top */}
        <a
          href="#home"
          className="text-gray-400 text-sm
          hover:text-blue-400
          hover:-translate-y-1
          transition-all duration-300"
        >
          Back to top ↑
        </a>

      </div>
    </footer>
  )
}

export default Footer