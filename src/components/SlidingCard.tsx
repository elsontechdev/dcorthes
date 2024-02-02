import Image from 'next/image'
import React from 'react'
import { Customer } from '@/other/constants'
interface SlidingCardProp<T>{
    slide:T
}

function SlidingCard({slide}:SlidingCardProp<Customer>) {
  return (
    <div className="rounded-3xl flex flex-col justify-end   transition duration-200 ease-in-out  bg-[#f8e4be40] hover:bg-[#C4AB61] text-white translate-y-[55%] hover:translate-y-0 ">
        <div className="flex-col min-h-[300px]  h-full flex  pt-8 justify-start items-center ">
            <div className="w-[120px] h-30 border-4 rounded-full border-t-[#ecd7a8] border-[#ecd7a8a1]">
             <Image className='rounded-full w-20 h-20'  width={150} height={170} src={slide.img} alt='card' />
            </div>
            <div className="mt-3">
                <span className="block">{slide.name}</span>
                <span className="block">{slide.occupation}</span>
                <div className="flex gap-[3px] justify-center my-4">                
                {
                  [...Array(slide.stars)].map((x, i) =>
                  <span key={i} className="block w-5"><Image  alt="star" src="/assets/svgs/star.svg" width={10} height={10} /></span>
                  )
                }
                </div>
                <div className=' m-6'>
                 <p className="text-sm px-1 text-center mt-3 mb-6">{slide.review}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SlidingCard