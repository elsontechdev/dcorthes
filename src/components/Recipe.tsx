import Image from 'next/image'
import React from 'react'

import { Dancing_Script,Lobster_Two,Rubik, Poppins,Inter } from "next/font/google";
import Link from 'next/link';
const poppins=Poppins({subsets:['latin'],weight:['500']})
const inter=Inter({subsets:['latin'],weight:["200","300","400","500","600","700"]})

interface RecipeProps{
    img?:string;
}

function Recipe({img}:RecipeProps) {
  return (
    <div className="  relative h-[260px] md:h-[360px] lg:h-[450px] xl:h-[560px] 2xl:h-[600px] overflow-hidden">
        
        <Image src="/assets/images/Badge.png" width={400} height={400} alt="badge" className=" w-[50px] sm:w-[50px] md:w-[70px] lg:w-[100px] xl:w-[120px]  absolute z-40 top-10 left-[50%] -translate-x-[50%]"/>

        
       
        <div className="px-8 flex flex-col   justify-start items-center texto absolute rounded-tl-[20px] rounded-bl-[20px] top-0 bottom-0 right-[50%] left-1 md:left-1  bg-[#E7FAFE]  ">
           


            <div className="painel  min-h-full  grid  w-full">
                <div className=" top flex flex-col items-start">
                <h2 style={inter.style} className="  text-md mt-1 md:text-2xl lg:text-5xl lg:leading-14 sm:mt-2 md:mt-10 lg:mt-20 text-left mb-3">Delecioso Frango Apimentado</h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, laboriosam.</p>
                </div>

                <div className=" middle">
                 <div className="tempo mt-1 md:mt-3 flex items-center  gap-2 bg-[#00000010] max-w-max md:p-1 md:px-3 md:py-2 lg:px-8 lg:py-4 rounded-full">
                    <span>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9.75 1.5H14.25C14.4489 1.5 14.6397 1.42098 14.7803 1.28033C14.921 1.13968 15 0.948912 15 0.75C15 0.551088 14.921 0.360322 14.7803 0.21967C14.6397 0.0790176 14.4489 0 14.25 0L9.75 0C9.55109 0 9.36032 0.0790176 9.21967 0.21967C9.07902 0.360322 9 0.551088 9 0.75C9 0.948912 9.07902 1.13968 9.21967 1.28033C9.36032 1.42098 9.55109 1.5 9.75 1.5Z" fill="black"/>
                            <path d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9973 9.61388 20.0482 7.32626 18.361 5.63902C16.6737 3.95178 14.3861 3.0027 12 3ZM16.2426 8.81799L12.5304 12.5303C12.4607 12.6 12.378 12.6552 12.2871 12.6929C12.1961 12.7306 12.0985 12.75 12 12.75C11.9015 12.75 11.804 12.7306 11.713 12.6929C11.622 12.6553 11.5393 12.6 11.4697 12.5304C11.4 12.4607 11.3448 12.378 11.3071 12.2871C11.2694 12.1961 11.25 12.0985 11.25 12C11.25 11.9015 11.2694 11.804 11.3071 11.713C11.3448 11.622 11.4 11.5393 11.4696 11.4697L15.182 7.75736C15.2516 7.68771 15.3343 7.63246 15.4253 7.59477C15.5163 7.55708 15.6138 7.53767 15.7123 7.53767C15.8108 7.53767 15.9083 7.55707 15.9993 7.59476C16.0903 7.63244 16.173 7.68769 16.2426 7.75733C16.3123 7.82697 16.3675 7.90965 16.4052 8.00065C16.4429 8.09164 16.4623 8.18916 16.4623 8.28766C16.4623 8.38615 16.4429 8.48368 16.4052 8.57467C16.3675 8.66567 16.3123 8.74835 16.2427 8.81799H16.2426Z" fill="black"/>
                            </svg>
                    </span>
                    <span style={inter.style} className="px-2 text-xs sm:text-sm md:text-lg lg:text-xl">30 minutes</span>
                 </div>
                </div>

                <div className=" bottom">


                    <div className="actions  flex flex-col  gap-2 md:flex-row md:justify-between md:px-3 md:gap-3">

                        <div className="user flex   gap-2 justify-start align-center items-center">
                            <div className="avatar  shrink-0 ">
                                <Image src="/assets/images/john-avatar.png" className='w-[30px] lg:w-[40px]'  alt="john" width={40} height={40} />
                            </div>
                            <div style={inter.style} className=" data ">
                                <span className='block text-xs md:text-lg lg:text-xl'>John Smith</span>
                                <span className='text-xs md:text-sm lg:text-md  whitespace-nowrap'>15 March 2022</span>
                            </div>
                        </div>

                        <div className="ver-btn bg-black w-max px-1 py-1 sm:px-12 sm:py-1 md:px-2   md:py-0 lg:px-8  rounded-lg">
                            <Link href="" className="flex   align-center items-center  h-full">
                                <Link href="/recipes/receita" className="text-white text-sm md:text-md md:whitespace-nowrap  lg:text-xl">Ver Receita</Link>
                                <span className='inline-block ml-2 lg:ml-[20px] shrink-0'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.25C10.0716 2.25 8.18657 2.82183 6.58319 3.89317C4.97982 4.96451 3.73013 6.48726 2.99218 8.26884C2.25422 10.0504 2.06114 12.0108 2.43735 13.9021C2.81355 15.7934 3.74215 17.5307 5.10571 18.8943C6.46928 20.2579 8.20656 21.1865 10.0979 21.5627C11.9892 21.9389 13.9496 21.7458 15.7312 21.0078C17.5127 20.2699 19.0355 19.0202 20.1068 17.4168C21.1782 15.8134 21.75 13.9284 21.75 12C21.747 9.41506 20.7188 6.93684 18.891 5.10901C17.0632 3.28118 14.5849 2.25299 12 2.25ZM15.416 12.624L10.916 15.624C10.8031 15.6995 10.6718 15.7428 10.5362 15.7494C10.4005 15.756 10.2657 15.7257 10.1459 15.6616C10.0262 15.5975 9.92612 15.5021 9.85639 15.3856C9.78665 15.2691 9.74988 15.1358 9.75 15V9C9.74988 8.8642 9.78665 8.73092 9.85639 8.6144C9.92612 8.49787 10.0262 8.40248 10.1459 8.3384C10.2657 8.27433 10.4005 8.24398 10.5362 8.2506C10.6718 8.25721 10.8031 8.30055 10.916 8.37598L15.416 11.376C15.5188 11.4445 15.603 11.5373 15.6613 11.6461C15.7195 11.755 15.75 11.8765 15.75 12C15.75 12.1235 15.7195 12.245 15.6613 12.3539C15.603 12.4627 15.5188 12.5555 15.416 12.624Z" fill="white"/>
                                </svg>

                                </span>
                            </Link>
                        </div>
                    </div>


                </div>
                

            </div>

        </div>
        



        <div className="texto absolute rounded-br-[20px] rounded-tr-[20px] top-0 bottom-0 left-[50%] right-1 md:right-1 bg-blue-400 overflow-hidden">
       <Image className='block w-full h-full object-fill ' src={`${img}`} alt="receita 1" width={982} height={640} />
        </div>
       
       
   

    </div>
  )
}

export default Recipe