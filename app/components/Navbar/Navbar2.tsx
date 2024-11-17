"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar2 = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0">
            <Link href="/" className="flex items-center">
              <img
                className="h-7 w-auto"
                src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                alt="Website Logo"
              />
              <p className="sr-only">Website Title</p>
            </Link>
          </div>

          {/* Hamburger Menu Button */}
          <button
            className="inline-flex items-center justify-center p-2 text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={toggleMenu}
            aria-label="Open menu"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
            <Link
              href="#"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
            >
              Pricing
            </Link>
          </div>

          {/* Sign In and Login Buttons */}
          <div className="flex items-center justify-end gap-3">
            <Link
              href="/login"
              className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
            >
              Sign in
            </Link>
            <Link
              href="/login"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="flex flex-col items-center py-2">
            <Link
              href="#"
              className="px-4 py-2 text-gray-900 hover:bg-gray-100 w-full text-center"
            >
              How it works
            </Link>
            <Link
              href="#"
              className="px-4 py-2 text-gray-900 hover:bg-gray-100 w-full text-center"
            >
              Pricing
            </Link>
            <div className="flex flex-col items-center gap-2 mt-4">
              <Link
                href="/login"
                className="px-4 py-2 text-gray-900 bg-white hover:bg-gray-100 w-full text-center"
              >
                Sign in
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 w-full text-center"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar2;
