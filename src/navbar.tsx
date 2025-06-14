import React, { useState } from "react";
import { FiDownload, FiMenu, FiX } from "react-icons/fi";
import logoImage from "./assets/integra-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="bg-darkBg">
        <nav className="flex items-center justify-between xl:px-16  sm:px-12 px-4 py-4 shadow-md relative z-50">
          
          <div className="font-bold text-gray-800  w-[40%] md:w-[20%]">
            <img
              src={logoImage}
              className="w-[60%]  cursor-pointer"
              alt="Integra Magna Logo"
            />
          </div>

          <ul className="hidden md:flex space-x-6 text-gray-200 font-medium">
             {[
              { name: "SERVICES", href: "https://www.integramagna.com/services" },
              { name: "ABOUT US", href: "https://www.integramagna.com/about" },
              { name: "CASES", href: "https://www.integramagna.com/work" },
                ].map(({ name, href }) => (
           <li key={name}>
              <div className="relative inline-block group pb-1 cursor-pointer">
               <a
                href={href}
                className="text-white group-hover:text-blue-600 transition-all duration-500"
                >
                {name}
               </a>
               <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-500 group-hover:w-full"></span>
            </div>
          </li>
            ))}
             </ul>
          <div className="hidden md:block group">
            <div className="inline-block p-[2px] rounded-full transition-all duration-500 bg-transparent group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-400">
              <button className="flex gap-2 items-center text-white bg-darkBg px-4 py-2 rounded-full transition-all duration-500">
                <span className="transition-transform transform group-hover:-translate-x-2 duration-300">
                  Sign up
                </span>
                <span className="pt-3 transform transition-transform duration-300 -rotate-90 group-hover:translate-x-2">
                  <FiDownload />
                </span>
              </button>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </nav>

        
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-40 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

       
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-gray-900 px-6 pt-10 pb-4 shadow-lg z-50 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
         
          <button
            className="absolute top-4 right-4 text-white"
            onClick={() => setIsOpen(false)}
          >
            <FiX size={24} />
          </button>

          <ul className="space-y-6 text-gray-200 font-medium mt-8">
            {["services", "about-us", "cases"].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className="block hover:text-blue-600"
                  onClick={() => setIsOpen(false)}
                >
                  {id.replace("-", " ").replace(/\b\w/g, (l) => l.toUpperCase())}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <button className="flex gap-2 text-white group">
              <span className="transition-transform transform group-hover:-translate-x-2 duration-300">
                Sign up
              </span>
              <span className="pt-3 transform transition-transform duration-300 -rotate-90 group-hover:translate-x-2">
                <FiDownload />
              </span>
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
