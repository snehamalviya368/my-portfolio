import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa"

function Contact() {
  const contacts = [
    {
      title: "Email",
      description: "snehamalviya368@gmail.com",
      icon: <FaEnvelope />,
      link: "mailto:snehamalviya368@gmail.com",
    },
    {
      title: "GitHub",
      description: "View my projects",
      icon: <FaGithub />,
      link: "https://github.com/snehamalviya368",
    },
    {
      title: "LinkedIn",
      description: "Connect with me",
      icon: <FaLinkedinIn />,
      link: "https://www.linkedin.com/in/sneha-malviya12/",
    },
  ]

  return (
    <section
      id="contact"
      className="bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">

          <p className="text-blue-400 text-sm font-medium uppercase tracking-widest">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Let's connect
          </h2>

          <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities,
            projects, and interesting ideas.
          </p>

        </div>


        {/* Contact Box */}
        <div
          className="max-w-3xl mx-auto border border-white/10
          rounded-2xl p-8 bg-white/5"
        >

          <div className="grid md:grid-cols-3 gap-6">

            {contacts.map((contact) => (

              <a
                key={contact.title}
                href={contact.link}
                target={contact.title === "Email" ? undefined : "_blank"}
                rel={
                  contact.title === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
                className="group flex flex-col items-center text-center
                p-6 rounded-xl
                border border-transparent
                hover:border-blue-400
                hover:bg-white/5
                hover:-translate-y-2
                transition-all duration-300"
              >

                {/* Icon */}
                <div
                  className="text-3xl text-blue-400
                  group-hover:scale-110
                  transition-transform duration-300"
                >
                  {contact.icon}
                </div>


                {/* Title */}
                <h3
                  className="font-semibold mt-4
                  group-hover:text-blue-400
                  transition duration-300"
                >
                  {contact.title}
                </h3>


                {/* Description */}
                <p className="text-gray-400 text-sm mt-2 break-all">
                  {contact.description}
                </p>

              </a>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact