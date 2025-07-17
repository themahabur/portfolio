// components/Hero.jsx
import { FaGithub, FaLinkedin, FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import logo from "/profile.png"; // Adjust the path as necessary
import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse items-center md:px-10 justify-between py-24 my-10 container mx-auto space-y-6 md:space-y-0"
    >
      <div className="md:w-1/2 space-y-4  md:text-left px-4 md:px-0">
        <h1 className="text-4xl md:text-5xl text-center text-gray-800 font-bold leading-tight">
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Mahabur Rahman
          </span>
        </h1>
        <p className="text-lg text-gray-700 text-center">
          A Full Stack Developer who loves to build stunning web experiences
          with modern tech.
        </p>
        <div className="flex justify-center gap-4 text-2xl text-center">
          <Link to="https://github.com/themahabur"  className="p-3 bg-white rounded-lg transition border border-gray-200 hover:shadow-sm ">
         <FaGithub className="text-gray-700 hover:text-gray-900 transition" />

          </Link >
          <Link to="https://www.linkedin.com/in/themahabur/" className="p-3 bg-white rounded-lg transition border border-gray-200 hover:shadow-sm ">
          <FaLinkedin className="text-gray-700 hover:text-gray-900 transition" />
          </Link>
          <Link to="https://www.x.com/themahabur" className="p-3 bg-white rounded-lg transition border border-gray-200 hover:shadow-sm ">
          <FaTwitter className="text-gray-700 hover:text-gray-900 transition" />

          </Link>
          <Link to="https://wa.me/01905909111" className="p-3 bg-white rounded-lg transition border border-gray-200 hover:shadow-sm ">
          <FaWhatsapp className="text-gray-700 hover:text-gray-900 transition" />

          </Link>
        </div>
        <div className="flex justify-center mt-6">
          <button
          className="px-6 py-2 bg-gradient-to-r cursor-pointer flex items-center  from-indigo-500 to-purple-400 text-white font-semibold rounded-md hover:bg-purple-700 transition"
        >
          <Icon icon="mdi:download" className="mr-2" />
          Download Resume
        </button>
        </div>
      </div>
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <img
          src={logo}
          alt="Profile"
          className="rounded-full  w-54 h-54 transition-transform transform hover:scale-105"
        />
      </div>
    </section>
  );
};

export default Hero;
