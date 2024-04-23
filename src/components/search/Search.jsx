import React from "react"
import "./search.css"
import { BiSearch } from "react-icons/bi"

const Search = () => {
   return (
      <div className="flex justify-center pb-6 border-b">
         <div className="search flex items-center border border-gray-300 rounded-full shadow py-2 pr-2 pl-6 text-xs justify-between">
            <div className="search-first flex flex-col border-r-2">
               <label>Where</label>
               <input type="text" placeholder="Search destinations" />
            </div>
            <div className="search-seacond flex flex-col border-r-2">
               <label>Check in</label>
               <input type="text" placeholder="Add dates" />
            </div>
            <div className="search-third flex flex-col border-r-2	">
               <label>Check out</label>
               <input type="text" placeholder="Add dates" />
            </div>
            <div className="search-forth flex flex-row items-center justify-between">
               <div className="flex flex-col">
                  <label>Who</label>
                  <input type="text" placeholder="Add guests" />
               </div>
               <div className="search-icon bg-primary text-white p-4 rounded-full text-base">
                  <BiSearch />
               </div>
            </div>
         </div>
      </div>
   )
}

export default Search
