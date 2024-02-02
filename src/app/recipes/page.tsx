import Reservas from "@/components/Reservas";
import {
  Hero,
  Destaques,
  PorqueNos,
  CustomerReview,
  SectionDivider,
  Carousel,
  Learn,
  Cadastro,
  Receitas,
} from "../../components";
import { costumers } from "@/other/constants";
import HeroLeft from "@/components/Heroes/Hero/HeroLeft";
import HeroRight from "@/components/Heroes/Hero/HeroRight";
import Drep from "@/components/Drep";
import CarouselReceitas from "@/components/CarosselReceitas";
import Recipe from "@/components/Recipe";
import { Fragment } from "react";
import GridRow from "@/components/Row";
import { Dancing_Script,Inter,Jost,Lobster_Two, Poppins, Rubik } from "next/font/google";
import CustomSelect from "@/components/Select";
import ListFilterable from "@/components/ListFilterable";
import Image from "next/image";
import Link from "next/link";
import InstagramPost from "@/components/InstagramPost";
import { ButtonInstagram } from "@/components/Buttons";
const poppins=Poppins({subsets:['latin'],weight:['400','500'],style:['italic','normal']})
const dancing= Dancing_Script({subsets:['latin']})
const jost= Jost({subsets:['latin']})
const inter= Inter({subsets:['latin'],weight:["500","600","700"]})
const rubik= Rubik({subsets:['latin'],weight:["500","600","700"]})

const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})


const options = [
  { value: 'preco', label: 'preço' },
  { value: 'tamanho', label: 'tamanho' },
  { value: 'estabelecimento', label: 'estabelecimento' },
];

import { instagramPosts } from "@/other/constants";





interface Receita{
  id:string;
  fav:boolean;
  img:string;
  titulo:string;
  avaliacoes?:number;
  description?:string;
  tempo:string;
}
const receitas:Receita[]=[
  {id:'1',avaliacoes:5,tempo:"30 min", fav:true, img:"/assets/images/burger.png",titulo:"Paleta Especial"},
  {id:'2',avaliacoes:5,tempo:"30 min", fav:false, img:"/assets/images/card2.png",titulo:"Paleta Especial"},
  {id:'3',avaliacoes:5,tempo:"30 min", fav:true, img:"/assets/images/card3.png",titulo:"Paleta Especial"},
  {id:'4',avaliacoes:5,tempo:"30 min", fav:true, img:"/assets/images/card1.png",titulo:"Paleta Especial"}
 

]

const normalProdsClsses=["mx-auto" , "grid","min-h-[400px]","gap-4", "grid-cols-1" ,"sm:grid-cols-2","md:px-[20px]", "md:grid-cols-3", "lg:grid-cols-4", "my-20"]

