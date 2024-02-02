"use client"
import Link from 'next/link'
import React from 'react'
import { Droop } from '.'
import Image from 'next/image';
import Drep from './Drep';
import {usePathname} from "next/navigation"
import InstagramIcon from './Icons/InstagramIcon';
import SearchIcon from './Icons/SearchIcon';
import LogoIcon from './Icons/LogoIcon';
import MenuIcon from './Icons/MenuIcon';
import CloseIcon from './Icons/CloseIcon';

function Barra() {

  const [isMobileOpen,setIsMobileOpen]=React.useState(true);
 const toggleMobileOpen=()=>setIsMobileOpen(!isMobileOpen);

  const [isOpenDropMarcas,setIsOpenDropMarcas]=React.useState(false);
  const toggleIsOpenDropMarcas=()=>setIsOpenDropMarcas(!isOpenDropMarcas)
  
  const [isOpenDropProdutos,setIsOpenDropProdutos]=React.useState(false);
  const toggleIsOpenDropProdutos=()=>setIsOpenDropProdutos(!isOpenDropProdutos)
  const [isDark,setIsDark]=React.useState(false);
  const [isBrown,setIsBrown]=React.useState(false);
  const pathname=usePathname()

  let url=pathname;

  const escuros=['/produtos/defumados','/produtos/gourmet','/receitas','/recipes','/recipes/receita'];
  const laranjas=['/produtos/lanches'];
  const claros=['/produtos','/tabelanutricional','/'];
  const outros = ['/produtos/embutidos']

  // const logoSrc= isDark ? '/assets/svgs/logo-white.svg': '/assets/svgs/d-logo.svg';

  const [tema,_]=React.useState({
    escuro:{bg:"bg-[#000]", color:"text-[#fff]",logo:"/assets/svgs/logo-white.svg",insta:"white"},
    laranja:{bg:"bg-[#ac5413]",color:"text-[#fff]",logo:"/assets/svgs/logo-white.svg",insta:"white"},
    claro:{bg:"bg-[#fff]",color:"text-[#000]",logo:"/assets/svgs/d-logo.svg",insta:"black"},
    outros: {bg:"bg-[#150000]",color:"text-[#fff]",logo:"/assets/svgs/logo-white.svg",insta:"white"},
  });
  
  const [temaAtual,setTemaAtual]=React.useState(tema['claro']);
  const [termoBuscado,setTermoBuscado]=React.useState("");
  const [emBusca,setEmBusca]=React.useState(false);

  const handleChange = (e:any) => {
    setTermoBuscado(e.target.value);
  };

  function pickTheme(lista:string[],termo:string){
    let regex = new RegExp("^(" + lista.join("|") + ")$");
    return regex.test(termo)
  }

function alternarBusca(){
  setEmBusca(!emBusca);
}

function handleBusca(){
 alternarBusca()

 if(termoBuscado && termoBuscado !== ""){
  // fazer a logica da busca aqui
  alternarBusca()
  setTermoBuscado("")
}else{
  // não faz a busca pq nao tem nada a buscar
  alternarBusca()
 }

  
}

  React.useEffect(()=>{

    if(pickTheme(escuros,pathname)){
       setTemaAtual(tema['escuro']);
      }else if(pickTheme(claros,pathname)){
        setTemaAtual(tema['claro']);
    }else if(pickTheme(laranjas,pathname)){
      setTemaAtual(tema['laranja'])
    }else if(pickTheme(outros,pathname)){
      setTemaAtual(tema['outros'])
    }
  },[pathname])
  




  return (
    <nav className={`${temaAtual.bg}   z-40 md:h-[80px]   flex align-center items-start justify-between relative md:items-center md:px-1`}>
      <Link href="/" className="logo py-2 ml-3 md:mt-0 shrink-0">
        {/* <Image className="w-[180px] " src={temaAtual.logo} alt="log" width={400} height={300}/> */}
        <LogoIcon fill={`${temaAtual.insta}`} />
      </Link>

    
      <ul 
      className={isMobileOpen  ? ` -translate-x-[900px] transition md:translate-x-0 
      h-screen md:h-auto  p-6  main-nav flex space-y-6 flex-col absolute  left-0 right-0 
      mt-[74px] md:mt-0 md:relative md:flex-row md:space-y-0  md:align-center md:items-center md:space-x-4`
    :
    ` translate-x-[0px] transition
      ${temaAtual.bg} md:bg-transparent
      h-screen md:h-auto  p-6 main-nav flex space-y-6 flex-col absolute  left-0 right-0 
      mt-[74px] md:mt-0 md:relative md:flex-row md:space-y-0  md:align-center md:items-center md:space-x-4`
    }
      >

        
         <Drep
         label='Linhas'
         dropdowncls='transition    relative  py-2  '
        buttoncls={`  p-1 font-semibold ${temaAtual.color} `}
        contentcls=' shadow-lg overflow-hidden '
        
        >
        <li className="hover:bg-[#d1d0cc]  whitespace-nowrap sm:w-full p-1 md:min-w-[150px] min-w-md md:auto px-2 cursor-pointer ">
          <Link className={``}  href="/produtos" >D'Corthes</Link>
        </li>
        </Drep>
         
     
        <li className="  py-2 rounded-md ">
        <Link className={ `${ temaAtual.color  }  py-2 rounded-md     font-semibold whitespace-nowrap`} href="/sobre"  >Sobre nós</Link>
        </li>

        <Drep
         label='Produtos'
         dropdowncls='transition   relative  py-2  '
        buttoncls={ `${temaAtual.color} p-1 font-semibold  `}
        contentcls=' overflow-hidden '
        
        >
        <li className=" hover:bg-[#d1d0cc]  whitespace-nowrap sm:w-full p-1 md:min-w-[150px] min-w-md md:auto  cursor-pointer ">
          <Link href="/produtos">D'Corthes</Link>
        </li>
        <li className=" hover:bg-[#d1d0cc]    whitespace-nowrap sm:w-full p-1 md:auto px-2 cursor-pointer "> <Link href={"/produtos/gourmet"}> D'Corthes Gourmet</Link>  </li>
        <li className=" hover:bg-[#d1d0cc]   whitespace-nowrap sm:w-full p-1 md:auto px-2 cursor-pointer "><Link href={"/produtos/defumados"}>D'Corthes Defumados</Link>  </li>
        <li className=" hover:bg-[#d1d0cc]   whitespace-nowrap sm:w-full p-1 md:auto px-2 cursor-pointer "><Link href={"/produtos/embutidos"}>D'Corthes Embutidos</Link>  </li>
        <li className=" hover:bg-[#d1d0cc]   whitespace-nowrap sm:w-full p-1 md:auto px-2 cursor-pointer "><Link href={"/produtos/lanches"}>D'Corthes Lanches </Link>  </li>
        <li className=" hover:bg-[#d1d0cc]   whitespace-nowrap sm:w-full p-1 md:auto px-2 cursor-pointer "><Link href={"/produtos/tabela"}>Tabela Nutricional </Link>  </li>
        </Drep>

      

        <Link className={`${temaAtual.color } py-2 rounded-md  font-semibold`} href="/recipes">Receitas</Link>
        <Link className={`${temaAtual.color } py-2 rounded-md  font-semibold`} href="/">Cursos</Link>
        <Link className={`${temaAtual.color } py-2 rounded-md  font-semibold`} href="/">Institucional</Link>
        <li>

        <div className="social flex space-x-4 md:hidden  px-2 py-2 rounded-md justify-start aling-center items-center ">
        
        <span className="social">
        <div className="w-8 h-8 shrink-0">
         <Link className="cursor-pointer" href="https://www.instagram.com/dcorthes.carnesnobres/" > <InstagramIcon  fill={temaAtual['insta']} />  </Link>
        </div>
        </span>
       
        {/* MOBILE */}
        <div className="flex  relative  ">
     
        {/* <div className=" border-gray-700 p-[3px] min-w-[200px] absolute -top-[6px] left-0 bg-white flex gap-2 overflow-hidden"> */}
        <div className={` border-gray-700 p-[3px]  absolute -top-[18px] left-0 bg-transparent flex gap-2 overflow-hidden  ${emBusca} ? 'min-w-[200px]' : 'w-0'`}>
        <button onClick={()=>handleBusca()}><SearchIcon width={25} height={25} fill={temaAtual['insta']} /></button>
        {
          emBusca &&(
        <div>
          <input type="text" value={termoBuscado}  onChange={handleChange} placeholder="Fazer uma busca" className={`bg-transparent border-0 outline-none ${temaAtual['color']} `} />
        </div>
          )
        }
      </div>
    </div>
      </div>
        </li>
      </ul>
      {/* BUSCA DO DESKTOP */}
      <div className="social  hidden space-x-4 md:flex align-center  items-center justify-start mr-[300px]  ">
        {/* instagram */}
        <div className="w-8 h-8 shrink-0">
        <Link target='_blank' className="cursor-pointer" href="https://www.instagram.com/dcorthes.carnesnobres/" > <InstagramIcon  fill={temaAtual['insta']} />  </Link>
        </div> 
      <div className=" relative">
      
        <div className={` border-gray-700 p-[3px]  absolute -top-[19px] left-0 bg-transparent flex gap-2 overflow-hidden  ${emBusca} ? 'min-w-[200px]' : 'w-0'`}>
        <button onClick={()=>handleBusca()}><SearchIcon width={25} height={25} fill={temaAtual['insta']} /></button>
        {
          emBusca ?
        <div>
          <input type="text" value={termoBuscado}  onChange={handleChange} placeholder="Fazer uma busca" className={`bg-transparent border-0 outline-none ${temaAtual['color']} `} />
        </div>
          : null
        }
      </div>
      
    </div>

      </div>
      {/* hamburger */}
      <button onClick={toggleMobileOpen} className="mt-5 mr-3  z-30 md:hidden w-10 h-10 rounded-full   cursor-pointer text-xl flex justify-center items-center">
        {
          isMobileOpen ?
          <MenuIcon fill={temaAtual['insta']} />
          :   
          <CloseIcon fill={temaAtual['insta']} />
        }
      </button>
    </nav>
  )
}

export default Barra