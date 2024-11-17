"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';

const Navbar9: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky inset-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur-lg">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12 transition-all duration-200 ease-in-out">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" passHref>
            <div className="cursor-pointer">
              <Image
                src="https://www.svgrepo.com/show/499831/target.svg"
                alt="Logo"
                width={32}
                height={32}
                priority
              />
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <HiOutlineX className="h-6 w-6 text-slate-900" />
          ) : (
            <HiOutlineMenu className="h-6 w-6 text-slate-900" />
          )}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6">
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
            <Link href="#" passHref>
              <span className="cursor-pointer">Pricing</span>
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
            <Link href="#" passHref>
              <span className="cursor-pointer">Blog</span>
            </Link>
          </li>
          <li className="pt-1.5 font-dm text-sm font-medium text-slate-700">
            <Link href="#" passHref>
              <span className="cursor-pointer">Docs</span>
            </Link>
          </li>
        </ul>

        {/* Desktop Authentication Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="#" passHref>
            <span className="font-dm text-sm font-medium text-slate-700 cursor-pointer">Sign in</span>
          </Link>
          <Link href="#" passHref>
            <span className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] cursor-pointer">
              Sign up for free
            </span>
          </Link>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white border-t border-slate-100 shadow-md md:hidden">
            <li className="px-6 py-4 font-dm text-sm font-medium text-slate-700 border-b">
              <Link href="#" passHref>
                <span className="cursor-pointer">Pricing</span>
              </Link>
            </li>
            <li className="px-6 py-4 font-dm text-sm font-medium text-slate-700 border-b">
              <Link href="#" passHref>
                <span className="cursor-pointer">Blog</span>
              </Link>
            </li>
            <li className="px-6 py-4 font-dm text-sm font-medium text-slate-700 border-b">
              <Link href="#" passHref>
                <span className="cursor-pointer">Docs</span>
              </Link>
            </li>
            <li className="px-6 py-4 font-dm text-sm font-medium text-slate-700">
              <Link href="#" passHref>
                <span className="cursor-pointer">Sign in</span>
              </Link>
            </li>
            <li className="px-6 py-4">
              <Link href="#" passHref>
                <span className="rounded-md bg-gradient-to-br from-green-600 to-emerald-400 px-3 py-1.5 font-dm text-sm font-medium text-white shadow-md shadow-green-400/50 transition-transform duration-200 ease-in-out hover:scale-[1.03] cursor-pointer">
                  Sign up for free
                </span>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar9;
