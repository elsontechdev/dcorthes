"use client"
import { poppins } from '@/other/fonts';
import Image from 'next/image';
import React from 'react'

interface Item{
  title:string;
  content:string;
  isOpen?:boolean;
}
interface Prop{
  list:Item[]
}



function AccordianItem({title,content}:Item){
  
  const [isOpen,setIsOpen]=React.useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return(

    <div className=" mb-2">
    
          <div onClick={handleToggle} className={`z-999 bg-[#fff] text-black p-4 flex justify-between ${isOpen ?'border-red border ' :''}`}>
            <div  className='cursor-pointer select-none'>{title}</div>
            <button className="flex items-center space-x-2">
              <Image
                className={` select-none transition-transform  duration-100 ease-in-out transform ${isOpen ? '-rotate-90 transition-transform' : 'rotate-0 transition-transform'}`}
                alt="seta"
                width={10}
                height={10}
                src="/assets/svgs/seta-baixo.svg"
              />
            </button>
          </div>
          <div className={`bg-[#fff] select-none border-t-1 px-3 flex items-center border-b  transition-height duration-200 ease-in-out ${isOpen ? 'h-[70px] overflow-visible' : 'h-0 overflow-hidden '}`}>
            <p className="text-black">{content}</p>
          </div>
  
    
    </div>
  )
  
}

function Accordian({list}:Prop) {

 
 
  const [lista,setLista]=React.useState(list.map((item)=> ({isOpen:false,...item})))

  return (

<section style={poppins.style} className="gradient1  py-20 text-white p-8 ">

  <div className="title max-w-5xl mx-auto  mb-6">
    <h3 style={poppins.style} className="uppercase text-[40px] font-semibold leading-[60px] tracking-normal text-center mb-4">perguntas frequentes</h3>
  <p className="text-[18px]  leading-[30px] font-bolder tracking-normal text-center">Nossas soluções vão ao encontro dos nossos clientes levando qualidade, praticidade, confiança e segurança. </p>
  </div>

  <div className="grid grid-cols-6 max-w-7xl gap-8 md:gap-3 mx-auto ">
 
      <div className="col-start-1 col-span-6 md:col-span-2 flex justify-center items-center"><Image alt="seta" width={240} height={240} src="/assets/images/faq.png" /> </div>
      <div className=" col-start-1 md:col-start-3 col-span-6 max-h-[300px] ">
      {
      
        lista.length> 0 && list.map((item,index)=>(
          <AccordianItem key={index} isOpen={item.isOpen} title={item.title} content={item.content} />
          ))
        }
      </div>
</div>

</section>
  )
}

export default Accordian