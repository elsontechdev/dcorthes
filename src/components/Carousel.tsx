"use client"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Poppins } from "next/font/google";
const poppins= Poppins({subsets:['latin'],weight:['600','500']});

// import required modules
import { Navigation } from 'swiper/modules';
import { SlidingCard } from '.';
import { Customer } from '@/other/constants';
import Cartao from './Cartao';
import Image from 'next/image';





interface CarouselProps<T>{
  slides:T[]
}





function renderUser(slide:Customer){
 return(
  <div className="rounded-3xl max-w-[300px] mx-auto flex flex-col justify-end   transition duration-200 ease-in-out  bg-[#f8e4be40] hover:bg-[#C4AB61] text-white translate-y-[55%] hover:translate-y-0 ">
  <div className="flex-col min-h-[300px]  h-full flex  pt-8 justify-start items-center ">
      <div className="w-[120px] h-30 border-4 rounded-full border-t-[#ecd7a8] border-[#ecd7a8a1]">
       <Image className='rounded-full w-20 h-20'  width={150} height={170} src={slide.img} alt='card' />
      </div>
      <div className="mt-3">
          <span className="block">{slide.name}</span>
          <span className="block">{slide.occupation}</span>
          <div className="flex gap-[3px] justify-center my-4 ">                
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










function Carousel<T> ({slides}:CarouselProps<T>):React.JSX.Element {
  return (
    <div className="  pb-0 slider-bg relative  overflow-hidden border px-10">
      <div className=" absolute top-0 mt-40 flex ">

            <div className="flex items-center">
                  <h2 style={poppins.style} className="leading-10 text-3xl text-center text-white -mt-20 font-semibold">A CONFIANÇA DOS NOSSOS CLIENTES <br/> <span className=" font-sembibold text-dcortes-primary"> É O MAIS IMPORTANTE </span></h2>
                <svg className=" inline-block -mt-10 w-10 h-10 -ml-16   text-white  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
                  </svg>
              </div>
      </div>
        <Swiper
        slidesPerView={3}
        spaceBetween={10}
        
        breakpoints={
            {
                320:{
                    slidesPerView:1,
                    spaceBetween:20
                },
                480: {
                    slidesPerView: 2,
                    spaceBetween: 20
                  },
                  // when window width is >= 640px
                  800: {
                    slidesPerView: 3,
                    spaceBetween: 10
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 10
                  }
            }
        }

        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
          {slides.map((slide,i)=>(
            <SwiperSlide key={i}>
              <Cartao dado={slide as Customer} render={renderUser} />
            </SwiperSlide>
          ))}    
      </Swiper>
    </div>
  )
}

export default Carousel