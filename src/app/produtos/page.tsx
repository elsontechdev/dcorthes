"use client"
import React from 'react'
import { Produto } from "@/other/constants";
import Hero2 from "@/components/Heroes/Hero2/Hero2";
import ListFilterable from "@/components/ListFilterable";
import Image from "next/image";

import ListSimple from "@/components/ListSimple";
import GridRow from '@/components/Row';
import CustomSelect from '@/components/Select';
import Badge from '@/components/Badge';
import { Dancing_Script,Jost,Lobster_Two, Poppins } from "next/font/google";
import { Cadastro } from '@/components';
import { ButtonPill } from '@/components/Buttons/ButtonPill/ButtonPill';
const poppins=Poppins({subsets:['latin'],weight:['400','500'],style:['italic','normal']})
const dancing= Dancing_Script({subsets:['latin']})
const jost= Jost({subsets:['latin']})
const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})






const products:Produto[]=[
  {id:'1',avaliacoes:5, fav:true, img:"/assets/images/produtos/p1.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'2',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'3',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'4',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'4',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'4',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'4',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'4',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'4',avaliacoes:4, fav:false,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},
  {id:'4',avaliacoes:4, fav:true,img:"/assets/images/produtos/p2.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/ondecomer"},cta2:{rotulo:"Onde Comprar",url:"/ondecomprar"}},

]






/**
 * Essa função é especializa em mostrar Produto, passe ela pra lista Filtrável
 * @param item 
 * @returns 
 */
function mostrar(item:Produto):React.ReactNode{
  return(
   <div className=" max-w-[270px] mx-auto ">

     <div className="img-box w-full h-[299px] bg-[#1d181e] rounded-[35px] grid items-center justify-center">
     <Image className="" src={item.img} width={200} height={200} alt={item.id} />
     </div>

     <div className="content  flex flex-col  justify-center items-center text-center p-2">
     <h2 className="cursor-pointer mb-1 italic leading-8 text-xs font-thiner text-dcortes-primary uppercase tracking-wide" style={poppins.style}>{item.tabela}</h2>
     <h3 style={poppins.style} className="mb-1 text-xl font-[600] text-[#333]">{item.titulo}</h3>
     <p className=" text-[12px] leading-5 text-[#656D89]">Flowbase is the largest webflow resource site, with. Flowbase is the </p>

     </div>
     <div className="btn-group p-2 flex justify-between mb-8">
      <ButtonPill destination='/ondecomer' variant="filled" >{item.cta1.rotulo}</ButtonPill>
      <ButtonPill destination='/ondecomprar' variant="ghost" >{item.cta2.rotulo}</ButtonPill>
      {/* <button style={jost.style} className="font-[14px] bg-dcortes-primary px-1 rounded-xl text-white"></button> */}
      {/* <button style={jost.style} className="font-[14px] border-2 border-dcortes-primary px-1 rounded-xl ">{item.cta2.rotulo}</button> */}
     </div>
   </div>
  )
 }


function mostrarDestaques(item:Produto):React.ReactNode{
  return(
   <div className=" w-full  mx-auto  grid grid-cols-2 max-w-[500px]">

     <div className="img-box w-full h-[270px] bg-[#1d181e] rounded-[35px] grid items-center justify-center relative py-12">

      <div className="review px-2 py-1 absolute top-5 left-5   bg-[#E0AA2C]  rounded-full cursor-pointer grid grid-cols-2 justify-center  items-center w-[70px]">
      <svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.189 4.51702L9.22179 3.94046L7.44835 0.345147C7.39991 0.24671 7.32023 0.167022 7.22179 0.118585C6.97491 -0.00329011 6.67491 0.0982724 6.55147 0.345147L4.77804 3.94046L0.810845 4.51702C0.70147 4.53265 0.60147 4.58421 0.524907 4.66233C0.432347 4.75747 0.381343 4.88546 0.383101 5.01818C0.384859 5.1509 0.439235 5.2775 0.534282 5.37015L3.4046 8.16858L2.72647 12.1201C2.71057 12.2121 2.72074 12.3066 2.75583 12.393C2.79093 12.4795 2.84954 12.5544 2.92502 12.6092C3.0005 12.664 3.08983 12.6966 3.18288 12.7032C3.27593 12.7098 3.36898 12.6903 3.45147 12.6467L6.99991 10.7811L10.5484 12.6467C10.6452 12.6983 10.7577 12.7155 10.8655 12.6967C11.1374 12.6498 11.3202 12.392 11.2734 12.1201L10.5952 8.16858L13.4655 5.37015C13.5437 5.29358 13.5952 5.19358 13.6109 5.08421C13.653 4.81077 13.4624 4.55765 13.189 4.51702Z" fill="white"/>
      </svg>
       <span style={jost.style} className=" text-sm inline-block  text-white">5.0</span>
      </div>

      <div className="heart absolute right-6 top-4 bg-[#EB0029] p-2 rounded-full cursor-pointer">
        <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.3666 2.8416C16.941 2.41577 16.4356 2.07797 15.8794 1.8475C15.3232 1.61704 14.727 1.49841 14.1249 1.49841C13.5229 1.49841 12.9267 1.61704 12.3705 1.8475C11.8143 2.07797 11.3089 2.41577 10.8833 2.8416L9.99994 3.72493L9.1166 2.8416C8.25686 1.98186 7.0908 1.49886 5.87494 1.49886C4.65908 1.49886 3.49301 1.98186 2.63327 2.8416C1.77353 3.70134 1.29053 4.86741 1.29053 6.08327C1.29053 7.29913 1.77353 8.46519 2.63327 9.32493L3.5166 10.2083L9.99994 16.6916L16.4833 10.2083L17.3666 9.32493C17.7924 8.8993 18.1302 8.39395 18.3607 7.83773C18.5912 7.28151 18.7098 6.68534 18.7098 6.08327C18.7098 5.48119 18.5912 4.88502 18.3607 4.3288C18.1302 3.77259 17.7924 3.26723 17.3666 2.8416V2.8416Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
      </div>
     <Image className="" src={item.img} width={200} height={200} alt={item.id} />
     </div>


      <div className="content px-2">

     <div className="content  flex flex-col  justify-center items-center text-center p-2">
     <h2 className="cursor-pointer  italic leading-8 text-xs font-thiner text-dcortes-primary uppercase tracking-wide" style={poppins.style}>{item.tabela}</h2>
     <h3 style={poppins.style} className="mb-1 text-md md:text-xl font-[600] text-[#333]">{item.titulo}</h3>
     <p className=" my-3 text-[12px] leading-5 text-[#656D89]">Flowbase is the largest webflow resource site, with. Flowbase is the </p>
     </div>

     <div className="btn-group   flex justify-center space-x-2 md:space-x-6 mb-8">
      <button style={jost.style} className="whitespace-nowrap text-[10px] md:text-[16px] bg-dcortes-primary px-1 rounded-xl text-white">{item.cta1.rotulo}</button>
      <button style={jost.style} className="whitespace-nowrap text-[10px] md:text-[16px] border-2 border-dcortes-primary px-1 rounded-xl ">{item.cta2.rotulo}</button>
     </div>

      </div>
   </div>
  )
 }











