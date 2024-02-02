import Image from 'next/image'
import React from 'react'
import { dcorteLogoBranca, instagram } from '../../../public/assets/svgs';

function PostInstagram() {
  return (
    <div className="w-full h-[5vw] px-40 justify-between bg-[#110E12] flex-row flex pt-2 ">
    <Image alt="logo" className=' w-28 h-[4vw] flex align-middle justify-start' style={{alignItems:'center'}} src={dcorteLogoBranca}/>
    <p className="text-white font-poppins text-[1vw] w-18 flex" style={{alignItems:'center'}}>Nossas marcas</p>
    <p className="text-white font-poppins text-[1vw] w-16  flex align-middle" style={{alignItems:'center'}}>Sobre nós</p>
    <p className="text-white font-poppins text-[1vw] w-16 flex" style={{alignItems:'center'}} >Produtos</p>
    <p className="text-white font-poppins text-[1vw] w-16 flex" style={{alignItems:'center'}}>Receitas</p>
    <Image alt="instagram" className=' w-4 flex align-middle justify-center' style={{alignItems:'center'}} src={instagram}/>
</div>
  )
}

export default PostInstagram