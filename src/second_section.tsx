import React  from 'react'
import { IoMdArrowUp } from "react-icons/io";
// import business from "./assets/unique_business.png";
import busi from "./assets/unique_updated.png";
export default function SecondSection() {
  return (
   <>
   <section className = "bg-darkBg">
   <div className = "w-container-lg sm:flex justify-between blade-top-padding-sm blade-bottom-padding-sm ">
    <div className = "gap-2  flex flex-col sm:blade-top-padding-xl gsap-slide-in">
         {["WEB ANALYTICS", "EMAIL MARKETING", "SEO 2.0"].map((label, idx) => (
        <button
         key={idx}
        className="relative group text-white px-4 py-1 border border-white rounded-full overflow-hidden transition-all duration-500"
        >
    
      <span className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-0 bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-700 group-hover:w-full z-0"></span>
 
      <span className="relative z-10 transition-all duration-300 group-hover:text-white">
        {label}
      </span>
        </button>
        ))}
    </div>
    <div className = "flex sm:flex-row flex-col gap-3 sm:min-w-[60%] sm:pt-0 blade-top-padding gsap-fade-in">
        <div className = "bg-orange-600 hover:bg-[#B0C4DE] text-black font-bold flex flex-col justify-between sm:basis-1/2 sm:min-h-[200px] min-h-[250px] rounded-md cursor-pointer transition-transform hover:-translate-y-2 duration-300">
            <span className = "w-container pt-2">
             UNIQUE <br /> BUSINESS SOLUTIONS
            </span>
            <span className = "w-container">
                <img src={busi} className = "" alt="" />
            </span>
        </div>
       <div className = "bg-gray-100 hover:bg-[#008080] text-black font-bold flex flex-col justify-between sm:basis-1/2 sm:min-h-[200px] min-h-[250px] rounded-md cursor-pointer transition-transform hover:-translate-y-2 duration-300 sm:mt-0 mt-2">
           <span className = "text-5xl flex justify-end rotate-45">
            <IoMdArrowUp/>
           </span>
            <span className = "w-container text-2xl">
             OUR CASE <br /> STUDIES
            </span>
        </div>
         <div className = "bg-yellow-400 hover:bg-[#C8A2C8] text-black font-bold flex flex-col justify-between sm:basis-1/2 sm:min-h-[200px] min-h-[250px] rounded-md cursor-pointer transition-transform hover:-translate-y-2 duration-300 sm:mt-0 mt-2">
            <span className = "w-container pt-2">
             SUCCESSFUL <br /> PROJECTS
            </span>
            <span className = "w-container text-5xl">
                700 +
            </span>
        </div>
    </div>
   </div>
   </section>
   </>
  )
}
