import React from 'react'


type RenderableCard<T>=T extends React.ReactNode ? T : React.ReactNode;

interface CartaoProps<T>{

    dado:T
    render:(dado:T)=>React.ReactNode
}






function Cartao<T>({dado,render}:CartaoProps<T>) {
  return (
    <>{render(dado)}</>
  )
}

export default Cartao