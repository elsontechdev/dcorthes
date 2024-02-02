import React from "react";

type Restaurante = {
  nome?: string, 
  latitude: number, 
  longitude: number,
  endereco?: string, 
  tipo?: string
}


//#######################################################
// CRIACAO DO CONTEXTO E SUAS PROPRIEDADES
//#######################################################
type ContextProps = {
  restaurante: Restaurante
  setRestaurante: React.Dispatch<React.SetStateAction<Restaurante>>
  restaurantes: Restaurante[]
};

type Props = {
  children: React.ReactNode
}

//criacao de um contexto tipado para que seja possivel armazenar os dados a serem compartilhados
const PlacesContext = React.createContext<ContextProps | undefined>(
  {} as ContextProps
);

// Criando o Componente Para que seja possível compartilhar as informações com os componentes filhos ..
export const PlacesProvider = ({ children }: Props) => {

  const [restaurante, setRestaurante] = React.useState({} as Restaurante)
  const restaurantes: Restaurante[] = [{
    nome: "Fogo Campeiro", 
    latitude: -5.073458760309828, 
    longitude: -42.7898410034699,
    endereco: 'R. Anfrísio Lobão, 387 - Jóquei, Teresina - PI, 64049-280', 
    tipo:'Churrascaria'
  },
  {
    nome: "Carmem Cheff", 
    latitude: -5.077954067774761, 
    longitude: -42.7912152782081,
    endereco: 'R. Angélica, 245 - Jóquei, Teresina - PI, 64048-162', 
    tipo:'Restaurante'
  }]

  //pode passar varias coisas aqui, de inicio so eh passado o "userData"
  const value = {
    restaurante,
    setRestaurante,
    restaurantes
  };

  //retorna o provedor de dados realmente
  return <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>;
};

export function usePlacesContext() {
  const context = React.useContext(PlacesContext);

  if (typeof context === "undefined") {
    throw new Error("usePlacesContext must be used within an UserContext");
  }

  return context;
}