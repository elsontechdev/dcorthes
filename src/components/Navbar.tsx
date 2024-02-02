"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { Droop, Drop } from ".";


function Navbar() {

const [isOpen,setIsOpen]=React.useState(true);
const [dropdown,setIsDropdown]=React.useState(false);

useEffect(()=>{
 setIsOpen(true);
},[])


const toggleOpen=()=>{setIsOpen(!isOpen)}

const closeMobileMenu=()=>{setIsOpen(false)}
const toggleDropDown=()=>setIsDropdown(!dropdown)

  return (
   <nav className="navbar flex justify-center align-center text-xl">
    {/* LOGO */}
  <Link href="#">LOGO</Link>

{/* TOGGLER */}
<button  onClick={toggleOpen} className="menu-icon text-white font-lg p-2 rounded-full shadow-xl bg-blue-600">
      { isOpen?
     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
:
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
</svg>}

</button>

{/* MOBIMEL MENU */}
  <ul className={isOpen ?'nav-menu active ':'nav-menu' }>
      <li className="nav-item">
        <Link className="nav-link" onClick={closeMobileMenu} href="#" >Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={closeMobileMenu} href="#" >About</Link>
      </li>

      <li className="nav-item transition-all ">
        <Link className="nav-link flex" onClick={toggleDropDown} href="#" > 
        <span>Serviços</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </Link>
      {
        dropdown && (
          <Droop/>
        )
      }
      </li>
      <li className="nav-item">
        <Link className="nav-link" onClick={closeMobileMenu} href="#" >Loja</Link>
      </li>
  </ul>

</nav>
  );
}

export default Navbar;




















/*

 <nav className=" bg-white border border-blue-400">
      <div className=" mx-auto">
        <div className="lg:px-28 md:px-20 px-8 flex justify-between items-center py-4">
          <div>
            <Image
              alt="logo"
              width="200"
              height="40"
              src={"/assets/svgs/d-logo.svg"}
            />
          </div>
          <div className="center-menu hidden lg:block">

            <div className="space-x-8 flex items-center">
              <div>Nossas Marcas</div>
              <Drop label="Nossas marcas"/>
              <div>Produtos</div>
              <Drop label="Produtos"/>
            </div>
          </div>
          <div className="hidden space-x-4 items-center justify-center align-center lg:flex ">
            <div>insta</div>
            <div>busca</div>
          </div>
            <button className="cursor-pointer bg-blue-400 px-3 py-1 rounded-full">X</button>
        </div>
      </div>
      <div className="mobile-only bg-red-500 min-h-screen max-w-full top-0 right-0 left-0 absolute z-50">
        <div className="top flex ">
        <div className="flex justify-between  items-center w-full p-8">
            <Image
              alt="logo"
              width="200"
              height="40"
              src={"/assets/svgs/d-logo.svg"}
            />
            <button className="cursor-pointer bg-blue-400 p-3  py-1  rounded-full">X</button>
          </div>
        </div>
        
      </div>
    </nav>
*/
