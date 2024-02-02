import Image from "next/image";
import { dcorteLogoBranca, fork, instagram, play, timerWhite } from "../../../public/assets/svgs";
import { badge, pasto2Sobre, pastoSobre, receitaHero, recive, sobrewall, video } from "../../../public/assets/images";
import GridRow from "../Row";
import InstagramPost from "../InstagramPost";
import { Inter, Rubik } from "next/font/google";

const inter= Inter({subsets:['latin'],weight:["500","600","700"]})
const rubik= Rubik({subsets:['latin'],weight:["500","600","700"]})

export default function  Sobre() {
    return (
    <section className="w-full h-full">
        <div className="back">
            <Image style={{objectFit:'cover', width:'100%', height:'60vw'}} src={sobrewall} alt="bois"></Image>
        </div>
        <div className="px-[2vw] py-[5vw]">
            <div style={{alignItems:'center'}} className="flex w-full justify-center max-[425px]:flex-col">
                <div className="w-[50%] max-[425px]:w-[80%] max-[425px]:mb-[5vw]">
                    <p className="font-bold text-[4vw]">Sobre Nós</p>
                    <p className="font-semibold mb-[1vw] text-[1.5vw] max-[425px]:text-[2.5vw]">Grupo D'Corthes mais de 30 anos inovando no Agro</p>
                    <p className="font-light w-[83%] max-[425px]:w-[100%] text-justify text-[1.2vw] max-[425px]:text-[2vw]">Bem-vindo ao mundo da excelência no agro de cortes de carne! A D'Cortes é uma empresa que se destaca no mercado, não apenas pela qualidade superior de seus produtos, mas também por sua paixão pela tradição e compromisso com a satisfação do cliente. Com uma história rica e uma visão inovadora, temos orgulho de compartilhar mais sobre quem somos e o que fazemos.</p>
                </div>
                
                <Image style={{width:'40%'}} src={pastoSobre} alt="pasto"></Image>
            </div>

            <div style={{alignItems:'center'}} className="flex max-[425px]:mt-[5vw] w-full justify-center max-[425px]:flex-col-reverse">
                <Image style={{width:'40%'}} src={pasto2Sobre} alt="pasto"></Image>
                <div className="w-[40%] ml-[10vw] max-[425px]:w-[80%] max-[425px]:ml-[0vw] max-[425px]:mb-[5vw]">
                    <p className="font-bold text-[4vw] mb-[1vw]">Nossa história</p>
                    <p className="font-light text-[1.2vw] text-justify max-[425px]:text-[2vw]">A D'Cortes é fruto de uma jornada inspiradora que começou há décadas, quando nossos fundadores perceberam a necessidade de elevar os padrões da indústria de cortes de carne. A partir desse sonho, construímos uma empresa que se tornou sinônimo de qualidade, confiança e compromisso. Ao longo de gerações, mantivemos o legado da família viva, incorporando técnicas tradicionais de produção com as mais recentes inovações do setor.</p>
                </div>
                
            </div>
        </div>
        
    </section>)
}