export default function Produtos() {


 const [produtos,setProdutos]=React.useState<Produto[]>(products)

  const [normalProds,setNormalProds]=React.useState<Produto[]>([])
  const [destaqueProds,setDestaqueProds]=React.useState<Produto[]>([])

 
 function separateProducts(){
    produtos.forEach((prod)=>{
      if(prod.fav===true){
        setDestaqueProds((prevDestaqProds)=>[...prevDestaqProds,{...prod}])
        }else{
          setNormalProds((prevNormalProds)=>[...prevNormalProds,{...prod}])
      }
    })

 }



 const options = [
  { value: 'preco', label: 'preço' },
  { value: 'tamanho', label: 'tamanho' },
  { value: 'estabelecimento', label: 'estabelecimento' },
];


  React.useEffect(()=>{
   separateProducts()
  }, []);


 const normalProdsClsses=["mx-auto" , "grid","min-h-[400px]","gap-4", "grid-cols-1" ,"sm:grid-cols-2","md:px-[20px]", "md:grid-cols-3", "lg:grid-cols-4", "my-20"]
 const destaqueProdsClsses=["grid justify-center grid-cols-1 lg:grid-cols-2 mx-auto gap-10 p-10 mb-20"]

 const heartIcon=(<svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
 <path d="M17.3666 2.8416C16.941 2.41577 16.4356 2.07797 15.8794 1.8475C15.3232 1.61704 14.727 1.49841 14.1249 1.49841C13.5229 1.49841 12.9267 1.61704 12.3705 1.8475C11.8143 2.07797 11.3089 2.41577 10.8833 2.8416L9.99994 3.72493L9.1166 2.8416C8.25686 1.98186 7.0908 1.49886 5.87494 1.49886C4.65908 1.49886 3.49301 1.98186 2.63327 2.8416C1.77353 3.70134 1.29053 4.86741 1.29053 6.08327C1.29053 7.29913 1.77353 8.46519 2.63327 9.32493L3.5166 10.2083L9.99994 16.6916L16.4833 10.2083L17.3666 9.32493C17.7924 8.8993 18.1302 8.39395 18.3607 7.83773C18.5912 7.28151 18.7098 6.68534 18.7098 6.08327C18.7098 5.48119 18.5912 4.88502 18.3607 4.3288C18.1302 3.77259 17.7924 3.26723 17.3666 2.8416V2.8416Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
 </svg>);


  return (
    <>
      <main className="">
       
         <Hero2/>

        <GridRow options={{sm:"grid-cols-2"}} additionalClasses={["grid grid-cols-2 align-center items-center justify-between  px-20 mt-20"]}>
          <h2 style={poppins.style} className="font-w-[600] text-xl md:text-[36px]">Produtos</h2>

          <div className="ml-auto ">
          <CustomSelect options={options} label="Filtro" />
          </div>
          
        </GridRow>
        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2",lg:"grid-cols-4",xl:"grid-cols-5"}} additionalClasses={normalProdsClsses}>
         <ListFilterable 
         keyExtractor={({id})=>id}
         items={normalProds} 
         renderItem={mostrar}
         />
        </GridRow>
       
    

       
{/* 
        <GridRow options={{sm:"grid-cols-2"}} additionalClasses={["grid grid-cols-2 align-center items-center justify-between  pl-20 my-20"]}>
          <h2 style={poppins.style} className="font-w-[600] text-xl md:text-[36px] mr-auto">Destaques</h2>  
        </GridRow>
        <GridRow options={{sm:"grid-cols-1",md:"grid-cols-2",lg:"grid-cols-4",xl:"grid-cols-5"}} additionalClasses={destaqueProdsClsses}>
         <ListFilterable 
         keyExtractor={({id})=>id}
         items={destaqueProds} 
         renderItem={mostrarDestaques}
         />
        </GridRow> */}


        <Cadastro/>  
      </main>
    </>
  );
}
