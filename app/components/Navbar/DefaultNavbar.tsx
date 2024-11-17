"use client"
import Logo from "@/public/Sazib.jpg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import { useState } from "react";

export default function DefaultNavbar() {
  const pathname = usePathname();  // Use usePathname from next/navigation
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getActiveLinkClass = (path: string) => {
    return pathname === path
      ? "text-blue-700 dark:text-blue-500 font-semibold" // Active link style
      : "text-gray-900 dark:text-white hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 dark:hover:bg-gray-700 dark:hover:text-white"; // Inactive link style
  };

  const pageNames={
    navbar:"/all-page/navbar",
    hero:"/all-page/hero",
    about_us:"/all-page/about-us",
    services:"/all-page/services",
    features:"/all-page/features",
    testimonials:"/all-page/testimonials",
    portfolio:"/all-page/portfolio",
    blog:"/all-page/blog",
    pricing:"/all-page/pricing",
    contact_us:"/all-page/contact-us",
    footer:"/all-page/footer"
  }

  return (
    <nav className="bg-white dark:bg-gray-900 w-full top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4 container">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src={Logo}
            className="h-8 rounded-full"
            alt="Sazib Logo"
            height={30}
            width={30}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Sazibur Rahman
          </span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Get Portfolio
          </button>
          <button
            type="button"
            onClick={toggleMenu}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } items-center justify-between w-full md:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {/* Navbar Section */}
            <li>
              <Link
                href={`${pageNames.navbar}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.navbar}`)}`}
              >
                Navbar
              </Link>
            </li>
            {/* Hero Section */}
            <li>
              <Link
                href={`${pageNames.hero}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.hero}`)}`}
              >
                Hero
              </Link>
            </li>
            {/* About Us Section */}
            <li>
              <Link
                href={`${pageNames.about_us}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.about_us}`)}`}
              >
                About Us
              </Link>
            </li>
            {/* Services Section */}
            <li>
              <Link
                href={`${pageNames.services}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.services}`)}`}
              >
                Services
              </Link>
            </li>
            {/* Features Section */}
            <li>
              <Link
                href={`${pageNames.features}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.features}`)}`}
              >
                Features
              </Link>
            </li>
            {/* Testimonials Section */}
            <li>
              <Link
                href={`${pageNames.testimonials}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.testimonials}`)}`}
              >
                Testimonials
              </Link>
            </li>
            {/* Portfolio Section */}
            <li>
              <Link
                href={`${pageNames.portfolio}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.portfolio}`)}`}
              >
                Portfolio
              </Link>
            </li>
            {/* Blog Section */}
            <li>
              <Link
                href={`${pageNames.blog}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.blog}`)}`}
              >
                Blog
              </Link>
            </li>
            {/* Pricing Section */}
            <li>
              <Link
                href={`${pageNames.pricing}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.pricing}`)}`}
              >
                Pricing
              </Link>
            </li>
            {/* Contact Us Section */}
            <li>
              <Link
                href={`${pageNames.contact_us}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.contact_us}`)}`}
              >
                Contact Us
              </Link>
            </li>
            {/* Footer Section */}
            <li>
              <Link
                href={`${pageNames.footer}`}
                className={`block py-2 px-3 rounded md:p-0 ${getActiveLinkClass(`${pageNames.footer}`)}`}
              >
                Footer
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
