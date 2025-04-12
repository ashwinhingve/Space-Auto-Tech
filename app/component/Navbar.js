 
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";

// gsap.registerPlugin(ScrollTrigger);
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useGSAP(() => {
    gsap.from("#logo,#Menu,#Links ul li,#Links form", {
      y: -30,
      opacity: 0,
      delay: 0.2,
      duration: 0.5,
      stagger: 0.2,
    });
  });
   
  return (
    <div className="z-50 fixed w-screen">
      <nav className="bg-gradient-to-r from-teal-500 to-blue-500 shadow-lg">
        <div
          id="nav"
          className="mx-auto flex items-center justify-between p-4 pr-6"
        >
          {/* Logo Section */}
          <div id="logo" className="flex items-center space-x-4">
            <Image
              src="/assets/icon.png"
              className="image rounded-sm transition-transform transform hover:scale-110"
              alt="icon"
              width={70}
              height={50}
              layout="intrinsic"
            />
            <Link
              href="/"
              className="text-3xl sm:text-4xl font-bold text-white tracking-wide font-serif hover:text-teal-200 transition-all"
            >
              SPACE AUTOMATION
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            id="Menu"
            className="lg:hidden block focus:outline-none text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-icons text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                fill="none"
              >
                <path
                  d="M4 5L20 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 12L20 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 19L20 19"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>

          {/* Navigation Links */}
          <div
            id="Links"
            className={`lg:flex items-center space-x-6 ${
              isMenuOpen ? "block" : "hidden"
            } lg:static absolute backdrop-blur-sm lg:bg-transparent w-full lg:w-auto top-16 left-0 z-10 rounded-b-lg shadow-lg lg:shadow-none`}
          >
            <ul className="flex flex-col lg:flex-row items-center lg:space-y-0 space-y-4 lg:space-x-6 px-6 lg:px-0">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-teal-200 transition-all"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="../../components/profile"
                  className="text-white hover:text-teal-200 transition-all"
                >
                  Company Profile
                </Link>
              </li>
              <li>
                <Link
                  href="../../components/product"
                  className="text-white hover:text-teal-200 transition-all"
                >
                  Product
                </Link>
              </li>
              <li>
                <Link
                  href="../../components/contect"
                  className="text-white hover:text-teal-200 transition-all"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                {/* <button
                  onClick={handleNavigation}
                  className="text-white hover:text-teal-200 transition-all"
                >
                  Shop Now
                </button> */}
                {/* <Link
                  // href="../../[locale]/(home)"
                  href={`../../[locale]/(home)`}
                  // href={`/components/product/${product.id}`}
                  className="text-white hover:text-teal-200 transition-all"
                >
                  Shop Now
                </Link> */}
                {/* <button
                   href={`../../[locale]/(home)`}
                  className="text-white hover:text-teal-200 transition-all"
                >
                  Shop Now
                </button> */}
              </li>

              {/* <li>
              <Link
                href="../../pages/login"
                className="text-white hover:text-teal-200 transition-all"
              >
               login
              </Link>
            </li>
            <li>
              <Link
                href="../../pages/logout"
                className="text-white hover:text-teal-200 transition-all"
              >
               logout
              </Link>
            </li> */}

              {/* Dropdown for Contact Us */}
              {/* <li className="relative group">
              <button className="text-white hover:text-teal-200 transition-all">
                Contact Us
              </button>
              <ul className="absolute left-0 mt-2 hidden bg-white text-black shadow-md group-hover:block rounded-lg">
                <li>
                  <Link
                    href="../components/Coming"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 rounded-lg"
                  >
                    Manager
                  </Link>
                </li>
                <li>
                  <Link
                    href="../components/Coming"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 rounded-lg"
                  >
                    Seller
                  </Link>
                </li>
                <li>
                  <Link
                    href="../components/Coming"
                    className="block px-4 py-2 text-gray-700 hover:bg-teal-100 rounded-lg"
                  >
                    Team
                  </Link>
                </li>
              </ul>
            </li> */}
            </ul>

            {/* Search Form */}
            {/* <form className="flex items-center space-x-2 mt-4 lg:mt-0 px-4 lg:px-0">
            <input
              type="search"
              placeholder="Search"
              className="px-4 py-2 border border-teal-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 w-full lg:w-auto"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-teal-600 rounded-md hover:bg-teal-700 transition-all"
            >
              Search
            </button>
          </form> */}
          </div>
        </div>
      </nav>
    </div>
  );
}
