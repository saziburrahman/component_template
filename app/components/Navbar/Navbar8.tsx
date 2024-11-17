"use client"
import Link from 'next/link'; // Next.js Link component
import { useState } from 'react';
import { HiMenuAlt2, HiX } from 'react-icons/hi'; // Importing icons for menu toggle

const Navbar8: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-3 bg-[#e8e8e5]">
      <div className="text-xl">Brand Name</div>
      
      {/* Hamburger Menu Button */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu}>
          {menuOpen ? (
            <HiX className="toggle block w-10 h-10" />
          ) : (
            <HiMenuAlt2 className="toggle block w-10 h-10" />
          )}
        </button>
      </div>

      {/* Main Navigation Links */}
      <div className={`toggle ${menuOpen ? 'block' : 'hidden'} w-full md:w-auto md:flex text-right text-bold mt-5 md:mt-0`}>
        <Link href="#home" passHref>
          <div className="block md:inline-block hover:text-blue-500 px-3 py-3 cursor-pointer">Home</div>
        </Link>
        <Link href="#services" passHref>
          <div className="block md:inline-block hover:text-blue-500 px-3 py-3 cursor-pointer">Services</div>
        </Link>
        <Link href="#aboutus" passHref>
          <div className="block md:inline-block hover:text-blue-500 px-3 py-3 cursor-pointer">About us</div>
        </Link>
        <Link href="#gallery" passHref>
          <div className="block md:inline-block hover:text-blue-500 px-3 py-3 cursor-pointer">Gallery</div>
        </Link>
        <Link href="#contactUs" passHref>
          <div className="block md:inline-block hover:text-blue-500 px-3 py-3 cursor-pointer">Visit Us</div>
        </Link>
      </div>

      {/* Call Now Button */}
      <div className={`toggle w-full text-end ${menuOpen ? 'block' : 'hidden'} md:flex md:w-auto px-2 py-2 md:rounded`}>
        <Link href="tel:+123" passHref>
          <div className="flex justify-end">
            <div className="flex items-center h-10 w-30 rounded-md bg-[#c8a876] text-white font-medium p-2 cursor-pointer">
              {/* Phone icon using react-icons */}
              <HiMenuAlt2 className="w-6 h-6 mr-2" />
              Call now
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar8;
