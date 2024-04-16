import React,{useState} from "react";
import './nav.css'
import { NavLink } from "react-router-dom";
let Nav=()=>{
let [show,hide]=useState(false)
return(<nav>
<div className="logo">
    <h1>Logo</h1>
</div>
<div className="menuIcon" onClick={()=>{hide(!show)}}>
    <h1>Menu</h1>
</div>
<ul className={show?"menu show":"menu"}>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/service'>Products</NavLink></li>
<li><NavLink to='/about'>About</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
</ul>
</nav>)
}

export default Nav