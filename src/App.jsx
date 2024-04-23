import { useState } from "react"
import "./App.css"
import { Header, Search, Categories, Cards, Footer } from "./components"

function App() {
   return (
      <div>
         <Header />
         <Search />
         <Categories />
         <Cards />
         <Footer />
      </div>
   )
}

export default App
