import React from "react";
import './App.css'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Nav from "./component/nav";
import Home from "./pages/Home"
import Service from './pages/Service'
import About from './pages/About'
import Contact from './pages/Contact'
function App(){
  return(<div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<><Nav/><Home/></>} />
      <Route path="/Service" element={<><Nav/><Service/></>} />
      <Route path="/About" element={<><Nav/><About/></>} />
      <Route path="/Contact" element={<><Nav/><Contact/></>} />
    </Routes>
    </BrowserRouter>
  </div>)
}

export default App