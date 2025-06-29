// components/Hero.jsx
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import logo from "../assets/developer-pana.svg"; // Adjust the path as necessary
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col md:flex-row items-center md:px-10 justify-between py-30 my-10 container mx-auto space-y-6 md:space-y-0"
    >
      <div className="md:w-1/2 space-y-4  md:text-left px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl text-gray-800 font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mahabur Rahman
          </span>
        </h1>
        <p className="text-lg text-gray-700 ">
          A Full Stack Developer who loves to build stunning web experiences
          with modern tech.
        </p>
        <div className="flex md:justify-start gap-4 text-2xl ">
          <Link to="https://github.com/themahabur"  className="p-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-full hover:bg-gray-200 transition">
         <FaGithub className="text-gray-700 hover:text-gray-900 transition" />

          </Link >
          <Link to="https://www.linkedin.com/in/themahabur/" className="p-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-full hover:bg-gray-200 transition">
          <FaLinkedin className="text-gray-700 hover:text-gray-900 transition" />
          </Link>
          <Link to="https://www.x.com/themahabur" className="p-3 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100 rounded-full hover:bg-gray-200 transition">
          <FaTwitter className="text-gray-700 hover:text-gray-900 transition" />

          </Link>
        </div>
        <a
          href="#"
          className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-400 text-white font-semibold rounded-md hover:bg-purple-700 transition"
        >
          Download Resume
        </a>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={logo}
          alt="Profile"
          className=" w-sm"
        />
      </div>
    </section>
  );
};

export default Hero;
