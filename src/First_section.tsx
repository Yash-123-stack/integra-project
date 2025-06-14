import React from 'react'
import { FaCircleArrowRight } from "react-icons/fa6";
import banner from "./assets/curious-1.jpg";
export default function FirstSection() {
  return (
   <>
   <section className = "bg-darkBg">
    <div className = "w-container flex flex-col sm:flex-row justify-between blade-top-padding-sm blade-bottom-padding-sm ">
        <div className = "sm:mega text-xl font-medium sm:min-w-[50%] sm:order-1 order-2 sm:pt-0 blade-top-padding gsap-slide-in">
            <div className = "text-center sm:text-left text-white bg-clip-text bg-banner-gradient hover:text-transparent hover:bg-banner-gradient transition duration-300 cursor-pointer">UNLIMITED PRETENTIOUS IDEAS</div>
            <div className = "blade-top-padding-sm border-b-2 border-white sm:max-w-[80%] sm:px-0 px-4"></div>
            <div className = "flex justify-between  sm:max-w-[80%] pt-4">
               <h4 className = "relative text-white sm:text-left text-center leading-tight font-semibold text-lg inline-block group pb-1 cursor-pointer">
                OUR SOLUTIONS
                 <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-500 group-hover:w-full"></span>
               </h4>
               <h4 className = "relative sm:text-left text-center text-white  sm:max-w-[45%] leading-tight font-semibold inline-block group pb-1 cursor-pointer">
                WE PROVIDE THE FULL FUNNEL APPROACH
                <span className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-0 bg-gradient-to-r from-blue-500 to-green-400 rounded-full transition-all duration-500 group-hover:w-full"></span>
                </h4>
            </div>
        </div>
        <div className = "min-w-[50%] relative sm:order-2 order-1 gsap-slide-in">
            <img src={banner} className = "rounded-md hover:scale-105 overflow-hidden transition-all duration-500 cursor-pointer" alt="" />
           <div className="absolute sm:text-xl top-4 left-4 bg-transparent bg-opacity-60 px-3 py-1 rounded-md text-lg font-semibold group cursor-pointer">
              <span className="text-black bg-clip-text bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-500 group-hover:text-transparent">
                 YOUR <br /> BUSINESS <br /> BOOST
              </span>
           </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%]">
             <button className="relative group w-full px-4 py-2 border border-black text-black rounded-full overflow-hidden bg-transparent flex justify-between items-center transition-all duration-500">
    
    
                <span className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-blue-500 to-green-400 transition-all duration-[1200ms] group-hover:w-full z-0"></span>

   
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
                     Book a demo call
                </span>  
                <span className="relative z-10 pt-1 transform transition-transform duration-300 group-hover:-translate-x-4">
                    <FaCircleArrowRight />
                </span>
             </button>
          </div>
        </div>
    </div>
   </section>
   </>
  )
}
