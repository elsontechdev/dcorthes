'use client'
import React from 'react'
import GridRow from '../Row'
import GhostCard from '../GhostCard'



function Missao() {
const dados=[
  {
    title:'Missão',
    content:'Oferecer produtos de origem animal baseados em qualidade, praticidade, confiança e segurança. Compartilhar conhecimentos, ampliar o vínculo entre as pessoas, inovar em soluções e apoiar o desenvolvimento científico e tecnológico relacionado à produção animal.'
  },
  {
    title:"Visão",
    content:' Ser uma referência na produção e comercialização de alimentos de origem animal, e consolidar nossos produtos e serviços na mente e no coração dos nossos clientes, colaboradores e fornecedores.'
  },
  {
    title:'Valores',
    content:'Colaboração. Excelência. Inovação. Capricho. Responsabilidade Socioambiental. Visão Integrada. Referência. Empatia e Simpatia.'
  }
]

  return (
    <section className='my-20 lg:pl-20'>
        <GridRow options={{sm:"grid-cols-2",md:"grid-cols-3",lg:"grid-cols-3"}} 
          additionalClasses={["px-6 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6  justify-center align-center items-center w-full "]}>
          {
            dados.map((card, i)=>{
              return(
                <GhostCard key={i} title={card.title} content={card.content} />
              )
            })
          }
         
          
            
          </GridRow>
          
    </section>
  )
}

export default Missao