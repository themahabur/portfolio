import { FaLocationPin } from "react-icons/fa6";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { motion } from "framer-motion";
import { HiOutlineCodeBracket, HiRectangleGroup } from "react-icons/hi2";
import { SiUpwork } from "react-icons/si";
import { BsPersonWorkspace } from "react-icons/bs";

const About = () => {
  return (
    <section
      id="about"
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="w-full space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-bold text-indigo-700  text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1  lg:grid-cols-3 gap-8 items-start">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="backdrop-blur rounded-xl shadow-2xl col-span-1 lg:col-span-2 p-6 bg-white dark:bg-gray-900 w-full"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium leading-relaxed">
              👋 Hey there! I'm Mahabur Rahman
            </h3>
            <p className="font-semibold text-xl text-gray-700 my-2 dark:text-gray-300">
              A passionate and creative{" "}
              <span className="text-indigo-500">MERN Stack</span> Developer
            </p>

            <hr className="border border-gray-100 dark:border-gray-700 my-4" />

            <div className="space-y-6">
              <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-300">
                I’m Mahabur Rahman, My journey in tech started more than 6 years
                ago. I started in airdrops, Telegram community management, and
                became a Crypto YouTuber.
              </p>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-300">
                As I explored the crypto world, I realized I didn’t just want to
                manage — I wanted to build. That realization led me deep into
                coding. I began learning frontend and backend development,
                building real apps, and understanding how the tech behind it
                works.
              </p>
              <p className="text-base sm:text-lg font-medium leading-relaxed text-gray-800 dark:text-gray-300">
                I mostly work with React, Node.js, MongoDB, Express.js,
                Firebase, and TailwindCSS, and I'm learning Next.js, TypeScript,
                and Blockchain tech step by step.
              </p>
            </div>

            <hr className="border border-gray-100 dark:border-gray-700 my-4" />

            <div className="flex items-start gap-4 py-4">
              <div className="flex items-center justify-center bg-gradient-to-r from-indigo-300 to-indigo-500 p-2 rounded-lg text-white">
                <BsPersonWorkspace size={24} />
              </div>
              <div className="flex flex-col text-gray-800 dark:text-gray-300">
                <p className="text-base sm:text-lg font-semibold">
                  Open to freelance, collaboration, or full-time roles.
                </p>
                <p className="text-base sm:text-lg font-semibold">
                  Let’s build something impactful together.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact & Hire Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full col-span-1 space-y-6"
          >
            {/* Contact Card */}
            <div className="backdrop-blur p-6 rounded-xl shadow-2xl bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-gray-100">
                <IoChatbubbleEllipses className="text-blue-400" />
                Let's Connect!
              </div>

              <div className="mt-4 space-y-4">
                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <div className="bg-gradient-to-r from-indigo-300 to-indigo-500 p-2 rounded-lg text-white">
                    <MdEmail />
                  </div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    themahabur@gmail.com
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <div className="bg-gradient-to-r from-purple-300 to-purple-500 p-2 rounded-lg text-white">
                    <TbWorld />
                  </div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    mahabur.xyz
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-white dark:bg-gray-800 p-3 rounded-lg">
                  <div className="bg-gradient-to-r from-orange-300 to-orange-500 p-2 rounded-lg text-white">
                    <FaLocationPin />
                  </div>
                  <p className="font-medium text-gray-800 dark:text-gray-200">
                    Rajshahi, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Available For Hire Card */}
            <div className="backdrop-blur p-6 rounded-2xl shadow-xl bg-green-50 dark:bg-green-900">
              <div className="flex items-center gap-2 text-xl font-semibold text-gray-800 dark:text-white">
                <HiRectangleGroup className="text-blue-500" />
                <span>Available for Hire</span>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center gap-3 bg-green-100 dark:bg-green-800 p-3 rounded-lg">
                  <SiUpwork className="text-green-600 text-lg" />
                  <p className="font-medium text-gray-800 dark:text-white">
                    Freelance Projects
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-green-100 dark:bg-green-800 p-3 rounded-lg">
                  <BsPersonWorkspace className="text-green-600 text-lg" />
                  <p className="font-medium text-gray-800 dark:text-white">
                    Remote Full-time Roles
                  </p>
                </div>

                <div className="flex items-center gap-3 bg-green-100 dark:bg-green-800 p-3 rounded-lg">
                  <HiOutlineCodeBracket className="text-green-600 text-lg" />
                  <p className="font-medium text-gray-800 dark:text-white">
                    MERN Stack Web Developer
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
