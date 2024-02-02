import Image from "next/image";
import { dcorteLogoBranca, fork, instagram, play, timerWhite } from "../../../public/assets/svgs";
import { badge, receitaHero, recive, video } from "../../../public/assets/images";
import GridRow from "../Row";
import InstagramPost from "../InstagramPost";
import { Inter, Rubik } from "next/font/google";
import { instagramPosts } from "@/other/constants";
import { ButtonInstagram } from "../Buttons";

const inter= Inter({subsets:['latin'],weight:["500","600","700"]})
const rubik= Rubik({subsets:['latin'],weight:["500","600","700"]})

export default function  Receita() {
    return (
        <section className="w-full h-full">
            {/* <div className="w-full h-[5vw] px-40 justify-between bg-[#110E12] flex-row flex pt-2 ">
            
            <div className="w-full h-[5vw] px-40 justify-between bg-[#110E12] flex-row flex pt-2 ">
                <Image alt="logo" className=' w-28 h-[4vw] flex align-middle justify-start' style={{alignItems:'center'}} src={dcorteLogoBranca}/>
                <p className="text-white font-poppins text-[1vw] w-18 flex" style={{alignItems:'center'}}>Nossas marcas</p>
                <p className="text-white font-poppins text-[1vw] w-16  flex align-middle" style={{alignItems:'center'}}>Sobre nós</p>
                <p className="text-white font-poppins text-[1vw] w-16 flex" style={{alignItems:'center'}} >Produtos</p>
                <p className="text-white font-poppins text-[1vw] w-16 flex" style={{alignItems:'center'}}>Receitas</p>
                <Image alt="instagram" className=' w-4 flex align-middle justify-center' style={{alignItems:'center'}} src={instagram}/>
            </div> */}

            <div className="w-full pt-10 pb-[10vw] bg-[#110E12] px-[6vw] flex-col justify-center" >
                <h1 className="text-[4vw] font-inter font-semibold text-white">Arroz Frito Japonês</h1>
                <div className="flex w-[30%] justify-between align-middle mt-10" style={{alignItems:'center'}}>
                    <Image src={timerWhite} alt="timer"/>
                    <div >
                        <p className="text-white text-[1.5vw]">Cook Time</p>
                        <p className="text-white text-[1.5vw] opacity-60 font-light">15 minutes</p>
                    </div>
                    <div className="flex justify-center align-middle h-8" style={{alignItems:'center'}}>
                        <Image alt="garfo" src={fork}/>
                        <p className="text-white opacity-60 text-[1.5vw] font-light">Chicken</p>
                    </div>
                    
                </div>

                <div style={{alignItems:'center'}} className="flex justify-between w-full max-[425px]:flex-col"> 
                    <div className="w-[80%]  mt-6">
                        <Image alt ="receita" className=" h-[40vw] rounded-[3vw] object-cover" src={video}></Image>
                    </div> 

                    <div className="w-[40%] h-[40vw] rounded-[2vw] px-5 py-5 mt-6 bg-[#D9D9D9]  ml-[2vw] max-[425px]:w-[80%] max-[425px]:h-[80vw]">
                        <p className="text-black font-inter mb-10 text-[2vw] font-bold">Informações Nutricionais</p>
                        <div className="flex justify-between">
                            <p className="text-black text-[1.5vw] font-inter font-semibold opacity-60">Calories</p>
                            <p className="text-black text-[1.5vw] font-inter font-semibold">219.9 kcal</p>
                        </div>
                        <hr className="border-t-2 mt-3  border-black opacity-10"></hr>
                    
                        <div className="flex justify-between mt-3">
                            <p className="text-black font-inter text-[1.5vw] font-semibold opacity-60">Total Fat</p>
                            <p className="text-black font-inter text-[1.5vw] font-semibold">10.7 g</p>
                        </div>
                        <hr className="border-t-2 mt-3 border-black opacity-10"></hr>
                    
                        <div className="flex justify-between mt-3">
                            <p className="text-black font-inter text-[1.5vw] font-semibold opacity-60">Protein</p>
                            <p className="text-black font-inter text-[1.5vw] font-semibold">7.9 g</p>
                        </div>
                        <hr className="border-t-2 mt-3 border-black opacity-10"></hr>

                        <div className="flex justify-between mt-3">
                            <p className="text-black font-inter text-[1.5vw] font-semibold opacity-60">Carbohydrate</p>
                            <p className="text-black font-inter text-[1.5vw] font-semibold">22.3 g</p>
                        </div>
                        <hr className="border-t-2 mt-3 border-black opacity-10"></hr>

                        <div className="flex justify-between mt-3">
                            <p className="text-black font-inter text-[1.5vw] font-semibold opacity-60">Cholesterol</p>
                            <p className="text-black font-inter  text-[1.5vw] font-semibold">37.4 mg</p>
                        </div>
                        <hr className="border-t-2 mt-3 border-black opacity-10"></hr>
                    </div> 

                </div>
     
            </div>

            <div className="bg-white  p-[4vw] mb-[5vw]">
                <div className="flex justify-between max-[425px]:flex-col">
                    <div style={{flexDirection:'column'}} className="flex w-[60%] justify-between mb-[2vw] min-[320px]:w-[90%]">
                        <p className="font-poppins font-bold text-[3vw] ">Ingredientes</p>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">2 xícaras (300g) de Presunto Cozido Sadia cortado em cubos pequenos</p>
                            <hr></hr>
                        </div>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">4 colheres (sopa) de azeite</p>
                            <hr></hr>
                        </div>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">1 cebola picada</p>
                            <hr></hr>
                        </div>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">2 dentes de alho picados</p>
                            <hr></hr>
                        </div>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">1 xícara de ervilhas em lata ou congeladas</p>
                            <hr></hr>
                        </div>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">1 xícara de cenoura picada em cubos pequenos</p>
                            <hr></hr>
                        </div>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">4 xícaras de arroz cozido</p>
                            <hr></hr>
                        </div>

                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">4 colheres (sopa) de shoyu ou a gosto</p>
                            <hr></hr>
                        </div>
                        <div className="mt-[2vw] mb-[2vw]">
                            <p className="mb-[2vw] text-[1.3vw]  max-[425px]:text-[2vw]">½ xícara de cheiro verde picado</p>
                            <hr></hr>
                        </div>
                    </div>
                    <div className="ml-[3vw] max-[425px]:hidden" >
                        <p className="font-bold  text-[3vw] ">Outras Receitas</p>
                        <div className="flex mt-[3vw]">
                            <Image style={{width:'30%'}} alt="receita" src={recive}></Image>
                            <p className="font-bold ml-[2vw] text-[1.5vw] w-[50%]">Chicken Meatball with Creamy Chees...</p>
                        </div>
                        <div className="flex mt-[3vw]">
                            <Image style={{width:'30%'}} alt="receita" src={recive}></Image>
                            <p className="font-bold ml-[2vw] text-[1.5vw] w-[50%]">The Creamiest Creamy Chicken an...</p>
                        </div>
                        <div className="flex  mt-[3vw]">
                            <Image style={{width:'30%'}} alt="receita" src={recive}></Image>
                            <p className="font-bold ml-[2vw] text-[1.5vw] w-[50%]">The Best Easy One Pot Chicken and Rice</p>
                        </div>
                       
                    </div>
                </div>
                <div className="w-[70%]">
                    <p className="font-poppins font-bold text-[3vw] ">Modo de preparo</p>
                    <div className="pl-[2.5vw]">
                        <p className="font-semibold my-[2vw] text-[1.2vw] max-[425px]:text-[2vw]">1. Em uma frigideira grande, em fogo médio, aqueça 3 colheres (sopa) de azeite e refogue a cebola, o alho, as ervilhas e a cenoura por cerca 3 minutos.</p>
                        <hr></hr>
                        <p className="font-semibold my-[2vw] text-[1.2vw] max-[425px]:text-[2vw]">2. Adicione o arroz e o Presunto Cozido Sadia em cubos, refogue por mais 2 minutos. Junte o shoyu e o cheiro verde e retire do fogo.</p>
                        <hr></hr>
                        <p className="font-semibold my-[2vw] text-[1.2vw] max-[425px]:text-[2vw]">3. Em uma frigideira média aqueça o restante do azeite e prepare os ovos mexidos. Tempere com sal e pimenta do reino a gosto.</p>
                        <hr></hr>
                        <p className="font-semibold my-[2vw] text-[1.2vw] max-[425px]:text-[2vw]">4. Adicione os ovos ao arroz, misture e sirva.</p>
                        <hr></hr>
                        <p className="font-semibold my-[2vw] text-[1.2vw] max-[425px]:text-[2vw]">5. Obs: Para esta receita você pode aproveitar sobras de legumes que tiver na sua geladeira! Compartilhe essa receita</p>
                    </div>
                    
                </div>
                <div className=" min-[425px]:hidden" >
                        <p className="font-bold  text-[3vw] ">Outras Receitas</p>
                        <div className="flex mt-[3vw]">
                            <Image style={{width:'30%'}} alt="receita" src={recive}></Image>
                            <p className="font-bold ml-[2vw] text-[1.5vw] w-[50%]">Chicken Meatball with Creamy Chees...</p>
                        </div>
                        <div className="flex mt-[3vw]">
                            <Image style={{width:'30%'}} alt="receita" src={recive}></Image>
                            <p className="font-bold ml-[2vw] text-[1.5vw] w-[50%]">The Creamiest Creamy Chicken an...</p>
                        </div>
                        <div className="flex  mt-[3vw]">
                            <Image style={{width:'30%'}} alt="receita" src={recive}></Image>
                            <p className="font-bold ml-[2vw] text-[1.5vw] w-[50%]">The Best Easy One Pot Chicken and Rice</p>
                        </div>
                       
                    </div>
            </div>
            <section className="bg-gradient-to-b from-[#E7F9FD00] to-[#E7F9FD] pb-8">
            <GridRow options={{sm:"grid-cols-1 "}} 
            additionalClasses={["grid grid-cols-1 text-center align-center items-center justify-center  py-8 "]}>
              <div className="text-box py-8 mx-auto  px-4">
                <h3 style={rubik.style} className="text-xl mb-4  font-bold">Siga @dcorthes.carnesnobres no Instagram</h3>
                <p className="max-w-xl">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
              </div>

          </GridRow>

          <GridRow options={{sm:"grid-cols-2",md:"grid-cols-3",lg:"grid-cols-4",xl:"grid-cols-5"}} 
          additionalClasses={["px-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6  justify-center align-center items-center w-full "]}>
  
          {/* {
            [...Array(4)].map((x, i) =><InstagramPost/>)
          } */}
            {
              instagramPosts.length > 0 && instagramPosts.map((item,index)=>{
                return(
                  <InstagramPost img={item.img} key={index} />
                )
              })
            }
            
          
            </GridRow>    
            <GridRow options={{sm:"grid-cols-1"}} 
            additionalClasses={["my-6 px-6 xs:grid-cols-1  justify-center align-center items-center w-full "]}>

           {/* botao instagram */}
           <ButtonInstagram label="Visite nosso Site"/>

              </GridRow>
        </section>
      

        </section>
    )
}