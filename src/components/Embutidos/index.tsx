import Hero4 from "../Hero4";
import { Lista } from "@/components/Lista";
import { Produto } from "@/components/Produto";
import GridRow from "@/components/Row";
import CustomSelect from "@/components/Select";
import { poppins, rubik } from "@/other/fonts";
import Image from "next/image";
import { reservas as pratos } from "@/other/constants";
import { Card } from "..";
import Hero5 from "../Hero5";

const options = [
  { value: 'preco', label: 'preço' },
  { value: 'tamanho', label: 'tamanho' },
  { value: 'estabelecimento', label: 'estabelecimento' },
];

export default function page() {
  return (
    <main>
      <Hero5></Hero5>
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

      <section className="px-[10vw] mb-[10vw]">
        <div className="py-20">
            <h3 className="text-xl md:text-3xl font-semibold text-gray-700 uppercase text-center">RECEITAS DELICIOSAS PARA <br/> TODOS OS MOMENTOS</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  py-4 place-items-center">
           {
            pratos.map((prato,index)=>(
              <Card key={index} image={prato.img} desc={prato.desc} />
            ))
           }
           
        </div>
        
        
    </section>
    </main>
  )
}

