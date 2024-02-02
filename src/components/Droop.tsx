"use client"
import React from 'react'
import {menu as menuItems} from "../other/constants";
import Link from 'next/link';

function Droop() {
// e: React.MouseEvent<HTMLButtonElement>
 const [isDropdownOpen,setIsDropdownOpen]=React.useState(false);
 const handleClick= ()=>{
    setIsDropdownOpen(!isDropdownOpen)
 }
{/* yes: dropdown-menu clicked No: dropdown-menu*/}
  return (
    <ul 
    className={isDropdownOpen? 
        " inline-block transition h-0 bg-purple-500  top-20 text-start "
        :
        "inline-block  transition space-y-2 bg-blue-400  top-20 text-start "
    }
    onClick={handleClick}>
    {
      menuItems.map((menu,index)=>(
        <li key={index} className="transition hover:bg-dcortes-primary"> <Link onClick={()=>setIsDropdownOpen(false)} className={menu.cName} href={menu.path}>{menu.title} {JSON.stringify(isDropdownOpen)}</Link> </li>
      ))
    }
    </ul>
  )
}

export default Droop