import Image from 'next/image'
import React from 'react'
import { inter,poppins,rubik } from '@/other/fonts'



function Section3Por1({children="Por algo"}:{children?:React.ReactNode}){
  return(
    <section className=" box-border p-6 my-auto gap-8  grid grid-cols-5  bg-[#000] h-[1200px] lg:h-[600px] ">
      {children}
    </section>
  )
}

function PainelMaior({children}:{children?:React.ReactNode}){
  return(
    <div className='  grid   col-start-1 col-span-5 lg:col-span-3  h-[500px]  text-white sm:text-black'>
           {children}
    </div>
  )
}

function Painel({children}:{children?:React.ReactNode}){
  return(
    <div className=' mx-5 2xl:mx-20 col-start-1 h-[500px] lg:col-start-4 col-span-5 lg:col-span-2 rounded-[20px] bg-[#D9D9D9] grid    sm:text-black'>
           {children}
    </div>
  )
}



function MostrarImage(){
   return(
    <div className=' w-full  h-full max-h-[500px] m-auto transition-transform relative'>
    <Image className="object-fit h-full w-full  " src="/assets/images/video.png" width='700' height='600' alt="hero"/>   

    </div>
   )
}

interface Info<T>{
  [chave:string]:T
}
const nutrientes:Info<string>={
  "Title":"Informações Nutricionais",
  "Calories":"219.9kcal",
  "Total Fat": "10.7g",
  "Protein":"7.9g",
  "Carbohydrate":"22.3g",
  "Choleterol":"37.4mg",
  "Rodape":"adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

}







const Tabelar: React.FC<{ objeto: Info<string> }> = ({ objeto }) => {

  const title=objeto.Title;
  const rodape=objeto.Rodape;
  return (
    <div className=" h-[500px] p-8 pt-15  rounded-md ">
         <h4 style={rubik.style} className="text-black mb-5  font-bold text-2xl">{title}</h4>
      <ul >
            {Object.entries(objeto).map(([chave, valor], index) => {
              if (chave.toLowerCase() === 'title' || chave.toLowerCase()==='rodape') {
                return null; // Pular a exibição se a chave for 'title' ou 'rodape'
              }
              return (
                <li style={poppins.style} className="text-xl text-black mb-4  border-b-2 border-[#0000001b]    flex justify-between w-full" key={index}>
                  <div className="">{chave}</div>  <div className="">{valor}</div>
                </li>
              );
            })}
          </ul>
          <p style={inter.style} className="text-black text-lg">{rodape}</p>
      </div>
  );
};






export default function HeroProduto() {
  return (
   <Section3Por1>
    <PainelMaior>
      <MostrarImage/>
    </PainelMaior>
    <Painel>
     <Tabelar objeto={nutrientes} />
    </Painel>
   
   </Section3Por1>
  )
}



