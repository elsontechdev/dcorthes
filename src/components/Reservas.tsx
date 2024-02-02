import React from 'react'
import SimpleCard from './SimpleCard'
import { Card } from '.'
import {reservas as pratos} from '../other/constants';
import Link from 'next/link';

function Reservas() {
  return (
    <section className="bg-[#D9D9D9]">
        <div className="py-20">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-700 uppercase text-center">RECEITAS DELICIOSAS PARA <br/> TODOS OS MOMENTOS</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-4 place-items-center">
           {
            pratos.map((prato,index)=>(
              <Card key={index} image={prato.img} desc={prato.desc} />
            ))
           }
           
        </div>
        <div className="flex justify-center py-20 items-center">
          <Link href="/recipes" className="px-6 lg:px-8 lg:py-3 py-2 rounded-xl text-white text-xl tracking-wider bg-gray-950">Veja Mais</Link>
        </div>
    </section>
  )
}

export default Reservas