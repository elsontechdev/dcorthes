"use client"
import React from 'react';
// Import Swiper React components
import { Swiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

import { Poppins } from "next/font/google";
const poppins= Poppins({subsets:['latin'],weight:['600','500']});

// import required modules
import { Navigation } from 'swiper/modules';


















function CarouselProduto<T> ({children}:{children:React.ReactNode}):React.JSX.Element {
  return (
    <>
     <section className=''>
        <div className="wrapper  mt-20">
              <div className="title text-center">
              <h3 className="px-4 py-1 rounded-md inline-block text-white uppercase text-2xl font-semibold bg-dcortes-primary">
                destaques
              </h3>
              <h4 style={poppins.style} className=' my-20 uppercase text-4xl'>conheça os detaques da semana</h4>
              </div>

        {/* cards */}
           

          

        </div>
    </section>
    <div className="    relative  overflow-hidden  py-8">
  
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
              slidesPerView: 1,
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
        >
        <div className="bg-white">
            {children}
        </div>
      </Swiper>
    </div>
        </>
  )
}

export default CarouselProduto