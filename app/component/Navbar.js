"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from("#logo, #Menu, #navLinks li", {
      y: -30,
      opacity: 0,
      delay: 0.2,
      duration: 0.6,
      stagger: 0.1,
      ease: "power3.out",
    });
  });

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Inventory", href: "http://inventory.spaceautotech.com/" },
    { name: "Store", href: "http://store.spaceautotech.com/" },
    { name: "WebScada", href: "http://webscada.spaceautotech.com/" },
    { name: "About", href: "/components/profile" },
    { name: "Contact", href: "/components/contect" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div id="logo" className="flex items-center space-x-3">
            <Image
              src="/assets/icon.png"
              className="rounded-lg transition-transform duration-300 hover:scale-110"
              alt="Space Auto Tech Logo"
              width={56}
              height={56}
              priority
            />
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent tracking-tight font-poppins hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
            >
              Space Auto Tech
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Menu"
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={28}
              height={28}
              fill="none"
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <>
                  <path
                    d="M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </>
              ) : (
                <>
                  <path
                    d="M4 6h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 12h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 18h16"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </>
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <ul
            id="navLinks"
            className="hidden lg:flex items-center space-x-1"
          >
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-lg text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
        >
          <ul className="space-y-1 pt-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 rounded-lg text-gray-700 font-medium hover:text-blue-600 hover:bg-gray-50 transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
