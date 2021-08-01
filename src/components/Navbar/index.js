import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import SearchField from "react-search-field";
import './style.css';

const Navbar=(props)=>{

    const[search,setSearch]=useState(false);
        const submitSearch=(e)=>{
         e.preventDefault();
         alert("searched")
    }
    const openSearch=()=>{
        setSearch(true);
    }
    const searchClass=search?'searchinput active':'searchinput';
    return(
        <div className='navbar'>
          <ul className='navbarMenu'>
          <li><NavLink to='/'>Home</NavLink></li>
          
          <li><NavLink to='/post'>Posts</NavLink></li>
          <li><NavLink to='/contact-us'>Contact Us</NavLink></li>
         </ul>
         <div className='search'>
             <form onSubmit={submitSearch}>
             {/* <input type="text" className="searchinput" placeholder="Search"/>
             <img onClick={openSearch}classNmae="img"  src={require("../../assets/icons/search2.png")}/> */}
             <SearchField
  placeholder="Search"
  onClick={openSearch}
  
  className="img"
/>
             </form>
         </div>
        </div>
    );
}

export default Navbar;