import React from "react"
import { Routes,Route } from "react-router-dom"
import Home from '../pages/Home'
import About from '../pages/About'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
let Navigate=()=>{
    return(<>
    <Routes>
     <Route path="/" element={<Home/>} />
     <Route path="/About" element={<About/>} />
     <Route path="/Service" element={<Service/>} />
     <Route path="/Contact" element={<Contact/>} />
    </Routes>
    </>)
}
export default Navigate