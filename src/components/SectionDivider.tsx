"use client"
import Image from 'next/image'
import React from 'react'
import { Dancing_Script,Lobster_Two } from "next/font/google";
import { useRouter } from 'next/navigation';
const dancing= Dancing_Script({subsets:['latin']})


function SectionDivider() {
  const router = useRouter()
  return (
    <section className=" mt-8 overflow-hidden ">
        <div className="  h-full w-full relative min-h-[200px] md:min-h-[300px]">
          <Image className="w-full md:object-fit h-full min-h-[200px] md:min-h-[300px]" alt="image divider" height={1200} width={1000} src="/assets/images/divisao.png" />
          <div className="my-3 flex flex-col justify-center items-center absolute top-[40%] md:top-[52%] lg:top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
             <Image className="md:mb-3 " src="/assets/svgs/divider-logo.svg" width={50} height={50} alt="logo" />
            <h3 style={dancing.style} className='text-dcortes-primary text-sm md:text-3xl lg:text-5xl text-center'>Leve amor e qualidade <br/> para a sua mesa</h3>
             <button onClick={() => router.push("/produtos")} className="btn my-1 md:my-8 text-sm md:text-lg lg:text-xl text-white md:font-bold md:tracking-widest  bg-dcortes-primary">D'corthes</button>
          </div>
        </div>

    </section>
  )
}

export default SectionDivider