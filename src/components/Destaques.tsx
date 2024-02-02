"use client"
import { useRouter } from 'next/navigation';
import React from 'react'
import SimpleCard from './SimpleCard'
import { Jost } from "next/font/google";
const jost= Jost({subsets:['latin']});
/*
  Possivelmente vai fazer uma requisiçao e recber uma lista de objetos pra mostrar listar em cartões
  produtos = [
    {
      image:url,
      ondecomer:url,
      ondecomprar:url,
      descrição:texto
    }
  ]
*/

import { Dancing_Script,Lobster_Two, Poppins } from "next/font/google";
import Link from 'next/link';

const poppins=Poppins({subsets:['latin'],weight:['600']})

function Destaques() {
  const router = useRouter();
  return (
    <section className=''>
        <div className="wrapper  mt-20">
              <div className="title text-center">
              <h3 className="px-4 py-1 rounded-md inline-block text-white uppercase text-2xl font-semibold bg-dcortes-primary">
                destaques
              </h3>
              <h4 style={poppins.style} className=' my-20 uppercase text-4xl'>conheça os detaques da semana</h4>
              </div>

        {/* cards */}
              <div className="list  flex flex-col md:flex-row md:justify-around items-center space-y-10 md:space-y-0 lg:justify-center lg:space-x-80">
                <SimpleCard/>
                <SimpleCard/>
              </div>

              <div className="title text-center my-20">
              <Link href="/produtos" style={poppins.style} className=" btn-outline border-2 border-dcortes-primary hover:border-white hover:bg-dcortes-primary hover:text-white">
                ver mais produtos
              </Link>
              </div>

        </div>
    </section>
  )
}

export default Destaques