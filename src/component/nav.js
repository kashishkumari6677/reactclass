import React from "react";
import './nav.css'
import { NavLink } from "react-router-dom";
let Nav=()=>{
return(<nav>
<div className="logo">
    <h1>Logo</h1>
</div>
<ul>
<li><NavLink to='/'>Home</NavLink></li>
<li><NavLink to='/service'>Products</NavLink></li>
<li><NavLink to='/about'>About</NavLink></li>
<li><NavLink to="/contact">Contact</NavLink></li>
</ul>
</nav>)
}

export default Nav