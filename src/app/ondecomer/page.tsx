import React from 'react'

import { Dancing_Script,Lobster_Two,Rubik, Poppins } from "next/font/google";
import GridRow from '@/components/Row';
import Image from 'next/image';
import Link from 'next/link';
import Mapa from '@/components/Mapa';
import dynamic from "next/dynamic";

const poppins=Poppins({subsets:['latin'],weight:['300','400','500']})
const dancing= Dancing_Script({subsets:['latin']})

const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})
const rubik=Rubik({subsets:['latin'],weight:['300','400','500','600','700','800']})


function page() {
  const MapWithNoSSR = dynamic(() => import("@/components/Mapa"), {
    ssr: false
  });
  return (
    <main>
        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2 "}} additionalClasses={[" sm:grid-cols-1 md:grid-cols-2  grid  align-center items-center justify-between  mt-20"]}>
            {/* ESQUERDA */}
            <div className="left-side lg:px-10 px-6 py-8">
                <Link href="/ondecomer" style={rubik.style} className=" my-6 uppercase bg-[#E0AA2C] hover:bg-[#e0aa2cce] text-white rounded-[8px] text-sm px-4 py-2 ">onde comer</Link>

                <h3 style={rubik.style} className='mb-6 font-bold text-2xl md:text-3xl lg:text-4xl md:max-w-md lg:max-w-lg md:leading-[40px] lg:leading-[60px] '>Experimente pratos com os nossos cortes nobres</h3>
              <p style={poppins.style} className="md:max-w-lg lg:max-w-full text-justify text-[#1D181E] text-md">
              Nossas soluções vão ao encontro dos nossos clientes levando qualidade, praticidade, confiança e segurança. Ao incorporamos agilidade, empatia e modernização em nossa rotina de trabalho, podemos ampliar o alcance das nossas soluções melhorando a experiência das pessoas com relação ao consumo de produtos de origem animal. A interação com nossos parceiros propicia um ambiente moderno ao agro, trazendo cooperação, inovação, resolutividade e transferência de tecnologia.
              </p>
            </div>

            {/* DIREITA */}
            <div className="hero-img-container  max-h-[600px] w-full h-full lg:px-20 ">
              <Image src="/assets/images/ondecomer-hero.png" className='w-full h-full object-fit' alt="hero imge" width={573} height={676} />
            </div>
        </GridRow>

        <GridRow options={{sm:"grid-cols-1"}} additionalClasses={["flex flex-col items-center align-center justify-center my-20"]}>
            <div className='  '>
                <div className='mb-4 flex justify-center align-center'>
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.0002 40.0001C41.8335 40.0001 43.4029 39.3473 44.7085 38.0417C46.0141 36.7362 46.6668 35.1667 46.6668 33.3334C46.6668 31.5001 46.0141 29.9306 44.7085 28.6251C43.4029 27.3195 41.8335 26.6667 40.0002 26.6667C38.1668 26.6667 36.5974 27.3195 35.2918 28.6251C33.9863 29.9306 33.3335 31.5001 33.3335 33.3334C33.3335 35.1667 33.9863 36.7362 35.2918 38.0417C36.5974 39.3473 38.1668 40.0001 40.0002 40.0001ZM40.0002 64.5001C46.7779 58.2779 51.8057 52.6251 55.0835 47.5417C58.3613 42.4584 60.0002 37.9445 60.0002 34.0001C60.0002 27.9445 58.0696 22.9862 54.2085 19.1251C50.3474 15.264 45.6113 13.3334 40.0002 13.3334C34.3891 13.3334 29.6529 15.264 25.7918 19.1251C21.9307 22.9862 20.0002 27.9445 20.0002 34.0001C20.0002 37.9445 21.6391 42.4584 24.9168 47.5417C28.1946 52.6251 33.2224 58.2779 40.0002 64.5001ZM40.0002 73.3334C31.0557 65.7223 24.3752 58.6529 19.9585 52.1251C15.5418 45.5973 13.3335 39.5556 13.3335 34.0001C13.3335 25.6667 16.0141 19.0279 21.3752 14.0834C26.7363 9.13897 32.9446 6.66675 40.0002 6.66675C47.0557 6.66675 53.2641 9.13897 58.6252 14.0834C63.9863 19.0279 66.6668 25.6667 66.6668 34.0001C66.6668 39.5556 64.4585 45.5973 60.0418 52.1251C55.6252 58.6529 48.9446 65.7223 40.0002 73.3334Z" fill="black"/>
                </svg>
                </div>
                <h3 style={rubik.style} className=' text-center xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-10'>Navegue pela lista e descubra o
                <span className='text-[#E0AA2C]'> <br/> Restaurante mais perto de você</span> </h3>

            </div>
        </GridRow>

        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2"}} additionalClasses={[" px-10 gap-10 xs:grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  grid  align-center items-center justify-between  mt-20"]}>
        {/* criar cartao depois */}

        <div className="adress-card border border-[#1D181E] p-2 md:text-md lg:text-lg" style={poppins.style}>
            <p className="nome">Fogo Camperiro</p>
            <p className="endereco">R. Anfrísio Lobão, 387 - Jóquei, Teresina- PI, 64049 | 0000 0000</p>
            <p className="horario">Abre Às 11 Horas</p>
             <p className="tipo">Churrascaria</p>
        </div>
        <div className="adress-card border border-[#1D181E] p-2 md:text-md lg:text-lg" style={poppins.style}>
            <p className="nome">Fogo Camperiro</p>
            <p className="endereco">R. Anfrísio Lobão, 387 - Jóquei, Teresina- PI, 64049 | 0000 0000</p>
            <p className="horario">Abre Às 11 Horas</p>
             <p className="tipo">Churrascaria</p>
        </div>
        
        </GridRow>
        {/* MAPA */}
        <GridRow options={{sm:"grid-cols-1"}} additionalClasses={[" h-full my-12 px-4"]}> 
        <div className="w-full h-full max-h-[200px] mb-[20vw]">
          
        <MapWithNoSSR/> 
        

        </div>
        </GridRow>

    </main>
  )
}

export default page