const mostrarReceitas=(item:Receita)=>{
return( 
<div className=" w-full  bg-[#E7F9FD] rounded-xl p-2 min-h-[380px] ">
  {/* CAPA */}
 <div className="full-img-box  h-[170px]  border overflow-hidden  relative">
   <div className="absolute top-6 right-6 ">
    {
      item.fav? 
      <span className="fav ">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="white"/>
        <g filter="url(#filter0_d_261_2746)">
        <path d="M28.502 15C27.6288 14.9985 26.7674 15.2008 25.9862 15.5907C25.205 15.9807 24.5256 16.5475 24.002 17.2462C23.2928 16.3027 22.3049 15.606 21.178 15.2548C20.0511 14.9036 18.8423 14.9157 17.7227 15.2894C16.603 15.663 15.6292 16.3793 14.9391 17.3368C14.2489 18.2943 13.8774 19.4447 13.877 20.625C13.877 27.3621 23.237 32.6813 23.6355 32.9044C23.7474 32.9671 23.8736 33 24.002 33C24.1303 33 24.2565 32.9671 24.3684 32.9044C26.0899 31.8961 27.7056 30.7173 29.1912 29.3856C32.4663 26.438 34.127 23.4905 34.127 20.625C34.1253 19.1337 33.5321 17.7039 32.4776 16.6494C31.423 15.5949 29.9933 15.0017 28.502 15Z" fill="#FF6363"/>
        </g>
        <defs>
        <filter id="filter0_d_261_2746" x="3.87695" y="10" width="40.25" height="38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="5"/>
        <feGaussianBlur stdDeviation="5"/>
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.388235 0 0 0 0 0.388235 0 0 0 0.2 0"/>
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_261_2746"/>
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_261_2746" result="shape"/>
        </filter>
        </defs>
        </svg>

      </span>
      :
      <span className="unfav">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="24" fill="white"/>
      <path d="M28.502 15C27.6288 14.9985 26.7674 15.2008 25.9862 15.5907C25.205 15.9807 24.5256 16.5475 24.002 17.2462C23.2928 16.3027 22.3049 15.606 21.178 15.2548C20.0511 14.9036 18.8423 14.9157 17.7227 15.2894C16.603 15.663 15.6292 16.3793 14.9391 17.3368C14.2489 18.2943 13.8774 19.4447 13.877 20.625C13.877 27.3621 23.237 32.6813 23.6355 32.9044C23.7474 32.9671 23.8736 33 24.002 33C24.1303 33 24.2565 32.9671 24.3684 32.9044C26.0899 31.8961 27.7056 30.7173 29.1912 29.3856C32.4663 26.438 34.127 23.4905 34.127 20.625C34.1253 19.1337 33.5321 17.7039 32.4776 16.6494C31.423 15.5949 29.9933 15.0017 28.502 15Z" fill="#DBE2E5"/>
      </svg>
      </span>
    }</div>
  
  <Image className=" object-cover  block w-full h-full rounded-xl" src={item.img} width={350} height={300} alt="" />
 </div>
 {/* CONTEUDO */}
 <div className="conteudo px-3 py-4">
  <h3 style={inter.style} className="font-bold text-lg md:text-xl">{item.titulo}</h3>

  <div className="tempo-section mt-8">
    <div className="timer-wigit flex gap-3   lg:mt-20">
      <span>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.75 1.5H14.25C14.4489 1.5 14.6397 1.42098 14.7803 1.28033C14.921 1.13968 15 0.948912 15 0.75C15 0.551088 14.921 0.360322 14.7803 0.21967C14.6397 0.0790176 14.4489 0 14.25 0L9.75 0C9.55109 0 9.36032 0.0790176 9.21967 0.21967C9.07902 0.360322 9 0.551088 9 0.75C9 0.948912 9.07902 1.13968 9.21967 1.28033C9.36032 1.42098 9.55109 1.5 9.75 1.5Z" fill="black"/>
      <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9973 9.61388 20.0482 7.32626 18.361 5.63902C16.6737 3.95178 14.3861 3.0027 12 3ZM16.2426 8.81799L12.5304 12.5303C12.4607 12.6 12.378 12.6552 12.2871 12.6929C12.1961 12.7306 12.0985 12.75 12 12.75C11.9015 12.75 11.804 12.7306 11.713 12.6929C11.622 12.6553 11.5393 12.6 11.4697 12.5304C11.4 12.4607 11.3448 12.378 11.3071 12.2871C11.2694 12.1961 11.25 12.0985 11.25 12C11.25 11.9015 11.2694 11.804 11.3071 11.713C11.3448 11.622 11.4 11.5393 11.4696 11.4697L15.182 7.75736C15.2516 7.68771 15.3343 7.63246 15.4253 7.59477C15.5163 7.55708 15.6138 7.53767 15.7123 7.53767C15.8108 7.53767 15.9083 7.55707 15.9993 7.59476C16.0903 7.63244 16.173 7.68769 16.2426 7.75733C16.3123 7.82697 16.3675 7.90965 16.4052 8.00065C16.4429 8.09164 16.4623 8.18916 16.4623 8.28766C16.4623 8.38615 16.4429 8.48368 16.4052 8.57467C16.3675 8.66567 16.3123 8.74835 16.2427 8.81799H16.2426Z" fill="black"/>
      </svg>
      </span>
      <span style={inter.style} className="text-lg font-light" >{item.tempo}</span>
    </div>
  </div>
 </div>
</div>
);
}

