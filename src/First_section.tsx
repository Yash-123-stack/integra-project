import React from 'react'
import banner from "./assets/section1_image.jpg";
export default function FirstSection() {
  return (
   <>
   <section className = "bg-gray-900">
    <div className = "w-container flex justify-between blade-top-padding-sm">
        <div className = "text-white mega font-medium min-w-[50%]">
            <div className = "">UNLIMITED PRETENTIOUS IDEAS</div>
            <div className = "blade-top-padding-sm border-b-2 border-white max-w-[80%]"></div>
            <div className = "flex justify-between max-w-[80%]  pt-4">
               <h4 className = "text-white">Our Solutions</h4>
               <h4 className = "text-white max-w-[40%] items-end">We provide full funnel approach</h4>
            </div>
        </div>
        <div className = "min-w-[50%]">
            <img src={banner} className = "" alt="" />
        </div>
    </div>

   </section>
   </>
  )
}
