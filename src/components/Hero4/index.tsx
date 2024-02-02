import Image from 'next/image'
import React from 'react'
import { inter,poppins,rubik } from '@/other/fonts'
import { defumados, embutidoImage } from '../../../public/assets/images'


function Section({children="Por algo"}:{children?:React.ReactNode}){
  return(
    <section style={{backgroundImage:`url('${defumados.src}')`}} className=" mb-[150px] grid grid-cols-1 md:grid-cols-2  h-[1300px] md:h-[700px]">
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
    <div className=' flex justify-end align-super  order-1 md:order-2 max-h-[500px]  text-white sm:text-black'>
           {children}
    </div>
  )
}




function TextBox(){

  return(
    <div className=' sm:p-5 p-8 lg:p-16 flex flex-col h-full justify-start content-center text-white'>
      <h1 style={rubik.style} className='mb-4 text-[4vw] w-[95%] font-bold'> O Caminho para a Perfeição Começa  com a Seleção da  Carne Certa </h1>
      <p style={poppins.style} className=" text-white">Apreciando a vida com amor e qualidade</p>
    </div>
  )
}



function Hero4() {
  return (
   <Section>
    <Painel>
     <TextBox></TextBox>
    </Painel>
   </Section>
  )
}

export default Hero4

