import React from 'react'
import { inter } from '@/other/fonts'
import Link from 'next/link';
interface ButtonInstagramProps extends React.ComponentPropsWithoutRef<"button">{
  label:string;
}

function ButtonInstagram({label}:ButtonInstagramProps) {
  return (
    <Link href="https://www.instagram.com/dcorthes.carnesnobres/" target='_blank'  className="instagram-svg bg-black px-4 py-3 gap-2 flex whitespace-nowrap rounded-lg justify-center items-center">
    <span style={inter.style} className="text-lg  text-white">{label}</span>
    <svg width="23" height="24" viewBox="0 0 23 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M7.83691 0.209473H16.0869C19.8833 0.209473 22.9619 3.5372 22.9619 7.64075V16.5583C22.9619 20.6618 19.8833 23.9896 16.0869 23.9896H7.83691C4.04054 23.9896 0.961914 20.6618 0.961914 16.5583V7.64075C0.961914 3.5372 4.04054 0.209473 7.83691 0.209473ZM16.0869 21.7602C18.7407 21.7602 20.8994 19.4268 20.8994 16.5583V7.6408C20.8994 4.77233 18.7407 2.43891 16.0869 2.43891H7.83691C5.18316 2.43891 3.02441 4.77233 3.02441 7.6408V16.5583C3.02441 19.4268 5.18316 21.7602 7.83691 21.7602H16.0869Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M6.46191 12.0996C6.46191 8.81642 8.92454 6.15454 11.9619 6.15454C14.9993 6.15454 17.4619 8.81642 17.4619 12.0996C17.4619 15.3827 14.9993 18.0446 11.9619 18.0446C8.92454 18.0446 6.46191 15.3827 6.46191 12.0996ZM8.52441 12.0996C8.52441 14.1477 10.0672 15.8153 11.9619 15.8153C13.8567 15.8153 15.3994 14.1477 15.3994 12.0996C15.3994 10.0501 13.8567 8.384 11.9619 8.384C10.0672 8.384 8.52441 10.0501 8.52441 12.0996Z" fill="white"/>
    <ellipse cx="17.8745" cy="5.70892" rx="0.732875" ry="0.792174" fill="white"/>
    </svg>
</Link>
  )
}

export default ButtonInstagram