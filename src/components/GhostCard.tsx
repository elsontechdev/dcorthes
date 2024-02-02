import React from 'react'

interface GhostCardProp{
  title:string;
  content:string;
}

import { Dancing_Script,Lobster_Two,Rubik, Poppins } from "next/font/google";
const poppins=Poppins({subsets:['latin'],weight:['400','500'],style:['italic','normal']})
function GhostCard({title,content}:GhostCardProp) {
  return (
    <div className='hover:shadow-lg transition-all border max-w-[400px] border-gray-300 rounded-xl p-8 min-h-[300px] md:min-h-[250px]'>
       <h3 style={poppins.style}  className='font-bolder text-center uppercase text-lg mb-3 md:text-xl xl:text-4xl font-[700]   text-[#E0AA2C]'>{title}</h3>
       <p className='uppercase md:text-xs xl:text-sm font-semibold leading-6 tracking-normal text-center'>{content}</p>
    </div>
  )
}

export default GhostCard