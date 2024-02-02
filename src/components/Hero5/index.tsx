import Image from 'next/image'
import React from 'react'
import { inter,poppins,rubik } from '@/other/fonts'
import { embutidoImage } from '../../../public/assets/images'


function Section({children="Por algo"}:{children?:React.ReactNode}){
  return(
    <section className=" grid grid-cols-1 md:grid-cols-2 bg-[#150000] h-[1000px] md:h-[500px]">
      {children}
    </section>
  )
}

function Painel({children}:{children?:React.ReactNode}){
  return(
    <div className=' grid m-auto order-2 md:order-1 min-h-[400px] h-full  text-white sm:text-black'>
           {children}
    </div>
  )
}
function PainelImagem({children}:{children?:React.ReactNode}){
  return(
    <div className=' flex justify-end align-super  order-1 md:order-2   text-white sm:text-black'>
           {children}
    </div>
  )
}


function MostrarImage(){
   return(
    <div style={{alignItems:'end'}} className='flex  max-w-[90%] lg:max-w-[400px] h-full   transition-transform relative'>
        <Image className="object-fit h-full w-full  max-h-[300px]" src={embutidoImage} alt="hero"/>   
    </div>
   )
}

function TextBox(){

  return(
    <div className=' sm:p-5 p-8 lg:p-16 flex flex-col h-full justify-start content-center text-white'>
      <h1 style={rubik.style} className='mb-4 lg:mb-10 text-white text-3xl lg:text-4xl leading-[40px] lg:leading-[45px] font-bold'> O Caminho para a Perfeição Começa  com a Seleção da  Carne Certa </h1>
      <p style={poppins.style} className=" text-yellow-500">Apreciando a vida com amor e qualidade</p>
    </div>
  )
}



function Hero5() {
  return (
   <Section>
    <Painel>
     <TextBox></TextBox>
    </Painel>
    <PainelImagem>
      <MostrarImage/>
    </PainelImagem> 
   </Section>
  )
}

export default Hero5

