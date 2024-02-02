import Image from 'next/image';
import React from 'react'




interface ListFilterableProp<T>{
  items:T[];
  renderItem:(item :T)=>React.ReactNode;
  responsive:{
    sm?:string,
    md?:string,
    lg?:string,
    xl?:string
  }

}

interface Produto{
  id:string;
  img:string;
  tabela:string;
  titulo:string;
  cta1:{rotulo:string,url:string},
  cta2:{rotulo:string,url:string},
}


/**
 * Wrapper em cima do map
 * Forneça a lista de itens
 * a funçao de extrair a chave
 *  a função pra exibir a lista
 * @param param0 
 * @returns 
 */
function ListSimple<T extends unknown>({items,renderItem,responsive}:ListFilterableProp<T>){
  return (
    <>
    <section className=" mx-auto  grid min-h-[400px] gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-32">

      {
        items.map((item,i)=>(
          <div key={i} className="mx-auto  max-w-full w-full">
            {renderItem(item)}
          </div>
        ))
      }

    </section>
      </>
  )
}

export default ListSimple