import Image from 'next/image'
import React from 'react'
import { Dancing_Script,Lobster_Two } from "next/font/google";
const dancing= Dancing_Script({subsets:['latin']});


function PorqueNos() {
  return (
    <section className='bg-[#1D181E]  py-20'>

      <div className="row-porquenos grid grid-cols-2  max-h-full  bg-dark-900 ">
        
        <div className="left-img-pannel w-full ">
          <div className="image-box md:p-4 lg:p-8">
            <Image className="w-full h-full  object-contain" alt="porque nós" src="/assets/images/porquenos.png" width={575} height={726} />
          </div>
        </div>

        {/* floating card */}
        <div className="floating-cards-pannel flex justify-center flex-col items-center pl-4 md:pl-0">
          <div className="title-box">
          <h3 className="text-white text-sm md:text-3xl mb-3 md:mb-10">PORQUE AS PESSOAS <br/> ESCOLHEM  <span style={dancing.style} className="text-dcortes-primary">D&apos;Cortes</span>?</h3>
            <p className="text-lg font-medium leading-7 tracking-normal text-left md:text-lg mb-4 md:mb-20 text-white max-w-lg uppercase">Nossas soluções vão ao encontro dos nossos clientes levando qualidade, praticidade, confiança e segurança. </p>
          </div>
         <div className="floating-card-list -translate-x-[70px] md:-translate-x-28  justify-around w-full flex  gap-4">


            <div className=" box shadow-lg  p-1 md:p-4 lg:p-8 text-center    min-w-[40%] bg-[#fff]"> 
             <span className="block text-md md:text-2xl lg:text-4xl mb-1 md:mb-2  font-bold tracking-widest text-[#1d181e]">+30</span>
             <span className="uppercase mb-1 md:mb-3 text-[#1d181e] font-semibold text-xs md:text-lg">experiência</span>
             <span className="block uppercase text-[#1d181e] font-semibold text-xs md:text-md ">mais de 30 anos de tradição</span>
            </div>
            <div className=" box  shadow-lg p-1 md:p-4 lg:p-8 text-center    min-w-[40%] bg-[#fff]"> 
             <span className="block text-md md:text-2xl lg:text-4xl mb-1 md:mb-2  font-bold tracking-widest text-[#1d181e]">+30</span>
             <span className="uppercase mb-1 md:mb-3 text-[#1d181e] font-semibold text-xs md:text-lg">experiência</span>
             <span className="block uppercase text-[#1d181e] font-semibold text-xs md:text-md ">mais de 30 anos de tradição</span>
            </div>
            <div className=" box shadow-lg  p-1 md:p-4 lg:p-8 text-center    min-w-[40%] bg-[#fff]"> 
             <span className="block text-md md:text-2xl lg:text-4xl mb-1 md:mb-2  font-bold tracking-widest text-[#1d181e]">+30</span>
             <span className="uppercase mb-1 md:mb-3 text-[#1d181e] font-semibold text-xs md:text-lg">experiência</span>
             <span className="block uppercase text-[#1d181e] font-semibold text-xs md:text-md ">mais de 30 anos de tradição</span>
            </div>

            

           

         </div>
        </div>

      </div>





     
    </section>
  )
}

export default PorqueNos