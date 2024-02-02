'use client'
import Image from 'next/image'
import React from 'react'

import { poppins } from '@/other/fonts'
import { ButtonPill } from '../Buttons'

// const product=  {id:'1',avaliacoes:5, fav:true, img:"/assets/images/produtos/p1.png",tabela:"tabela nutricional",titulo:"Paleta Especial",cta1:{rotulo:"Onde Comer",url:"/"},cta2:{rotulo:"Onde Comprar",url:"/"}},
interface ProdutoProps{
  color?:string;
}

export function Produto({color=''}:ProdutoProps) {

  const bg = color || '#1D181E';
  return (
    <div className="max-w-[300px] m-auto">
      {/* CARD IMAGE */}
      
      <div className={` flex justify-center items-center rounded-[30px] top-image h-[300px] bg-[${bg}]`}>
          <div className="w-[150px] h-[170px]">
          <Image className="w-full h-full" alt="img" src="/assets/images/produtos/p1.png" width="130" height="140" />
          </div>
      </div>
      {/* CONTENTS */}
      <div style={poppins.style}  className="p-4 text-center">
        <h3 style={poppins.style} className='leading-[18px] font-[400] text-[#E0AA2C] text-[16px] italic uppercase mb-3' >tabela nutricional </h3>
         <h4 className="text-[20px] text-[#333] text-center font-bold mb-3 capitalize">paleta especial</h4>
         <p style={poppins.style}  className="text-[#656D89] text-[12px]">Flowbase is the largest  webflow <br/> resource site, with. Flowbase is the </p>


        {/* ACOES */}
        <div className="acoes mt-5 flex gap-3 justify-center align-center">
          <ButtonPill destination='/ondecomer' variant="filled" >onde comer</ButtonPill>
          <ButtonPill destination='/ondecomprar' variant='ghost'>onde comprar</ButtonPill>
        </div>
      </div>
    </div>
  )
}

