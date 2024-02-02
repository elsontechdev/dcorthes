"use client"
import Reservas from "@/components/Reservas";
import {
  Hero,
  Destaques,
  PorqueNos,
  CustomerReview,
  SectionDivider,
  Carousel,
  Learn,
  Cadastro,
  Receitas,
  Receita,
} from "../components";
import { costumers, faq } from "@/other/constants";
import HeroLeft from "@/components/Heroes/Hero/HeroLeft";
import HeroRight from "@/components/Heroes/Hero/HeroRight";
import Drep from "@/components/Drep";
import Missao from "@/components/Missao";
import Accordian from "@/components/accordian/Accordina";
import CarouselProduto from "@/components/CarouselProduto";
import { Produto } from "@/components/Produto";
import {  SwiperSlide } from 'swiper/react';
import React, { useRef, useState } from 'react';
import {reservas as pratos} from '../other/constants';
import SimpleCard from "@/components/SimpleCard";
import InstagramIcon from "@/components/Icons/InstagramIcon";


export default function Home() {
  return (
    <>
      <main className="">
        
        <Hero left={HeroLeft} right={HeroRight} />
        {/* <InstagramIcon fill="orange"/> */}
        <Missao />
        <SectionDivider/>
        <CarouselProduto>
            <SwiperSlide > <SimpleCard/></SwiperSlide>
            <SwiperSlide > <SimpleCard/></SwiperSlide>
            <SwiperSlide > <SimpleCard/></SwiperSlide>
            <SwiperSlide > <SimpleCard/></SwiperSlide>
            <SwiperSlide > <SimpleCard/></SwiperSlide>
            <SwiperSlide > <SimpleCard/></SwiperSlide>
        </CarouselProduto>
        {/* <Destaques /> */}
        <PorqueNos />
        <Reservas/>
         <Accordian list={faq}/>
        <Carousel slides={costumers}/>
        <Cadastro/>  
       
      </main>
    </>
  );
}
