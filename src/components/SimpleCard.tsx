import Image from 'next/image'
import React from 'react'

import { Jost } from "next/font/google";
import Link from 'next/link';
const jost= Jost({subsets:['latin'],weight:['600']});

const card={
  img:"/assets/images/prime-hib.png",
  action1:{label:"onde comer",url:"#1"},
  action2:{label:"onde comprar", url:"#2"},
  description:"Paleta Especial D&apos;Cortes Groumet"
}


function SimpleCard() {
  return (

   <div className="card shadow-md hover:shadow-lg mx-auto">
    
            <Image className="object-fit" alt="card" width={250} height={320} src="/assets/images/prime-hib.png" />
     
          <div className="card-action ">
            <Link href="/ondecomer" style={jost.style} className="btn h-[35px] flex justify-center items-center font-semibold text-white text-sm bg-dcortes-primary whitespace-nowrap ">Onde Comer</Link>
            <Link href="/ondecomprar" style={jost.style} className="btn h-[35px] whitespace-nowrap flex justify-center items-center  bg-white text-sm ">Onde Comer</Link>
        </div>
                     
        <div className="card-footer bg-[#E6E6E6]">
        <p className="my-6 font-bold text-dcortes-darkgray">Paleta Especial D&apos;Cortes Groumet</p>
        </div>
  </div>
  )
}

export default SimpleCard