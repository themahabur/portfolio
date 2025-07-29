import { FaLocationPin } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { motion } from "motion/react";
import { HiOutlineCodeBracket, HiRectangleGroup } from "react-icons/hi2";
import { SiUpwork } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";
import { CgGoogleTasks } from "react-icons/cg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-2  flex items-center justify-center"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl w-full  space-y-8"
      >
        <h2 className="text-4xl font-bold bg-gradient-to-l from-indigo-600 via-purple-600 to-violet-600 dark:from-indigo-400 dark:via-purple-400 dark:to-violet-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="backdrop-blur  rounded-xl shadow-2xl col-span-2 p-4">
            <h3 className="text-4xl font-medium leading-relaxed ">
              👋 Hey there! I'm Mahabur Rahman
            </h3>
            <p className="font-semibold text-2xl text-gray-700 my-2">
              A passionate and creative{" "}
              <span className="text-indigo-500">MERN Stack</span> Developer{" "}
            </p>

            <hr className="border border-gray-100" />
            <div className="py-4 space-y-4">
              <p className=" text-lg font-medium leading-relaxed text-gray-800">
                I’m Mahabur Rahman, My journey in tech started more than 6 years
                ago.I started in airdrops, Telegram community management, and
                became a Crypto YouTuber
              </p>
              <p className=" text-lg font-medium leading-relaxed text-gray-800">
                As I explored the crypto world, I realized I didn’t just want to
                manage — I wanted to build. That realization led me deep into
                coding. I began learning frontend and backend development,
                building real apps, and understanding how the tech behind it
                works. Today, I’m a confident full stack developer, and my dream
                is to become a skilled blockchain developer
              </p>
              <p className=" text-lg font-medium leading-relaxed text-gray-800">
                I mostly work with React, Node.js, MongoDB, Express.js,
                Firebase, and TailwindCSS, and I'm learning Next.js, TypeScript,
                and Blockchain tech step by step.
              </p>
            </div>
            <hr className="border border-gray-100" />
            <div className="flex items-center gap-2 py-4">
              <div className="flex items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 p-2 rounded-lg text-white">
                <BsPersonWorkspace size={24} />
              </div>
              <div className="flex flex-col text-gray-800">
                <p className="text-lg font-semibold text-gray-800 ">
                  Open to freelance, collaboration, or full-time roles.
                </p>
                <p className="text-lg font-semibold text-gray-800">
                  Let’s build something impactful together.
                </p>
              </div>
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
                    <TbWorld />
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
            <div className="backdrop-blur-sm p-6 rounded-2xl shadow-xl bg-green-50">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-800">
                <HiRectangleGroup className="text-blue-500" />
                <span>Available for Hire</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 bg-green-100 p-3 rounded-lg">
                  <div className="text-green-600 text-lg">
                    <SiUpwork />
                  </div>
                  <p className="font-medium text-gray-800">
                    Freelance Projects
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-green-100 p-3 rounded-lg">
                  <div className="text-green-600 text-lg">
                    <BsPersonWorkspace />
                  </div>
                  <p className="font-medium text-gray-800">
                    Remote Full-time Roles
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-green-100 p-3 rounded-lg">
                  <div className="text-green-600 text-lg">
                    <HiOutlineCodeBracket />
                  </div>
                  <p className="font-medium text-gray-800">
                    MERN Stack Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
