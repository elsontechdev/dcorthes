import Hero3 from '@/components/Heroes/Hero3/Hero3'
import HeroLanches from '@/components/HeroLanches/HeroLanches'
import { Lista } from '@/components/Lista'
import { Produto } from '@/components/Produto'
import GridRow from '@/components/Row'
import CustomSelect from '@/components/Select'
import { poppins } from '@/other/fonts'
import React from 'react'

const options = [
  { value: 'preco', label: 'preço' },
  { value: 'tamanho', label: 'tamanho' },
  { value: 'estabelecimento', label: 'estabelecimento' },
];

function page() {
  return (
    <main>
        <HeroLanches></HeroLanches>

        <GridRow options={{sm:"grid-cols-2"}} additionalClasses={["my-8 grid grid-cols-2 align-center items-center justify-between  px-20 mt-20"]}>
          <h2 style={poppins.style} className="font-w-[600] text-xl md:text-[36px]">Produtos</h2>

          <div className="ml-auto ">
          <CustomSelect options={options} label="Filtro" />
          </div>
        </GridRow>
        <Lista>
        
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
        <Produto color="#AC5413" />
 
       </Lista>
    </main>
  )
}

export default page
