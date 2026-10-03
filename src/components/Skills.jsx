import {
  FaJava,
  FaJs,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa"

import { SiExpress, SiMongodb } from "react-icons/si"


function Skills() {

  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
      category: "Programming",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      category: "Programming",
    },
    {
      name: "React",
      icon: <FaReact />,
      category: "Frontend",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      category: "Backend",
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
      category: "Backend",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
      category: "Database",
    },
    {
      name: "HTML",
      icon: <FaHtml5 />,
      category: "Frontend",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      category: "Frontend",
    },
    {
      name: "Git & GitHub",
      icon: <FaGithub />,
      category: "Tools",
    },
  ]


  return (
    <section
      id="skills"
      className="bg-black text-white px-6 py-24"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">

          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Technologies I work with
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl">
            I enjoy learning and working with modern technologies
            to build practical and user-friendly applications.
          </p>

        </div>


        {/* Skills */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="group border border-white/10
              rounded-2xl p-6 bg-white/5
              hover:border-blue-400
              hover:-translate-y-2
              hover:bg-white/10
              transition-all duration-300"
            >

              {/* Icon */}
              <div
                className="text-4xl text-blue-400
                group-hover:scale-110
                transition-transform duration-300"
              >
                {skill.icon}
              </div>


              {/* Skill Name */}
              <h3
                className="text-xl font-semibold mt-5
                group-hover:text-blue-400
                transition duration-300"
              >
                {skill.name}
              </h3>


              {/* Category */}
              <p className="text-gray-500 text-sm mt-2">
                {skill.category}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}


export default Skills