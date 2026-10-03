function Projects() {
  const projects = [
    {
      title: "Time Utility MERN",
      image: "/time-utility.png",
      description:
        "A full-stack time utility application built with the MERN stack, featuring useful time-based tools and a modern interface.",
      tech: "React • Node.js • Express • MongoDB",
      github: "https://github.com/snehamalviya368/Time-Utility-MERN",
      live: "https://time-utility-mern-i28u.vercel.app/",
    },

    {
      title: "Simon Says Game",
      image: "/simon-says.png",
      description:
        "An interactive memory game where players follow and remember an increasing sequence of colors.",
      tech: "HTML • CSS • JavaScript",
      github: "https://github.com/snehamalviya368/Simon-Says-Game",
      live: "https://snehamalviya368.github.io/Simon-Says-Game/",
    },
  ]

  return (
    <section
      id="projects"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest">
            My Projects
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Things I've built
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl">
            A selection of projects I have built while developing
            my skills in web development and software engineering.
          </p>
        </div>


        {/* Project Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group border border-white/10 rounded-2xl
              overflow-hidden bg-white/5
              hover:border-blue-400
              hover:-translate-y-2
              hover:shadow-lg
              transition-all duration-300"
            >

              {/* Project Screenshot */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover
                  group-hover:scale-105
                  transition-transform duration-500"
                />
              </div>


              {/* Project Content */}
              <div className="p-6">

                {/* Project Number */}
                <p className="text-blue-400 text-sm font-medium">
                  0{index + 1}
                </p>


                {/* Title */}
                <h3 className="text-2xl font-bold mt-3
                group-hover:text-blue-400
                transition duration-300">
                  {project.title}
                </h3>


                {/* Description */}
                <p className="text-gray-400 leading-relaxed mt-4">
                  {project.description}
                </p>


                {/* Tech Stack */}
                <p className="text-gray-300 text-sm mt-5">
                  {project.tech}
                </p>


                {/* Buttons */}
                <div className="flex gap-3 mt-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full
                    border border-white/20
                    text-sm
                    hover:border-blue-400
                    hover:text-blue-400
                    transition duration-300"
                  >
                    GitHub
                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-full
                    bg-blue-500
                    text-sm
                    hover:bg-blue-600
                    transition duration-300"
                  >
                    Live Demo
                  </a>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Projects