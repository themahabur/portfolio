import { FaLocationPin } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";

// components/About.jsx
const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-2  flex items-center justify-center "
    >
      <div className="max-w-5xl w-full  space-y-8">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur  rounded-xl shadow-2xl col-span-2">
            <h3 className="text-3xl leading-relaxed p-4">
              👋 Hey there! I'm Mahabur Rahman
            </h3>
            <hr className="border border-gray-100" />
            <div className="p-6 space-y-4">
              <p className=" text-lg leading-relaxed">
                I love building elegant user interfaces and turning ideas into
                real-world digital solutions. With a strong focus on
                performance, clean code, and seamless user experiences, I’m
                constantly exploring the latest in web technologies to sharpen
                my skills and deliver impactful results.
              </p>
              <p className="mt-4 text-lg leading-relaxed">
                When I'm not coding, you'll find me exploring design
                inspiration, learning new tech, or contributing to developer
                communities. Let’s build something amazing together!
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 col-span-1">
            <div className="backdrop-blur p-6 rounded-xl shadow-2xl bg-gradient-to-r from-indigo-50 to-purple-50">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                <IoChatbubbleEllipses className="text-blue-400" />
                let's Connect!
              </div>
              <div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg  mt-4">
                  <div className="flex items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 p-2 rounded-lg text-white">
                    <MdEmail />
                  </div>
                  <p className="font-medium">themahabur@gmail.com</p>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg  mt-4">
                  <div className="flex items-center justify-center bg-gradient-to-r from-purple-300 to-purple-500 p-2 rounded-lg text-white">
                    <TbWorld  />
                  </div>
                  <p className="font-medium">mahabur.xyz</p>
                </div>
                <div className="flex items-center gap-2 bg-white p-2 rounded-lg  mt-4">
                  <div className="flex items-center justify-center bg-gradient-to-r from-orange-300 to-orange-500 p-2 rounded-lg text-white">
                    <FaLocationPin />

                  </div>
                  <p className="font-medium">Rajshahi, Bangladesh</p>
                </div>
               
              </div>
            </div>
            <div className="backdrop-blur-sm p-6 rounded-xl shadow-2xl bg-white">
              <p className="text-lg leading-relaxed">
                Hey there! I'm{" "}
                <span className="font-bold text-blue-400">Mahabur Rahman</span>,
                a passionate and creative{" "}
                <span className="text-blue-400 font-semibold">
                  MERN Stack Developer
                </span>{" "}
                from Bangladesh. I specialize in crafting modern, fast, and
                responsive web applications using{" "}
                <span className="font-semibold">React</span>,{" "}
                <span className="font-semibold">Node.js</span>, and{" "}
                <span className="font-semibold">Tailwind CSS</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
