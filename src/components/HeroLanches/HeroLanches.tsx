import Image from 'next/image'
import React from 'react'
import { inter,poppins,rubik } from '@/other/fonts'


function Section({children="Por algo"}:{children?:React.ReactNode}){
  return(
    <section className=" mb-[150px] grid grid-cols-1 md:grid-cols-2 bg-[#AC5413] h-[1000px] md:h-[500px]">
      {children}
    </section>
  )
}

function Painel({children}:{children?:React.ReactNode}){
  return(
    <div className=' grid m-auto order-2 md:order-2 min-h-[400px] max-h-[500px]  text-white sm:text-black'>
           {children}
    </div>
  )
}
function PainelImagem({children}:{children?:React.ReactNode}){
  return(
    <div className=' order-1 md:order-1 h-full max-h-[500px]  text-white sm:text-black'>
           {children}
    </div>
  )
}

{/* <div className="coin absolute top-[50%] -translate-x-[50%]"> <Image alt="" src="/assets/images/coin.png" width={130} height={130}></Image> </div> */}
{/* <div className="absolute w-[100px] h-[100px] border-t-2 border-r-2 border-[#E0AA2C] -right-[20px] -top-[20px]"></div> */}

function MostrarImage(){
  return(
    <div className='grid grid-cols-3 grid-rows-6  max-w-[70%] lg:max-w-[400px] h-full max-h-[450px] m-auto translate-y-[70px] transition-transform relative'>
      <Image className=" col-start-2 col-span-2 row-start-2 row-span-4 object-fit h-full w-full  " src="/assets/images/lanch-hero-2.png" width='600' height='600' alt="hero"/>   
      <Image className=" col-start-1 col-span-2 row-start-1 row-span-4 object-fit h-full w-full  " src="/assets/images/lanch-hero-1.png" width='600' height='600' alt="hero"/>   

    </div>
   )
}

function TextBox(){

  return(
    <div className=' sm:p-5 p-8 lg:p-16 flex flex-col h-full justify-start content-center text-white'>
      {/* <h2 style={poppins.style} className=" leading-4 text-xl mb-20 lg:mb-28 text-yellow-500">D&apos;Corthes Gourmet</h2> */}
      <h1 style={rubik.style} className='my-4 lg:my-12 text-white text-3xl lg:text-4xl leading-[40px] lg:leading-[45px] font-bold'> O Caminho para a Perfeição Começa  com a Seleção da  Carne Certa </h1>
      <p className="text-[#BDA5A5]">Com carne bovina 100% alimentada com capim, frango caipira orgânico, carne de porco.</p>
    </div>
  )
}



export default function HeroLanches() {
  return (
   <Section>

    <PainelImagem>
      <MostrarImage/>
    </PainelImagem>
    <Painel>
     <TextBox></TextBox>
    </Painel>

   
   </Section>
  )
}