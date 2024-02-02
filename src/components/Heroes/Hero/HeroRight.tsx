import React from 'react'


import Image from "next/image";



import { Dancing_Script,Lobster_Two, Poppins } from "next/font/google";
const poppins=Poppins({subsets:['latin'],weight:['500']})
const dancing= Dancing_Script({subsets:['latin']})

const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})
// style={dancing.style}


const HeroRight = () => {
  return (
    <div className="relative min-h-[300px] md:min-h-[400px]  lg:min-h-[500px] h-full flex align-center justify-center items-center right-col w-full md:w-1/2 ">
    <div className="img-wrapper   w-full absolute top-0 left-0 right-0 -bottom-20 flex items-center justify-center">
    {/* <h3 className="text-white text-3xl">Right side</h3> */}
    <Image alt="prato" className="w-[350px] md:w-[600px]" width={1000} height={1000} src="/assets/images/prato.png" />

    </div>
 </div>
  )
}

export default HeroRight