/**
 * 
 * Págnina de Receitas
 */
export default function Recipes() {
  return (
    <>
      <main className="">
        <CarouselReceitas > 
        <Recipe img="/assets/images/receita-01.png"></Recipe> 
        <Recipe img="/assets/images/receita-02.png"></Recipe> 
        <Recipe img="/assets/images/receita-01.png"></Recipe> 
        </CarouselReceitas>
        
        <GridRow options={{sm:"grid-cols-2"}} additionalClasses={["grid grid-cols-2 align-center items-center justify-between  px-20 mt-20"]}>
          <h2 style={poppins.style} className="font-w-[600] text-xl md:text-[36px]">Receitas</h2>

          <div className=" md:ml-auto">
          <CustomSelect options={options} label="Filtro" />
          </div>
          
        </GridRow>
       
        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2",lg:"grid-cols-3"}} additionalClasses={normalProdsClsses}>
         <ListFilterable 
         keyExtractor={({id})=>id}
         items={receitas} 
         renderItem={mostrarReceitas}
         />
        </GridRow>

        <GridRow options={{sm:"grid-cols-1",lg:"grid-cols-2"}} additionalClasses={["grid grid-cols-2 align-center items-center justify-between  my-10"]}>
          
          <div className="text-box  h-full flex justify-center text-center flex-col px-14">
          <h2 style={poppins.style} className="mb-8 font-w-[600] md:text-xl lg:text-2xl md:text-[36px] mr-auto max-w-lg leading-[30px] lg:leading-[45px] text-left">Todo Mundo Pode 
          Ser um Chefe de Cozinha</h2>  
          <p className="text-base max-w-md text-left">Cozinhe em casa para desenvolver as suas habilidades. Escolha algumas receitas.</p>
                <Link href=""  className="block  mt-8 lg:mt-[120px]   w-[180px] lg:w-[250px] h-[60px]  ">
                  
             <Image src="/assets/images/button.png" width={200} height={80} alt="garçom feliz" className="block w-full object-cover] "/>
                  
                </Link>
          </div>

           <div className="img-box bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD]  h-full w-full">
             <Image src="/assets/images/gacom-feliz.png" width={800} height={800} alt="garçom feliz" className="block h-full w-full object-cover "/>
           </div>

        </GridRow>
        <section className="bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD] pb-8">
            <GridRow options={{sm:"grid-cols-1 "}} 
            additionalClasses={["grid grid-cols-1 text-center align-center items-center justify-center  py-8 "]}>
              <div className="text-box py-8 mx-auto  px-4">
                <h3 style={rubik.style} className="text-xl mb-4  font-bold">Siga @dcorthes.carnesnobres no Instagram</h3>
                <p className="max-w-xl">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
              </div>

          </GridRow>

          <GridRow options={{sm:"grid-cols-2",md:"grid-cols-3",lg:"grid-cols-4",xl:"grid-cols-5"}} 
          additionalClasses={["px-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  justify-center align-center items-center w-full "]}>
  
         
            {
              instagramPosts.length > 0 && instagramPosts.map((item,index)=>{
                return(
                  <InstagramPost img={item.img} key={index} />
                )
              })
            }
            </GridRow>    
            <GridRow options={{sm:"grid-cols-1"}} 
            additionalClasses={["my-6 px-6 xs:grid-cols-1  justify-center align-center items-center w-full "]}>

           {/* botao instagram */}
           <ButtonInstagram label="Visite nosso Site"/>

              </GridRow>
        </section>
       
      </main>
    </>
  );
}
