import { Icon } from "@iconify/react/dist/iconify.js";

// components/Skills.jsx
const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4 my-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Skills
        </h2>
        <div className="grid grid-cols-2  md:grid-cols-5 gap-6 justify-center p-12">
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/html-5.png"
              alt=""
            />
            <span className="text-gray-700 ">HTML</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/css3.png"
              alt=""
            />
            <span className="text-gray-700 ">CSS</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/javascript.png"
              alt=""
            />
            <span className="text-gray-700 ">JavaScript</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/react-native.png"
              alt=""
            />
            <span className="text-gray-700 ">React</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/tailwindcss.png"
              alt=""
            />
            <span className="text-gray-700 ">Tailwind CSS</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img src="https://img.icons8.com/color/100/000000/git.png" alt="" />
            <span className="text-gray-700 ">Git</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/github.png"
              alt=""
            />
            <span className="text-gray-700 ">GitHub</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/firebase.png"
              alt=""
            />
            <span className="text-gray-700 ">Firebase</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/nodejs.png"
              alt=""
            />
            <span className="text-gray-700 ">Node.js</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/express-js.png"
              alt=""
            />
            <span className="text-gray-700 ">Express.js</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/mongodb.png"
              alt=""
            />
            <span className="text-gray-700 ">MongoDB</span>
          </div>

          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/?size=100&id=0OQR1FYCuA9f&format=png&color=000000"
              alt=""
            />
            <span className="text-gray-700 ">VS Code</span>
          </div>

          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.icons8.com/color/100/000000/figma.png"
              alt=""
            />
            <span className="text-gray-700 ">Figma</span>
          </div>
          <div className="hover:shadow-sm transition duration-300 ease-in-out rounded-lg bg-white p-3  border-2 border-gray-100 flex flex-col items-center justify-between">
            <img
              src="https://img.daisyui.com/images/daisyui/horizontal-dark.svg"
              alt=""
            />
            <span className="text-gray-700 ">DaisyUI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
