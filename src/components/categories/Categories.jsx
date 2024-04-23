import React from "react"
import { GiCaveEntrance, GiStoneTower, GiEcology } from "react-icons/gi"
import { MdCabin, MdOutlineExpandLess } from "react-icons/md"
import { RiLandscapeLine } from "react-icons/ri"
import { LiaCitySolid, LiaKeySolid } from "react-icons/lia"
import { FaPlateWheat } from "react-icons/fa6"
import { GoContainer } from "react-icons/go"
import { HiOutlineFire } from "react-icons/hi"
import { TbSailboat, TbBeach, TbUfo } from "react-icons/tb"
import { IoHomeOutline } from "react-icons/io5"
import { PiPark } from "react-icons/pi"
import { BsWater } from "react-icons/bs"
import { VscSettings } from "react-icons/vsc"

const cats = [
   {
      icon: <GiCaveEntrance />,
      title: "Caves",
      isActive: true,
   },
   {
      icon: <MdCabin />,
      title: "Cabins",
      isActive: false,
   },
   {
      icon: <RiLandscapeLine />,
      title: "Amazing views",
      isActive: false,
   },
   {
      icon: <LiaCitySolid />,
      title: "Top cities",
      isActive: false,
   },
   {
      icon: <FaPlateWheat />,
      title: "Luxe",
      isActive: false,
   },
   {
      icon: <GoContainer />,
      title: "Containers",
      isActive: false,
   },
   {
      icon: <HiOutlineFire />,
      title: "Trending",
      isActive: false,
   },
   {
      icon: <LiaKeySolid />,
      title: "New",
      isActive: false,
   },
   {
      icon: <GiStoneTower />,
      title: "Historical homes",
      isActive: false,
   },
   {
      icon: <GiEcology />,
      title: "Earth homes",
      isActive: false,
   },
   {
      icon: <TbSailboat />,
      title: "Boats",
      isActive: false,
   },
   {
      icon: <TbBeach />,
      title: "Beach front",
      isActive: false,
   },
   {
      icon: <TbUfo />,
      title: "OMG!",
      isActive: false,
   },
   {
      icon: <IoHomeOutline />,
      title: "Tiny homes",
      isActive: false,
   },
   {
      icon: <PiPark />,
      title: "National parks",
      isActive: false,
   },
   {
      icon: <BsWater />,
      title: "Lakes",
      isActive: false,
   },
]

const Category = ({ icon, title, isActive }) => {
   return (
      <div
         className={
            "flex flex-col gap-2 items-center pb-3 " +
            (isActive
               ? "text-dark border-b-2 border-dark"
               : "text-gray-500 border-b-2 border-white")
         }
      >
         {icon}
         <div className="text-xs">{title}</div>
      </div>
   )
}
const Categories = () => {
   return (
      <div className="flex flex-row justify-between items-center font-medium py-4 px-16">
         {cats.map(cat => (
            <Category
               icon={cat.icon}
               title={cat.title}
               isActive={cat.isActive}
            />
         ))}
         <div className="pb-3 flex flex-row items-center gap-3">
            <div className="border border-gray-200 p-1 rounded-full text-lg rotate-90">
               <MdOutlineExpandLess />
            </div>
            <div className="flex flex-row items-center gap-2 border border-gray-200 p-3 rounded-lg	">
               <VscSettings style={{ transform: "rotate(90deg)" }} />
               <p className="text-xs">Filters</p>
            </div>
            <div className="flex flex-row items-center gap-2 border border-gray-200 p-[0.65rem] rounded-lg	">
               <div className="bg-gray-300 rounded-full p-[2px] pr-3">
                  <div className="bg-white p-2 rounded-full "></div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Categories
