'use client'
import { burger, card2, card3, chefe, post, post2, post3, post4, receitaHero } from "../../../public/assets/images";
import Image from "next/image";
import { badge } from "../../../public/assets/images";
import { dcorteLogoBranca, instagram, play, timer } from "../../../public/assets/svgs";

export default function Receitas() {
  return (<><section className="w-full h-full">
  {/* <div className="w-full h-[5vw] px-40 justify-between bg-[#110E12] flex-row flex pt-2 ">
    <Image alt="logo" className=' w-28 h-[4vw] flex align-middle justify-start' style={{alignItems:'center'}} src={dcorteLogoBranca}/>
    <p className="text-white font-poppins text-[1vw] w-18 flex" style={{alignItems:'center'}}>Nossas marcas</p>
    <p className="text-white font-poppins text-[1vw] w-16  flex align-middle" style={{alignItems:'center'}}>Sobre nós</p>
    <p className="text-white font-poppins text-[1vw] w-16 flex" style={{alignItems:'center'}} >Produtos</p>
    <p className="text-white font-poppins text-[1vw] w-16 flex" style={{alignItems:'center'}}>Receitas</p>
    <Image alt="instagram" className=' w-4 flex align-middle justify-center' style={{alignItems:'center'}} src={instagram}/>

  </div> */}
      
  <div className="w-full h-[50vw] bg-[#110E12] flex justify-center" >
    <div className="w-[90%] mt-6 flex justify-center">
      <div className="w-[50%] rounded-tl-[4vw] rounded-bl-[4vw] bg-[#E7FAFE] h-[40vw]" >
        <div className="pl-5 pt-5 w-[95%] mt-20">
          <h1 className="text-[4vw] font-inter font-semibold ">Delicioso Frango Apimentado</h1>
          <h1 className="text-[1vw] opacity-60 font-inter">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </h1>
        </div>
      </div>
      <Image alt ="receita" className="w-[50%] h-[40vw]" src={receitaHero}></Image>
      <Image alt="badge" className="absolute w-[10%] mt-[3vw]" src={badge}></Image>
    </div>
    <button className="w-[15vw] h-[4vw] font-inter absolute -ml-[25vw] mt-[35vw] bg-black flex justify-center align-super rounded-[1.3vw] text-[1.5vw]  text-white" style={{alignItems:'center'}}>Ver Receita <><Image alt="play" className="ml-2 w-4" src={play}></Image></></button>
  </div>

  <div className="w-full h-[190vw] px-20 bg-gradient-to-t from-[#E7F9FD] to-white mt-10">
    <div className="w-full flex-col align-middle h-[75vw]">
      <p className="font-poppins font-semibold text-2xl mb-7 ml-4" >Receitas</p>
      <div className="w-[100%] h-[50vw] grid grid-cols-3 gap-6 -gap-y-60">

      <div className= "bg-gradient-to-t from-[#E7F9FD] to-white h-80 w-[100%] rounded-[2vw] flex justify-center">
        <div> 
          <Image alt="buger" className="w-64 h-44 object-cover rounded-[2vw]" src={burger}/>
          <p className="font-inter font-semibold mt-5">Cheeseburger</p>
          <div className="flex mt-12">
          <Image alt="timer" src={timer} className="w-4"/>
          <p className="text-black font-inter text-[1vw] ml-1">30 minutos</p>
          </div>
        </div>
      </div>

      <div className= "bg-gradient-to-t from-[#E7F9FD] to-white h-80 w-[100%] rounded-[2vw] flex justify-center">
        <div> 
          <Image alt="buger" className="w-64 h-44 object-cover rounded-[2vw]" src={card2}/>
          <p className="font-inter font-semibold mt-5">Croquete de carne 
com molho</p>
          <div className="flex mt-12">
          <Image alt="timer" src={timer} className="w-4"/>
          <p className="text-black font-inter text-[1vw] ml-1">30 minutos</p>
          </div>
        </div>
      </div>

      <div className= "bg-gradient-to-t from-[#E7F9FD] to-white h-80 w-[100%] rounded-[2vw] flex justify-center">
        <div> 
          <Image alt="buger" className="w-64 h-44 object-cover rounded-[2vw]" src={card3}/>
          <p className="font-inter font-semibold mt-5">Carré de Cordeiro</p>
          <div className="flex mt-12">
          <Image alt="timer" src={timer} className="w-4"/>
          <p className="text-black font-inter text-[1vw] ml-1">30 minutos</p>
          </div>
        </div>
      </div>

 
      <div className= "bg-gradient-to-t from-[#E7F9FD] to-white h-80 w-[100%] rounded-[2vw] flex justify-center">
        <div> 
          <Image alt="buger" className="w-64 h-44 object-cover rounded-[2vw]" src={burger}/>
          <p className="font-inter font-semibold mt-5">Cheeseburger</p>
          <div className="flex mt-12">
          <Image alt="timer" src={timer} className="w-4"/>
          <p className="text-black font-inter text-[1vw] ml-1">30 minutos</p>
          </div>
        </div>
      </div>

      <div className= "bg-gradient-to-t from-[#E7F9FD] to-white h-80 w-[100%] rounded-[2vw] flex justify-center">
        <div> 
          <Image alt="buger" className="w-64 h-44 object-cover rounded-[2vw]" src={card2}/>
          <p className="font-inter font-semibold mt-5">Croquete de carne com molho</p>
          <div className="flex mt-12">
          <Image alt="timer" src={timer} className="w-4"/>
          <p className="text-black font-inter text-[1vw] ml-1">30 minutos</p>
          </div>
        </div>
      </div>

      <div className= "bg-gradient-to-t from-[#E7F9FD] to-white h-80 w-[100%] rounded-[2vw] flex justify-center">
        <div> 
          <Image alt="buger" className="w-64 h-44 object-cover rounded-[2vw]" src={card3}/>
          <p className="font-inter font-semibold mt-5">Carré de Cordeiro</p>
          <div className="flex mt-12">
          <Image alt="timer" src={timer} className="w-4"/>
          <p className="text-black font-inter text-[1vw] ml-1">30 minutos</p>
          </div>
        </div>
      </div>

      </div>
    </div>
  
    <div className="w-[100%] h-[50vw] flex">
      <div className="w-[50%] mt-20">
        <p className="font-inter text-[4vw] font-semibold ">Todo Mundo Pode 
  Ser um Chefe de Cozinha</p>
        <p className="font-inter text-[1.3vw] font-light ">Cozinhe em casa para desenvolver as suas habilidades. Escolha algumas receitas.</p>
      </div>
      <div className="w-[50%]">
      <Image alt="chefe" className="w-[100%]" src={chefe}/>
      </div>
      <button className="w-[15vw] h-[4vw] mt-96 font-inter absolute bg-black flex justify-center align-super rounded-[1.3vw] text-[1.5vw]  text-white" style={{alignItems:'center'}}><Image alt="play" className="ml-2 w-24" src={dcorteLogoBranca}></Image></button>
    </div>
    
    <div className="flex-col justify-center">
      <p className="font-rubik flex justify-center text-4xl font-semibold">Siga @dcorthes.carnesnobres no Instagram</p>
      <div className="flex justify-center w-full">
      <p className="font-inter text-sm flex justify-center w-[70%] text-center font-light">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>

      </div>
      <div className="grid mt-20 grid-cols-4 gap-12 w-full">
        <Image alt="post"  src={post}/>
        <Image alt="post"  src={post2}/>
        <Image alt="post"  src={post3}/>
        <Image alt="post"  src={post4}/>
      </div>
      <div className="w-full flex justify-center mt-10">
      <button className="w-[15vw] h-[4vw] font-inter absolute  bg-black flex justify-center align-super rounded-[1.3vw] text-[1vw]  text-white" style={{alignItems:'center'}}>Visite Nosso Instagram<><Image alt="play" className="ml-2 w-4" src={instagram}></Image></></button>

      </div>

    </div>
   
  </div>

</section></>)
}