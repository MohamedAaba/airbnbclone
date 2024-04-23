import React from "react"
import { FaMap } from "react-icons/fa"
import { GoDotFill } from "react-icons/go"
import { PiGlobe } from "react-icons/pi"
import { MdOutlineExpandLess } from "react-icons/md"
import { BsCurrencyDollar } from "react-icons/bs"

const Footer = () => {
   return (
      <div>
         <div className="flex flex-row gap-2 text-white text-sm py-3 px-5 font-medium bg-dark items-center justify-center w-max mx-auto my-5 rounded-full">
            <p>Show map</p>
            <FaMap />
         </div>
         <div className="flex flex-row justify-between items-center px-16 border-t-2 py-2">
            <div className="flex flex-row gap-2 text-xs text-dark items-center font-light">
               <p>© 2024 Airbnb, Inc.</p>
               <GoDotFill size={5} />
               <p>Privacy</p>
               <GoDotFill size={5} />
               <p>Terms</p>
               <GoDotFill size={5} />
               <p>Sitemap</p>
            </div>
            <div className="flex flex-row text-xs font-medium items-center gap-5">
               <div className="flex flex-row items-center gap-1">
                  <PiGlobe />
                  {"English (CA)"}
               </div>
               <div className="flex flex-row items-center gap-1">
                  <BsCurrencyDollar />
                  CAD
               </div>
               <div className="flex flex-row items-center gap-1">
                  Support & resources
                  <MdOutlineExpandLess
                     size={"1.5em"}
                     style={{ transform: "rotate(180deg)" }}
                  />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Footer
