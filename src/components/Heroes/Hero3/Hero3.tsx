import Image from 'next/image'
import React from 'react'
import { inter,poppins,rubik } from '@/other/fonts'


function Section({children="Por algo"}:{children?:React.ReactNode}){
  return(
    <section className=" mb-[150px] grid grid-cols-1 md:grid-cols-2 bg-[#0A080B] h-[1000px] md:h-[500px]">
      {children}
    </section>
  )
}

function Painel({children}:{children?:React.ReactNode}){
  return(
    <div className=' grid m-auto order-2 md:order-1 min-h-[400px] max-h-[500px]  text-white sm:text-black'>
           {children}
    </div>
  )
}
function PainelImagem({children}:{children?:React.ReactNode}){
  return(
    <div className=' order-1 md:order-2 h-full max-h-[500px]  text-white sm:text-black'>
           {children}
    </div>
  )
}


function MostrarImage(){
   return(
    <div className=' max-w-[80%] lg:max-w-[400px] h-full max-h-[400px] m-auto translate-y-[120px] transition-transform relative'>
      <div className="absolute w-[100px] h-[100px] border-t-2 border-r-2 border-[#E0AA2C] -right-[20px] -top-[20px]"></div>
      <div className="coin absolute top-[50%] -translate-x-[50%]"> <Image alt="" src="/assets/images/coin.png" width={130} height={130}></Image> </div>
    <Image className="object-fit h-full w-full  " src="/assets/images/hero-3.png" width='300' height='300' alt="hero"/>   

    </div>
   )
}

function TextBox(){

  return(
    <div className=' sm:p-5 p-8 lg:p-16 flex flex-col h-full justify-start content-center text-white'>
      <h2 style={poppins.style} className=" leading-4 text-xl mb-20 lg:mb-28 text-yellow-500">D&apos;Corthes Gourmet</h2>
      <h1 style={rubik.style} className='mb-4 lg:mb-10 text-white text-3xl lg:text-4xl leading-[40px] lg:leading-[45px] font-bold'> O Caminho para a Perfeição Começa  com a Seleção da  Carne Certa </h1>
      <p>Apreciando a vida com amor e qualidade</p>
    </div>
  )
}



function Hero3() {
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

export default Hero3

