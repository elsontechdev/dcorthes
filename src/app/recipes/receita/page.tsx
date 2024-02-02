"use client"
import { ButtonInstagram } from '@/components/Buttons'
import HeroProduto from '@/components/Heroes/HeroProduto/HeroProduto'
import InstagramPost from '@/components/InstagramPost'
import RecipeBar from '@/components/RecipeBar'
import GridRow from '@/components/Row'
import { instagramPosts, outrasReceitas, receita } from '@/other/constants'
import { rubik } from '@/other/fonts'
import Image from 'next/image'
import React from 'react'




function Ingredientes({ingredientes,classes=" "}:{ingredientes:string[],classes?:string}){
 const [components,setComponents]=React.useState([...ingredientes])
  
  return(
    <div className={classes}>
  {
  components.length > 0 && components.map((item, i) => {
    const isNotLast = i < components.length - 1;
    const borderClasses = isNotLast ? "border-b-2 border-gray-100 not-last" : "";

    return (
      <div key={i} className={`py-4 md:py-5 xl:py-8 px-10 ${borderClasses}`}>
        <p className="text-2xl">{item}</p>
      </div>
    );
  }) 
}

    </div>
  )
}





function Sidebar({receitas}:{receitas:{img:string,hilite:boolean,title:string}[]}){
  return(
    <div className="col-span-12 md:col-span-3 ">
      <div  className="  flex flex-col gap-10 justify-around align-around md:mx-0 mx-4 ">
         {
            receitas.map((item:{img:string,hilite:boolean,title:string},i)=>(

                <div key={i} className=" flex gap-10 md:gap-3 lg:gap-4 w-[100%]">
                <Image alt="" src={item.img} width="600" height="800" className={`rounded-md ${item.hilite===true ? 'w-full':'w-[60%]'}`} />
                 {
                   !item.hilite && (
                     <div className=" w-full mt-4">{item.title}</div>
                   )
                 }
                </div>
                ))
              }
              </div>
    </div>
  )
}

function Preparo({etapas}:{etapas:string[]}){
  return(
    <ul className="grid gri-cols-2  mx-20 list-decimal text-black">
         {
            etapas.map((item:string,i)=>{
              const isNotLast = i < etapas.length - 1;
              const borderClasses = isNotLast ? "border-b-2 border-gray-100 not-last" : "";

              return(<div key={i} className={`py-4 md:py-5 xl:py-8 px-10 ${borderClasses}`}>
                <ol className=" cols-span-2 text-xl md:text-2x lg:text-3xl font-medium leading-9 text-left">{item}</ol>

              </div>)
            })}
    </ul>
  )
}


 function Instagram(){
  return(
    <div className="bg-gradient-to-b from-[#f4fcfe] to-[#e8f9fd] border border-gray-50">
    <GridRow options={{sm:"grid-cols-1 "}} 
      additionalClasses={["grid grid-cols-1 text-center align-center items-center justify-center  py-8 "]}>
        <div className="text-box py-8 mx-auto  text-center px-4">
        <h3 style={rubik.style} className=" text-2xl lg:text-4xl font-medium text-center">Siga @dcorthes.carnesnobres no Instagram</h3>
        <p className=" py-5 text-center max-w-2xl">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
      </div>

      </GridRow>
      <GridRow options={{sm:"  grid-cols-2",md:"grid-cols-3",lg:"grid-cols-4",xl:"grid-cols-5"}} 
      additionalClasses={[" my-10 px-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  justify-center align-center items-center w-full "]}>
        {
          instagramPosts.length > 0 && instagramPosts.map((item,index)=>{
            return(
              <InstagramPost img={item.img} key={index} />
            )
          })
        }
      </GridRow>  
        <div className="flex justify-center my-20">
        <ButtonInstagram  label="Visite nosso Site"/>
        </div>
  </div>
  )
}











function Receita() {
  return (
    <>
    <main>
    <RecipeBar></RecipeBar>
    <HeroProduto/>
      <h5 className="text-3xl mt-8 font-semibold text-left ml-12">Ingredientes</h5>
    <div className="grid grid-cols-12 my-5">
     <Ingredientes classes="mx-4 md:mx-8 col-span-12 md:col-span-8 my-12" ingredientes={receita.indedientes}></Ingredientes>
      <Sidebar receitas={outrasReceitas} />
    </div>
      <h5 className="text-3xl mt-8 font-semibold text-left ml-12">Modo de Preparo</h5>
    <Preparo etapas={receita.modoPreparo} />
     <Instagram/>
    </main>
    </>
  )
}

export default Receita