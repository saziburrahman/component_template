"use client"
import Link from 'next/link'; // Import Next.js Link component
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const Navbar7: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    // fixed top-0 left-0 right-0 z-50
    <nav className=" bg-white bg-opacity-90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" passHref>
              <div className="text-black font-bold text-2xl cursor-pointer">
                Logo {/* Replace with an actual logo/image if needed */}
              </div>
            </Link>
          </div>
          <div className="hidden md:flex space-x-4">
            {['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels'].map((item, index) => (
              <Link key={index} href={`/${item.replace(/\s+/g, '').toLowerCase()}`} passHref>
                <div className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 cursor-pointer">
                  {item}
                </div>
              </Link>
            ))}
          </div>
          <div className="hidden md:flex space-x-4">
            {['Shop', 'Account', 'Menu'].map((item, index) => (
              <Link key={index} href={`/${item.toLowerCase()}`} passHref>
                <div className="text-sm font-medium text-gray-900 hover:text-gray-600 px-3 py-2 rounded-md transition-colors duration-300 cursor-pointer">
                  {item}
                </div>
              </Link>
            ))}
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="p-2 rounded-md text-gray-900 hover:text-gray-600 focus:outline-none">
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Model S', 'Model 3', 'Model X', 'Model Y', 'Solar Roof', 'Solar Panels', 'Shop', 'Account'].map((item, index) => (
              <Link key={index} href={`/${item.replace(/\s+/g, '').toLowerCase()}`} passHref>
                <div className="text-gray-900 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium cursor-pointer">
                  {item}
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar7;
