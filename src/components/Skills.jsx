import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const skills = [
  {
    name: "HTML",
    src: "skill-icons:html",
  },
  {
    name: "CSS",
    src: "skill-icons:css",
  },
  {
    name: "JavaScript",
    src: "skill-icons:javascript",
  },
  {
    name: "React",
    src: "skill-icons:react-dark",
  },
  {
    name: "Tailwind CSS",
    src: "logos:tailwindcss-icon",
  },
  {
    name: "Git",
    src: "skill-icons:git",
  },
  {
    name: "GitHub",
    src: "mdi:github",
  },
  {
    name: "Firebase",
    src: "logos:firebase-icon",
  },
  {
    name: "Node.js",
    src: "devicon:nodejs",
  },
  {
    name: "Express.js",
    src: "skill-icons:expressjs-dark",
  },
  {
    name: "MongoDB",
    src: "skill-icons:mongodb",
  },
  {
    name: "VS Code",
    src: "skill-icons:vscode-dark",
  },
  {
    name: "Figma",
    src: "logos:figma",
  }
  ,
  {
    name: "Vercel",
    src: "logos:vercel-icon",
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-indigo-700  text-center"
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <SkillCard key={skill.name} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
