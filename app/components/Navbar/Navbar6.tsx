"use client";
import Image from "next/image";
import Link from "next/link"; // Import Next.js Link component
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaBell, FaSearch, FaUser } from "react-icons/fa";

const Navbar6 = () => {
  // State to toggle mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="grid xl:grid-cols-1 grid-cols-1">
      <div className="p-5">
        <div className="py-3 px-3 rounded-xl border w-full bg-green-900 relative">
          <div className="flex justify-between items-center">
            <div className="flex justify-items-center items-center gap-2">
              {/* Mobile Menu Icon */}
              <AiOutlineMenu
                className="w-6 h-6 text-white cursor-pointer lg:hidden md:hidden"
                onClick={toggleMobileMenu} // Trigger menu toggle on click
              />
              <p className="font-semibold text-white">LOGO</p>
              <div style={{ position: "relative" }}>
                <input
                  className="rounded-3xl py-3 px-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                  placeholder="Search for Grocery, Stores, Vegetable, or Meat"
                />
                <FaSearch className="w-5 h-5 text-green-900 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
              </div>
            </div>
            <div className="flex justify-items-center items-center gap-2">
              <FaBell className="w-5 h-5 text-yellow-300 hidden lg:block md:block" />
              <p className="text-sm text-white hidden lg:block md:block">
                Order now and get it within{" "}
                <span className="text-yellow-300">15 mint!</span>
              </p>
              <div className="w-8 h-8 text-white rounded-full ring-2 ring-white p-1 flex justify-center items-center relative">
                <FaUser className="w-5 h-5 text-white" />
              </div>
              <div className="relative">
                <Image
                  className="inline-block w-8 h-8 rounded-full ring-2 ring-white"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="User Profile"
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute top-16 left-0 right-0 bg-green-900 text-white p-5 flex flex-col space-y-4 lg:hidden md:hidden z-50">
              <Link href="/" className="text-lg">
                Home
              </Link>
              <Link href="/about" className="text-lg">
                About
              </Link>
              <Link href="/services" className="text-lg">
                Services
              </Link>
              <Link href="/contact" className="text-lg">
                Contact
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar6;
