import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { Poppins,Jost } from "next/font/google";
import WhatsappIcon from './Icons/WhatsappIcon';
import InstagramIcon from './Icons/InstagramIcon';
const poppins= Poppins({subsets:['latin'],weight:['300','400','500','600']});
const jost= Jost({subsets:['latin'],weight:['300','400','500','600']});

function Footer() {
  return (
    <footer className='py-8 md:px-8 bg-[#D9D9D9]'>
      <div className="grid  md:grid-cols-3  px-4 justify-around md:justify-center">
        <div className=" left-pannel grid col-span-2 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">

        <div className="nossas-marcas text-xl">
          <h4 style={poppins.style} className='text-[18px] mb-8 text-[#010F1C] capitalize font-thiner'>nossas marcas</h4>
          <ul className="space-y-2  flex flex-col">
          <Link style={jost.style} className="text-[#333333e0] text-[16px] font-weight-[400] leading-5" href="#">D&apos;Cortes</Link>
          <Link style={jost.style} className="text-[#333333e0] text-[16px] font-weight-[400] leading-5" href="#">D&apos;Cortes Gourmet</Link>
          <Link style={jost.style} className="text-[#333333e0] text-[16px] font-weight-[400] leading-5" href="#">D&apos;Cortes Defumados</Link>
          </ul>
        </div>
        <div className="sobrenos text-xl">
        <h4 style={poppins.style} className='text-[18px] mb-8 text-[#010F1C] capitalize font-thiner'>sobre nós</h4>
          <ul className="space-y-2  flex flex-col">
          <Link style={jost.style} className="text-[#333333e0] text-[16px] font-weight-[400] leading-5" href="#">Quem somos</Link>
            
          </ul>
        </div>
        <div className="produtos text-xl">
        <h4 style={poppins.style} className='text-[18px] mb-8 text-[#010F1C] capitalize font-thiner'>produtos</h4>
          <ul className="space-y-2  flex flex-col">
            <Link style={jost.style} className="text-[#333333e0] text-[16px] font-weight-[400] leading-5" href="#">Bovinos</Link>
            <Link style={jost.style} className="text-[#333333e0] text-[16px] font-weight-[400] leading-5" href="#">Suínos</Link>
            <Link style={jost.style} className="text-[#333333e0] text-[16px] font-weight-[400] leading-5" href="#">Caprinos</Link>
          </ul>
        </div>

        <div className="sobrenos text-xl">
        <h4 style={poppins.style} className='text-[18px] mb-8 text-[#010F1C] capitalize font-thiner'>Receitas</h4>
          <ul className="space-y-2  flex flex-col">
            <Link className="text-gray-900" href="#"></Link>
            
          </ul>
        </div>
        </div>

        <div className=" right-pannel items-center md:justify-start flex justify-center  md:items-end md:flex-col  ">
          <div className="logo-box w-full ml-auto ">
          <Image className="-ml-6 mb-3 w-48 md:ml-auto" src="/assets/svgs/d-logo.svg" alt="logo" width={200} height={150} />
          </div>
          <div className="social w-ful  ">
            <ul className="flex justify-end space-x-4 mr-4">
              <Link className="" href="#" > <InstagramIcon fill='#000'/> </Link>
              <Link className="" href="#" > <WhatsappIcon fill="#000" /> </Link>
            </ul>
          </div>
        </div>

      </div>
          <div className=" termos space-y-2 flex flex-col md:flex-row  w-full my-8 px-6 items-center">
           
            <Link style={poppins.style} className="block text-[14px] text-[#010F1C]" href="#" >Terms of Use &amp;Privacy Policy</Link>
            <Link className="block md:ml-auto text-[14px] text-[#010F1C]" href="#" >D&apos;Corthes &copy; 2023 - Todos os Direitos Reservados</Link>

          </div>
    </footer>
  )
}

export default Footer