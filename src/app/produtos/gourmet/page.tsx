import Hero3 from "@/components/Heroes/Hero3/Hero3";
import { Lista } from "@/components/Lista";
import { Produto } from "@/components/Produto";
import GridRow from "@/components/Row";
import CustomSelect from "@/components/Select";
import { poppins, rubik } from "@/other/fonts";
import Image from "next/image";

const options = [
  { value: 'preco', label: 'preço' },
  { value: 'tamanho', label: 'tamanho' },
  { value: 'estabelecimento', label: 'estabelecimento' },
];

export default function page() {
  return (
    <main>
      <Hero3></Hero3>
      <GridRow options={{sm:"grid-cols-2"}} additionalClasses={["my-8 grid grid-cols-2 align-center items-center justify-between  px-20 mt-20"]}>
          <h2 style={poppins.style} className="font-w-[600] text-xl md:text-[36px]">Produtos</h2>

          <div className=" md:ml-auto">
          <CustomSelect options={options} label="Filtro" />
          </div>
          
        </GridRow>
      <Lista>
        
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
      </Lista>

      <div className="grid grid-cols-1 md:grid-cols-2 my-20">
 
        <div className=" overflow-hidden">
          <Image className="w-[90%] m-auto h-[600px] " src="/assets/images/hero-3.png" width={1000} height={1000} alt='' />
        </div>
        <div className="h-[600px] w-[100%]  grid m-auto">
          <div className=" h-full w-full grid">
            <div className="p-20">
              <span style={rubik.style} className="mb-4 inline-block  rounded-md p-1 leading-[22px] font-[400] bg-[#E0AA2C] text-[20px] text-white" >SOBRE A MARCA</span>
              <p style={rubik.style} className="text-[25px] xl:text-[40px] mb-8 lg:leading-[40px] xl:leading-[50px] font-[600]">Da fazenda à mesa, garantimos o frescor e o sabor em cada pedaço</p>
              <p style={poppins.style} className="font-[500] md:leading-[20px] lg:leading-[30px] xl:text-[20px]">“Apresentamos uma linha de produtos alimentares dedicados aos entusiastas do prazer gastronômico. Valorizamos cada etapa dessa experiência gourmet, desde a seleção das harmonizações perfeitas até a meticulosa preparação dos ingredientes. Não abrimos mão de fornecer experiências memoráveis ​​e sabores sofisticados, com as nossos cuidados personalizados de carnes e ingredientes de alta qualidade."</p>
           </div>

          </div>
        </div>
      </div>
    </main>
  )
}

