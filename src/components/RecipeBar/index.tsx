import { rubik, poppins } from '@/other/fonts';
import Image from 'next/image'
import React from 'react'

function RecipeBar() {
  return (
    <>
    <section className="bg-[#000] py-8 lg:px-10 px-4">
      <h1 style={rubik.style} className=" pl-8 lg:pl-4 text-3xl md:text-4xl lg:text-6xl text-white font-semibold text-left">Arroz Frito Japonês</h1>
    <div className=" mt-14 flex gap-32">
      <div className=" flex gap-3">
      <Image alt="" src="/assets/svgs/Timer-white.svg" className="" width="40" height={40} />
       <div className=" text-[#fff] text-sm font-medium leading-5 text-left">
       <p className="mb-4 text-base font-medium leading-4 tracking-widest text-left">COOK TIME</p>
        <p className="text-base font-medium leading-4 tracking-widest text-left">15 Minutes</p>
       </div>
      </div>

      <div className="flex gap-3">
      <Image alt="" src="/assets/svgs/ForkKnife.svg" className="" width="40" height={40} />
       <div className="text-[#fff]">
       <p style={poppins.style} className="text-base font-medium leading-4 tracking-widest text-left">Chicken</p>
       </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default RecipeBar