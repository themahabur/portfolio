// components/Projects.jsx
import projects2 from "../assets/icon/project1.png";
import projects1 from "../assets/icon/project2.png";
import projects3 from "../assets/icon/project3.png";

const Projects = () => {
  const projects = [
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
    {
      name: "AppStore",
      image: projects3,
      tech: ["React", "Express", "MongoDB"],
      description: "An app store for managing and sharing applications.",
      live: "https://app-store-a560f.web.app",
      github: "https://github.com/themahabur/App-Store",
      challenges: "Implementing a robust search and filtering system.",
    },
  ];

  return (
    <section id="projects" className="py-16 px-4 bg-gray-100">
      <div className="max-w-5xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white shadow-md p-4 rounded-md">
              <img
                src={project.image}
                alt={project.name}
                className="rounded-md mb-4 h-35"
              />
              <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
              <p className="text-gray-600 text-xl mb-2">
                {project.description}
              </p>
              <a
                href={project.live}
                target="_blank"
                className="text-indigo-600 font-medium block mb-1"
              >
                Live Link
              </a>
              <a
                href={project.github}
                target="_blank"
                className="text-indigo-700 text-sm"
              >
                GitHub (Client)
              </a>

              <div className="text-sm text-gray-700 mt-2">
                <p>
                  <strong>Tech Stack:</strong> {project.tech.join(", ")}
                </p>
                <p>
                  <strong>Challenges:</strong> {project.challenges}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
