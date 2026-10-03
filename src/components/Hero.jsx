import { useEffect, useState } from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import profilePhoto from "../assets/sneha-photo.png"

function Hero() {

  // Typing roles
  const roles = ["Frontend Devloper"]

  const [roleIndex, setRoleIndex] = useState(0)
  const [text, setText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex]

    let delay = isDeleting ? 70 : 120

    // Text complete hone ke baad thoda wait
    if (!isDeleting && text === currentRole) {
      delay = 1200
    }

    const timer = setTimeout(() => {

      // Typing
      if (!isDeleting && text !== currentRole) {
        setText(currentRole.substring(0, text.length + 1))
      }

      // Delete start
      else if (!isDeleting && text === currentRole) {
        setIsDeleting(true)
      }

      // Deleting
      else if (isDeleting && text !== "") {
        setText(currentRole.substring(0, text.length - 1))
      }

      // Next role
      else if (isDeleting && text === "") {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % roles.length)
      }

    }, delay)

    return () => clearTimeout(timer)

  }, [text, isDeleting, roleIndex])


  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center px-6 pt-20 relative overflow-hidden"
    >

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/10 blur-3xl rounded-full"></div>


      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">


        {/* LEFT CONTENT */}
        <div className="animate-fade-up">

          {/* Intro */}
          <p className="text-blue-400 text-lg font-medium mb-4">
            Hello, I'm
          </p>


          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Sneha Malviya
          </h1>


          {/* Typing Role */}
          <h2 className="text-2xl md:text-3xl font-semibold mt-5">
            <span className="text-blue-400">
              {text}
            </span>
            <span className="text-purple-400">|</span>
          </h2>


          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl mt-6">
            I’m a Computer Science student passionate about building
            modern web applications and turning ideas into practical
            digital experiences.
          </p>


          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">

            {/* View Projects */}
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition duration-300 font-medium"
            >
              View My Work
            </a>


            {/* Contact */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-white/20 hover:border-blue-400 hover:text-blue-400 transition duration-300 font-medium"
            >
              Contact Me
            </a>

          </div>


          {/* Social Links */}
          <div className="flex items-center gap-5 mt-8">

            {/* GitHub */}
            <a
              href="https://github.com/snehamalviya368"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaGithub size={25} />
            </a>


            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sneha-malviya12/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaLinkedinIn size={25} />
            </a>

          </div>

        </div>


        {/* RIGHT SIDE - PHOTO */}
        <div className="flex justify-center md:justify-end animate-fade-in">

          <div className="relative">

            {/* Photo Glow */}
            <div
              className="absolute -inset-8 bg-blue-500/10 blur-3xl rounded-full"
            ></div>


            {/* Photo */}
            <img
              src={profilePhoto}
              alt="Sneha Malviya"
              className="relative w-72 h-96 md:w-80 md:h-96 object-cover rounded-2xl border border-white/10 shadow-2xl"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero