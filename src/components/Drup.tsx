"use client"

import { useState } from "react";

const CustomNavbar = () => {
    const [showDropdown, setShowDropdown] = useState(false);
  
    const toggleDropdown = () => {
      setShowDropdown(!showDropdown);
    };
  
    return (
      <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <div className="text-white font-bold text-lg">
            <a href="/">Your Logo</a>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleDropdown}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className={`${
              showDropdown ? 'block' : 'hidden'
            } lg:flex lg:items-center`}
          >
            <ul className="lg:flex space-x-4">
              <li>
                <a href="/" className="text-white hover:text-blue-200">
                  Home
                </a>
              </li>
              <li className="relative group">
                <a
                  href="/services"
                  className="text-white hover:text-blue-200 group-hover:text-blue-200"
                >
                  Services
                </a>
                <ul
                  className={`${
                    showDropdown ? 'block' : 'hidden'
                  } absolute bg-blue-500 text-white p-2 space-y-2 group-hover:block`}
                >
                  <li>
                    <a href="/service1">Service 1</a>
                  </li>
                  <li>
                    <a href="/service2">Service 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="/about" className="text-white hover:text-blue-200">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white hover:text-blue-200">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default CustomNavbar;



