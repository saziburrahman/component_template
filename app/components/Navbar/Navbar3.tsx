"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar3: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <nav className="relative px-4 py-2 flex justify-between items-center bg-white dark:bg-gray-800 border-b-2 dark:border-gray-600">
      {/* Logo */}
      <Link
        href="/"
        className="text-2xl font-bold text-violet-600 dark:text-white"
      >
        Logo
      </Link>

      {/* Mobile Hamburger Icon */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="navbar-burger flex items-center text-violet-600 dark:text-gray-100 p-1"
          id="navbar_burger"
        >
          <svg
            className="block h-6 w-6 fill-current"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Hamburger menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </button>
      </div>

      {/* Search Input (visible on mobile when clicked) */}
      <div className="hidden lg:block flex-1 mx-4">
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 rounded-lg border-2 dark:bg-gray-700 dark:text-white focus:outline-none"
        />
      </div>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="text-2xl text-violet-600 dark:text-white"
      >
        {isDarkMode ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h1M3 12H2m16.243-7.757L18.364 6.364M5.636 17.636L4.515 16.515M12 9a3 3 0 110 6 3 3 0 010-6z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h1M3 12H2m16.243-7.757L18.364 6.364M5.636 17.636L4.515 16.515M12 9a3 3 0 110 6 3 3 0 010-6z"
            />
          </svg>
        )}
      </button>

      {/* Desktop Menu */}
      <ul className="hidden lg:flex lg:items-center lg:w-auto lg:space-x-6">
        <li>
          <Link
            href="/"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* Mobile Menu (Displayed when hamburger is clicked) */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-0 left-0 w-full h-screen bg-white dark:bg-gray-800 flex flex-col items-center justify-center space-y-6">
          <Link
            href="/"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
            onClick={toggleMenu}
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-lg text-gray-700 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar3;
