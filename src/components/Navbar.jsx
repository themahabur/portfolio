import { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-lg mx-auto  flex justify-between items-center border border-gray-200 bg-gray-50 rounded-full px-4 py-3">
          {/* Left Section: Logo & Mobile Menu */}
          <div className="flex items-center gap-4 relative">
            {/* Mobile Menu Icon */}
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

            {/* Logo */}
            <h1 className="text-2xl font-bold hidden md:block">M</h1>
            <h3 className="text-2xl font-bold md:hidden">Mahabur</h3>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
              <ul className="absolute top-12 left-0 w-44 bg-white border border-gray-100 shadow-lg rounded-lg md:hidden flex flex-col gap-3 p-4 transition-all z-50">
                {navItems.map((item) => (
                  <li key={item}>
                    <Link
                      to={item}
                      smooth
                      duration={500}
                      offset={-70}
                      className="block text-gray-800 hover:text-purple-600 text-base font-medium cursor-pointer"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Right Section: Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium items-center">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={500}
                  offset={-70}
                  className="text-xl cursor-pointer hover:text-purple-600 transition-colors"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
