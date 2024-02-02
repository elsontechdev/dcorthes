import Image from 'next/image'
import React from 'react'



type CardProps={
  
    
        image:string,
        desc:string

    
}
function Card({image,desc}:CardProps) {
  return (
    <div className="overflow-hidden shadow-lg max-w-[300px] max-h-[450px]  w-full h-full rounded-lg transition hover:-translate-y-3">
      <div className="h-[70%] ">
        <Image alt="card image" className="h-full w-full object-cover" src={image} width={1000} height={1000} />
      </div>
      <div className=" p-8 bg-white h-full">
         <span className='font-semibold tracking-wide overflow-hidden block uppercase'>
            {desc}
         </span>
      </div>
    </div>
  )
}

export default Card