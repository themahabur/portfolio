// components/Navbar.jsx
import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 z-50  p-4 flex items-center justify-between w-full bg-white">
      <div className="container mx-auto flex items-center justify-between ">
        <div className="flex items-center gap-4 relative">
          <div className="md:hidden">
            {isOpen ? (
              <IoClose
                className="text-2xl cursor-pointer"
                onClick={handleMenuClick}
              />
            ) : (
              <IoMenu 
                className="text-2xl cursor-pointer"
                onClick={handleMenuClick}
              />
            )}
          </div>

          <h1 className="text-2xl font-bold ">Mahabur Rahman</h1>

         {isOpen && (
           <ul className="absolute top-12 left-0 bg-white shadow-lg rounded-lg md:hidden flex flex-col  gap-4 p-4">
             {["home", "about", "skills", "projects", "contact"].map((item) => (
               <li key={item}>
                 <Link
                      to={item}
                      smooth
                      duration={500}
                      className="cursor-pointer hover:text-purple-500 text-xl"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )
         }
        </div>
        <ul className="hidden md:flex gap-6 font-medium">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth
                duration={500}
                className="cursor-pointer hover:text-purple-500 text-xl"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
        <button className="bg-gradient-to-r from-indigo-500 to-purple-400 text-white px-4 py-2 rounded-md">
          Resume
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
