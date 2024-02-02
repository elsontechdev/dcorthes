import Hero3 from "@/components/Heroes/Hero3/Hero3";
import { Lista } from "@/components/Lista";
import ProductPreview from "@/components/ProductPreview";
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
    <main className="main">
     
   <ProductPreview />
          
   <GridRow options={{sm:"grid-cols-2"}} additionalClasses={["my-8 grid grid-cols-2 align-center items-center justify-between  px-20 mt-20"]}>
          <h2 style={poppins.style} className="font-w-[600] text-xl md:text-[36px]">Produtos Similares</h2>

          {/* <div className=" md:ml-auto">
          <CustomSelect options={options} label="Filtro" />
          </div> */}
          
        </GridRow>
      <Lista>
        
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       {/* <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto />
       <Produto /> */}
      </Lista>

   
    </main>
  )
}

