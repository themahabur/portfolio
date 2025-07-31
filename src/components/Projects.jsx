// components/Projects.jsx
import projects2 from "../assets/icon/project1.png";
import projects1 from "../assets/icon/project2.png";
import projects3 from "../assets/icon/project3.png";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      name: "StaffSync",
      image: projects3,
      tech: ["React", "Express", "MongoDB"],
      description:
        "StaffSync is a full-stack employee management web application",
      live: "https://staffsync-8c4f3.web.app",
      github: "https://github.com/themahabur/StaffSync",
      challenges:
        "Implementing payment integration and role-based access control.",
    },
    {
      name: "Recipe Book",
      image: projects1,
      tech: ["React", "Firebase", "Tailwind"],
      description: "A recipe sharing app for food lovers.",
      live: "https://recipe-book-app-9d3da.web.app/",
      github: "https://github.com/themahabur/Recipe-Book",
      challenges: "Managing state globally and integrating Firebase auth.",
    },
    {
      name: "EduSpark",
      image: projects2,
      tech: ["MERN", "Tailwind", "JWT"],
      description: "A service-sharing education platform.",
      live: "https://eduspark-bd07e.web.app/",
      github: "https://github.com/themahabur/EduSpark",
      challenges: "Role-based routing and secure backend integration.",
    },
  ];

  return (
    <section
      id="projects"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl  mx-auto space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl text-center font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              key={idx}
              className="group px-2  relative border border-gray-100 dark:border-gray-700 rounded-2xl bg-white dark:bg-gray-800 shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover object-top rounded-t-2xl"
              />

              <div className="p-5 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 text-xs font-medium">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gradient-to-br from-emerald-100 to-teal-100 text-emerald-700 dark:bg-emerald-800/20 dark:text-emerald-300 px-2 py-0.5 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="text-gray-700 dark:text-gray-400 text-sm">
                  <strong>Challenges:</strong> {project.challenges}
                </p>

                <div className="flex justify-between items-center pt-2">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    🔗 Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-indigo-500"
                  >
                    GitHub →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
