import Image from 'next/image'
import React from 'react'



import { Dancing_Script,Lobster_Two,Rubik, Poppins } from "next/font/google";
const poppins=Poppins({subsets:['latin'],weight:['500']})
const dancing= Dancing_Script({subsets:['latin']})

const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})
const rubik=Rubik({subsets:['latin'],weight:['700','800']})

const Hero2 = () => {
    return (
        <section className="   grid-col-1 md:grid grid-cols-2 h-[600px] bg-[#1D181E]">

        <div className="lado-A  h-1/2 md:h-full   grid items-center justify-center ">

            <div className="relative box  w-[240px] h-[280px] md:w-[340px] md:h-[380px] lg:w-[470px] lg:h-[500px]  mt-8 md:mt-0">
                <div className="bottom-img absolute top-0 left-0 right-8 bottom-8   ">
                     <Image className="w-full h-full object-fit" src="/assets/images/products-hero.png" width={330} height={402} alt="hero"/>   
                </div>
                <div className="bottom-img absolute top-20 left-20 right-0 bottom-0 md:left-32 md:top-32 lg:top-36 lg:lef-36">
                     <Image className="w-full h-full object-fit" src="/assets/images/products-hero2.png" width={330} height={402} alt="hero"/>   
                </div>

            </div>
           
           
        </div>

        <div className="lado-B  h-1/2 md:h-full grid items-center justify-center max-w-md mx-auto">
            <div className="title ">
            <h2 style={rubik.style} className=" text-center mb-8 font-weight-[800] text-lg md:text-5xl text-white  md:text-left">Conheça a Nossa <br/> Variedade de <br/> Cortes</h2>
            <p style={poppins.style} className="px-1 text-xs md:text-md lg:text-lg text-center md:text-left text-dcortes-primary">Com carne bovina 100% alimentada com Capim,<br/> frango Caipira orgânico, Carne de Porco</p>

            </div>
        </div>

    </section>
  )
}

export default Hero2