import React from 'react'

import { Dancing_Script,Lobster_Two,Rubik, Poppins, Jost } from "next/font/google";
import GridRow from '@/components/Row';
import Image from 'next/image';
import Mapa from '@/components/Mapa';
import dynamic from "next/dynamic";

const poppins=Poppins({subsets:['latin'],weight:['300','400','500']})
const dancing= Dancing_Script({subsets:['latin']})

const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})
const rubik=Rubik({subsets:['latin'],weight:['300','400','500','600','700','800']})
const jost=Jost({subsets:['latin'],weight:['300','400','500','600','700','800']})


interface InfoNutricional{
  percentual:string;
  propriedade:string;
   quantidade:string;
}

const tablelaNutriconal:InfoNutricional[]=[
  {percentual:"11%",propriedade:"Valor Energético",quantidade:"216 = 907kj"},
  {percentual:"0%",propriedade:"Carboidratos",quantidade:"0g"},
  {percentual:"24%",propriedade:"Proteínas",quantidade:" = 18g"},
  {percentual:"29%",propriedade:"Gorduras Totais",quantidade:" = 16g"},
  {percentual:"0%",propriedade:"Gorduras Trans",quantidade:"..."},
  {percentual:"4.8g",propriedade:"Gorduras Saturadas",quantidade:"22g"},
  {percentual:"0%",propriedade:"Fibra Alimentar",quantidade:"0g"},
  {percentual:"3%",propriedade:"Sódio",quantidade:"61g"},
]


function page() {
  const MapWithNoSSR = dynamic(() => import("@/components/Mapa"), {
    ssr: false
  });
  return (
    <main>
        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2"}} additionalClasses={[" sm:grid-cols-1 md:grid-cols-2  grid  align-center items-center justify-between  mt-20"]}>
            {/* ESQUERDA */}
            <div className="left-side lg:px-10 px-6 py-8">
                <button style={rubik.style} className=" my-6 uppercase bg-[#E0AA2C] hover:bg-[#e0aa2cce] text-white rounded-[8px] text-sm px-4 py-2 ">onde comprar</button>

                <h3 style={rubik.style} className='mb-6 font-bold text-2xl md:text-3xl lg:text-4xl md:max-w-md lg:max-w-lg md:leading-[40px] lg:leading-[60px] '>Conheça os nossos parceiros e compre o seu corte nobre</h3>
              <p style={poppins.style} className="md:max-w-lg lg:max-w-full text-justify text-[#1D181E] text-md">
              Nossas soluções vão ao encontro dos nossos clientes levando qualidade, praticidade, confiança e segurança. Ao incorporamos agilidade, empatia e modernização em nossa rotina de trabalho, podemos ampliar o alcance das nossas soluções melhorando a experiência das pessoas com relação ao consumo de produtos de origem animal. A interação com nossos parceiros propicia um ambiente moderno ao agro, trazendo cooperação, inovação, resolutividade e transferência de tecnologia.

              </p>
            </div>

            {/* DIREITA */}
            <div className="hero-img-container  max-h-[600px] w-full h-full lg:px-20 ">
              <Image src="/assets/images/ondecomprar-hero.png" className='w-full h-full object-fit' alt="hero imge" width={573} height={676} />
            </div>
        </GridRow>

        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2"}} additionalClasses={["grid grid-cols-1 md:grid-cols-2 items-center align-center justify-left my-20 "]}>
            <div className='  px-8'>
             
                <h3 style={rubik.style} className='mb-2 text-left text-xl lg:text-2xl  leading-8'>INFORMAÇÃO NUTRICIONAL
                 </h3>
                 <p className="lg:text-2xl">
                 Porção de 100g. Quantidade por porção %VD(*)
                 </p>

            </div>
        </GridRow>

       

        <GridRow options={{sm:"grid-cols-2",md:"grid-cols-4", lg:"grid-cols-5"}} additionalClasses={["px-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-6 mt-20"]}>
        {/* criar cartao depois */}

        {
          tablelaNutriconal.map((item,i) => (
        <div key={i} className="adress-card border rounded-2xl py-4 px-2 border-[#1D181E] shadow-md md:text-md lg:text-lg" style={poppins.style}>
            <p className="percentual font-semibold">{item.percentual}</p>
            <p className="propriedade"> {item.propriedade}  </p>
             <span className="divider inline-block w-[100%]  bg-[#1D181E] h-[1px]" ></span>
             <p className="quantidade font-semibold">{item.quantidade}</p>
        </div>

          ))
        }  
        </GridRow>

        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2"}} additionalClasses={[" px-10 gap-10 xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  grid  align-center items-center   mt-20"]}>
        {/* criar cartao depois */}

    
        <div className="adress-card  md:text-md lg:text-lg flex justify-center align-center items-center flex-col  py-2" style={poppins.style}>
           <div className="loja w-full mb-4 h-[90px]">
           <Image src="/assets/images/extrabom.png" className='w-full h-full object-contain ' alt="hero image" width={1000} height={1000} />
           </div>
           <button style={jost.style} className="align-self-center  mx-auto rounded-full px-8 py-2 bg-[#E0AA2C] hover:bg-[#e0aa2ce9] text-white  text-lg">Comprar</button>
        </div>
        <div className="adress-card  md:text-md lg:text-lg flex justify-center align-center items-center flex-col  py-2" style={poppins.style}>
           <div className="loja w-full mb-4 h-[90px]">
           <Image src="/assets/images/carrefur.png" className='w-full h-full object-contain ' alt="hero image" width={1000} height={1000} />
           </div>
           <button style={jost.style} className="align-self-center  mx-auto rounded-full px-8 py-2 bg-[#E0AA2C] hover:bg-[#e0aa2ce9] text-white  text-lg">Comprar</button>
        </div>

       
        
        </GridRow>


        {/* MAPA */}
        <GridRow options={{sm:"grid-cols-1"}} additionalClasses={[" h-full my-12 px-4"]}> 
        <div className="mapa   w-full h-full max-h-[300px] my-8">
        
          <MapWithNoSSR/>
        
        
        </div>
        </GridRow>

    </main>
  )
}

export default page