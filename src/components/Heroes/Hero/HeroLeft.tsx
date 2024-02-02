import React from 'react'


import Image from "next/image";



import { Dancing_Script,Lobster_Two, Poppins } from "next/font/google";
const poppins=Poppins({subsets:['latin'],weight:['500']})
const dancing= Dancing_Script({subsets:['latin']})

const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})
const HeroLeft = () => {
  return (
    <div className=" px-4 min-h-[300px] md:min-h-[400px] lg:min-h-[500px] h-full left-col flex items-center justify-center align-center flex-col  w-full md:w-1/2">
    <div className="mb-12 ">

    <h3 className={`text-center mt-20 lg:mt-0 text-5xl font-bold text-white md:text-left mb-8 `}>
      Grupo <span style={lobster.style}  className={`text-4xl text-dcortes-primary font-dancing-script`}>D&apos;Cortes  </span> <br/> mais de 30 anos <br/> inovando no  <span className="text-dcortes-primary" style={lobster.style}>Agro</span> 
    </h3>
    <p className=" text-md mb-8 text-gray-100 ">Na D&apos;Corthes  você encontra carnes bovinas, frangos, <br/>pescados, entre outros.</p>
     <button style={poppins.style} className="text-lg lg:mt-8 bg-dcortes-primary rouded px-8 py-3 border-0 rounded-full">Veja mais</button>
     {/* <button className="btn-super">Super botao</button> */}
    </div>
  </div>
  )
}

export default HeroLeft