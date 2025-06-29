// components/About.jsx
const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-50 to-blue-50">
      <div className="max-w-4xl w-full text-center space-y-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">About Me</h2>
        <div className="hover:shadow-lg  backdrop-blur-sm p-6 rounded-xl  border border-gray-200 bg-white">
          <p className="text-lg leading-relaxed">
            Hey there! I'm <span className="font-bold text-blue-400">Mahabur Rahman</span>, a passionate and creative <span className="text-blue-400 font-semibold">MERN Stack Developer</span> from Bangladesh. I specialize in crafting modern, fast, and responsive web applications using <span className="font-semibold">React</span>, <span className="font-semibold">Node.js</span>, and <span className="font-semibold">Tailwind CSS</span>.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            I love building elegant user interfaces and turning ideas into real-world digital solutions. With a strong focus on performance, clean code, and seamless user experiences, I’m constantly exploring the latest in web technologies to sharpen my skills and deliver impactful results.
          </p>
          <p className="mt-4 text-lg leading-relaxed">
            When I'm not coding, you'll find me exploring design inspiration, learning new tech, or contributing to developer communities. Let’s build something amazing together!
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;