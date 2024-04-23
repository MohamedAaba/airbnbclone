import React from "react"
import { GoStarFill } from "react-icons/go"
import { GoDotFill } from "react-icons/go"
import { GoHeartFill, GoHeart } from "react-icons/go"

const Card = ({ image, address, rating, distance, duration, price, time }) => {
   return (
      <div className="flex flex-col text-xs rounded-lg">
         <div className="relative">
            <img
               src="/images/bg1.png"
               class="object-cover aspect-square rounded-xl"
            />
            <p className="absolute bg-white top-0 py-1 px-2 mt-2 ml-2 rounded-xl font-medium">
               Guest favourite
            </p>

            <div className="absolute right-0 top-0 mt-3 mr-3 text-xl text-dark opacity-75	">
               <GoHeartFill />
            </div>
            <div className="absolute right-0 top-0 mt-3 mr-3 text-xl text-white">
               <GoHeart />
            </div>
            <div className="absolute flex flex-row items-center bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
               <GoDotFill style={{ opacity: "1" }} size={"1em"} />
               <GoDotFill style={{ opacity: "0.85" }} size={"0.95em"} />
               <GoDotFill style={{ opacity: "0.7" }} size={"0.9em"} />
               <GoDotFill style={{ opacity: "0.55" }} size={"0.85em"} />
               <GoDotFill style={{ opacity: "0.4" }} size={"0.8em"} />
            </div>
         </div>
         <div className="flex flex-row items-center justify-between pt-2">
            <p className="font-medium">Bourré, France</p>
            <div className="flex flex-row items-center gap-1">
               <GoStarFill className="" />
               <span className="font-light">4,84</span>
            </div>
         </div>
         <p className="text-neutral-500">8,028 km away</p>
         <p className="text-neutral-500 pb-1">May 19 – 24</p>
         <p className="text-dark font-medium">$320 CAD</p>
         <p className="text-dark font-light">night</p>
      </div>
   )
}
const Cards = () => {
   return (
      <div className="grid grid-cols-6 gap-4 px-16">
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
         <Card />
      </div>
   )
}

export default Cards
