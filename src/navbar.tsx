import React from 'react'
import { FiDownload } from "react-icons/fi";
import logoImage from "./assets/integra-logo.png";
export default function Navbar() {
  return (
    <>
    <section className = "">
        <nav className = "flex items-center justify-between px-6  py-4 bg-gray-900 shadow-md">

     <div className = "font-bold text-gray-800 d xl:max-w-[25%] sm:max-w-[20%]">
        <img src={logoImage} className = "w-[40%]" alt="" />
     </div>
     <ul className = "flex space-x-6 text-gray-700 dark:text-gray-200 font-medium">
        <li><a href="#services" className = "hover:text-blue-600 transition-all duration-500">Services</a></li>
        <li><a href="#about-us" className = "hover:text-blue-600 transition-all duration-500">About Us</a></li>
        <li><a href="#cases" className = "hover:text-blue-600 transition-all duration-500">Cases</a></li>
     </ul>
     <button className = "flex gap-2 text-white group">
      Sign up
     <span className = "pt-3 transform transition-transform duration-300 -rotate-90 group-hover:translate-x-2">
      <FiDownload  />
     </span>
     </button>
      </nav>
    </section>
    </>
  )
}
