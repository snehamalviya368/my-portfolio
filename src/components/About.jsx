function About() {
  const info = [
    {
      value: "2027",
      title: "Graduation",
    },
    {
      value: "Java",
      title: "Programming",
    },
    {
      value: "MERN",
      title: "Full Stack",
    },
    {
      value: "CSE",
      title: "Engineering",
    },
  ]

  return (
    <section
      id="about"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            A little about me
          </h2>
        </div>


        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Left Side */}
          <div className="animate-fade-up">

            <p className="text-gray-300 text-lg leading-relaxed">
              I am a Computer Science and Engineering student
              with a strong interest in software development and
              modern web technologies.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              I enjoy building web applications using the MERN
              stack and strengthening my problem-solving skills
              with Java and Data Structures & Algorithms.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed mt-6">
              I am continuously learning, working on real-world
              projects, and looking for opportunities where I can
              grow as a software developer.
            </p>

          </div>


          {/* Right Side - Cards */}
          <div className="grid grid-cols-2 gap-4">

            {info.map((item) => (

              <div
                key={item.title}
                className="group border border-white/10
                rounded-2xl p-6 bg-white/5
                hover:border-blue-400
                hover:-translate-y-2
                hover:bg-white/10
                transition-all duration-300"
              >

                <p
                  className="text-3xl font-bold text-blue-400
                  group-hover:scale-105
                  transition-transform duration-300"
                >
                  {item.value}
                </p>

                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default About