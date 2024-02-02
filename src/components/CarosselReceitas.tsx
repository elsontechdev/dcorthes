"use client"
import React, { Fragment } from 'react';
import Slider from "react-slick";
// Import Swiper React components
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Dancing_Script,Jost,Lobster_Two, Poppins } from "next/font/google";
const poppins=Poppins({subsets:['latin'],weight:['400','500'],style:['italic','normal']})
const dancing= Dancing_Script({subsets:['latin']})
const jost= Jost({subsets:['latin']})

const lobster= Lobster_Two({subsets:['latin'],weight:['400','700']})















interface CarouselReceitasProps{
    children:React.ReactNode;
}

const destaqueProdsClsses=["grid justify-center grid-cols-1 lg:grid-cols-2 mx-auto gap-10 p-10 mb-20"]

export default function CarouselReceitas({children}:CarouselReceitasProps) {
 
  const settings = {
    className: "center-receitas",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 1,
    autoplay:true,
    speed: 500,


  };
  return (
    <Fragment>
    <section className="bg-black py-20">

    <Slider {...settings}>
       {children}
    </Slider>
    </section>
    </Fragment>
  );
}