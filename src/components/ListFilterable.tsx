import Image from 'next/image';
import React,{Fragment} from 'react'
import GridRow from './Row';




interface ListFilterableProp<T>{
  items:T[];
  keyExtractor:(item: T)=>string;
 renderItem:(item :T)=>React.ReactNode;

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




function ListFilterable<T extends unknown>({items,renderItem,keyExtractor}:ListFilterableProp<T>){

   

  return (
    
    <Fragment>

      {
        items.map((item,_)=>(
          <div key={keyExtractor(item)}  >
            {renderItem(item)}
          </div>
        ))
      }

    </Fragment>
   
      
  )
}

export default ListFilterable