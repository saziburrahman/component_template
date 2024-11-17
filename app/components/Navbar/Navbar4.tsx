"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar4 = () => {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [userDropDownIsOpen, setUserDropDownIsOpen] = useState(false);
  const [openWithKeyboard, setOpenWithKeyboard] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`relative flex items-center justify-between w-full p-4 transition-transform duration-300 ease-in-out bg-white bg-opacity-80 backdrop-blur-md ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      aria-label="penguin ui menu"
    >
      {/* Brand Logo */}
      <Link href="#" className="text-2xl font-bold text-neutral-900 dark:text-white">
        LOGO
      </Link>
      {/* End Brand Logo */}

      {/* Search */}
      <div className="relative ml-3 flex flex-col w-full gap-1 mr-auto max-w-64 text-neutral-600 dark:text-neutral-300">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="absolute left-2.5 top-1/2 size-5 -translate-y-1/2 text-neutral-600/50 dark:text-neutral-300/50"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="search"
          name="search"
          placeholder="Search"
          aria-label="search"
          className="w-full rounded-md border border-neutral-300 bg-neutral-50 py-2.5 pl-10 pr-2 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-75 dark:border-neutral-700 dark:bg-neutral-900/50 dark:focus-visible:outline-white"
        />
      </div>
      {/* End Search */}

      {/* Desktop Menu */}
      <ul className="items-center flex-shrink-0 hidden gap-4 sm:flex">
        <li>
          <Link
            href="#"
            className="font-bold underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-white dark:hover:text-white"
            aria-current="page"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="#"
            className="font-bold underline-offset-2 hover:text-black focus:outline-none focus:underline dark:text-white dark:hover:text-white"
            aria-current="page"
          >
            About
          </Link>
        </li>

        {/* Dark Mode Toggle */}
        <li>
          <button
            id="dark-mode"
            className="flex items-center justify-center w-8 h-8 text-center transition duration-300 rounded-full focus:outline-none"
          >
            <div id="icon-container" className="grid w-10 h-10">
              <svg
                id="dark-icon"
                className="hidden w-6 h-6 place-self-center fill-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z" />
              </svg>

              <svg
                id="light-icon"
                className="hidden w-6 h-6 place-self-center fill-yellow-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M256 0c-13.3 0-24 10.7-24 24V88c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24zm0 400c-13.3 0-24 10.7-24 24v64c0 13.3 10.7 24 24 24s24-10.7 24-24V424c0-13.3-10.7-24-24-24zM488 280c13.3 0 24-10.7 24-24s-10.7-24-24-24H424c-13.3 0-24 10.7-24 24s10.7 24 24 24h64zM112 256c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24s10.7 24 24 24H88c13.3 0 24-10.7 24-24zM437 108.9c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-45.3 45.3c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0L437 108.9zM154.2 357.8c-9.4-9.4-24.6-9.4-33.9 0L75 403.1c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l45.3-45.3c9.4-9.4 9.4-24.6 0-33.9zM403.1 437c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-45.3-45.3c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9L403.1 437zM154.2 154.2c9.4-9.4 9.4-24.6 0-33.9L108.9 75c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l45.3 45.3c9.4 9.4 24.6 9.4 33.9 0zM256 368a112 112 0 1 0 0-224 112 112 0 1 0 0 224z" />
              </svg>
            </div>
          </button>
        </li>

        {/* User Pic */}
        <li className="relative flex items-center">
          <button
            onClick={() => setUserDropDownIsOpen(!userDropDownIsOpen)}
            aria-expanded={userDropDownIsOpen}
            className="rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:focus-visible:outline-white"
          >
            <img
              className="w-10 h-10 object-cover rounded-full"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user image"
            />
          </button>
          {userDropDownIsOpen && (
            <div className="absolute right-0 z-10 mt-2 w-48 bg-white dark:bg-neutral-900 rounded-md shadow-lg">
              <ul className="py-2">
                <li>
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href="/settings"
                    className="block px-4 py-2 text-sm text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <Link
                    href="/logout"
                    className="block px-4 py-2 text-sm text-neutral-700 dark:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
      </ul>
      {/* End Desktop Menu */}

      {/* Mobile Menu */}
      <button
        onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}
        className="sm:hidden text-black dark:text-white"
        aria-expanded={mobileMenuIsOpen}
        aria-controls="mobile-menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {mobileMenuIsOpen && (
        <div id="mobile-menu" className="sm:hidden absolute top-20 w-full bg-white p-4 mt-2 rounded-lg shadow-lg">
          <ul>
            <li>
              <Link
                href="#"
                className="block py-2 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="block py-2 text-neutral-900 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-800"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      {/* End Mobile Menu */}
    </nav>
  );
};

export default Navbar4;
