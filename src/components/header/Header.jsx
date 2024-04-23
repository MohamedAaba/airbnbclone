import React from "react"
import { SiAirbnb } from "react-icons/si"
import { PiGlobe } from "react-icons/pi"
import { GiHamburgerMenu } from "react-icons/gi"

import "./header.css"

const Header = () => {
   return (
      <div className="flex items-center justify-between py-4 px-16 font-body">
         <a href="" className="logo flex items-center gap-1">
            <SiAirbnb size={32} color="#FF5A5F" />
            <h3 className="font-bold text-2xl text-primary">airbnb</h3>
         </a>
         <div className="flex gap-8 text-base">
            <p className="font-medium">Stays</p>
            <p className="text-gray-500">Experiences</p>
            <p className="text-gray-500">Online Experiences</p>
         </div>
         <div className="login flex items-center gap-4 text-sm font-semibold">
            <p>Airbnb your home</p>
            <a href="">
               <PiGlobe size={18} />
            </a>
            <div className="flex items-center gap-2 border border-gray-300 rounded-full p-2 ">
               <div className="py-2 px-1">
                  <GiHamburgerMenu size={15} />
               </div>
               <p className="bg-dark py-2 px-3 rounded-full text-white text-xs">
                  A
               </p>
            </div>
         </div>
      </div>
   )
}

export default Header
