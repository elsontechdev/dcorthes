export const reservas=[
    {
        img:"/assets/images/card1.png",
        desc:"croquete de carne com molho"
    },
    {
        img:"/assets/images/card2.png",
        desc:"carne de cordeiro"
    },
    {
        img:"/assets/images/card3.png",
        desc:"carne de panela com batata"
    },
]


export 
const faq=[
  {
   title:"Como faço pra redefinir minha senha?",
   content:"No menu de suporte escolha redefir senha"
  },
  {
   title:"Quais o metodos de pagamentos aceitos?",
   content:"cartão, pix, transferência e confiança"
  },
  {
   title:"Como entro em contato com o suporte?",
   content:"Email, telefone e redes sociais"
  },
  {
   title:"como faço pra visitar a fábrica?",
   content:"No  mapa encontre a filial mais perto de você"
  },
 ]

export 

const  outrasReceitas=[
  {
    img:"/assets/images/outra-receita-1.png",
    title:"Chicken Meatball with Creamy Chees...",
    hilite:false,
  },
  {
    img:"/assets/images/outra-receita-2.png",
    title:"The Creamiest Creamy Chicken an...",
    hilite:false,
  },
  {
    img:"/assets/images/outra-receita-3.png",
    title:"The Best Easy One Pot Chicken and Rice",
    hilite:false
  },
  {
    img:"/assets/images/outra-receita-4.png",
    title:"",
    hilite:true
    
  },
 
]



export const receita={
indedientes:[
  "2 xícaras (300g) de Presunto Cozido Sadia cortado em cubos pequenos",
  "4 colheres (sopa) de azeite",
  "1 cebola picada",
  "2 dentes de alho picados",
  "1 xícara de ervilhas em lata ou congeladas",
  "1 xícara de cenoura picada em cubos pequenos",
  "4 xícaras de arroz cozido",
  "4 colheres (sopa) de shoyu ou a gosto",
  "½ xícara de cheiro verde picado",
  "4 ovos",
  "Sal e pimenta-do-reino a gosto",
],
modoPreparo:[
  "1. Em uma frigideira grande, em fogo médio, aqueça 3 colheres (sopa) de azeite e refogue a cebola, o alho, as ervilhas e a cenoura por cerca 3 minutos.",
"2. Adicione o arroz e o Presunto Cozido Sadia em cubos, refogue por mais 2 minutos. Junte o shoyu e o cheiro verde e retire do fogo.",
"3. Em uma frigideira média aqueça o restante do azeite e prepare os ovos mexidos. Tempere com sal e pimenta do reino a gosto.",
"4. Adicione os ovos ao arroz, misture e sirva.",
"Obs: Para esta receita você pode aproveitar sobras de legumes que tiver na sua geladeira! Compartilhe essa receita",
]

}




export const instagramPosts=[
  {img:"/assets/images/instagramposts/1.png"},
  {img:"/assets/images/instagramposts/2.png"},
  {img:"/assets/images/instagramposts/3.png"},
  {img:"/assets/images/instagramposts/4.png"},
]

export const menu=[
    {
        title:'marketing',
        path:'/marketing',
        cName:"dropdown-link"
    },
    {
        title:'produtos',
        path:'/produtos',
        cName:"dropdown-link"
    },
    {
        title:'pontos de venta',
        path:'/pontosdevenda',
        cName:"dropdown-link"
    },
]




   export  interface Customer{
        name: string;
        img: string;
        stars: number;
        review: string;
        occupation: string;
      }


      export const costumers= [
        {
          name:"Kelly",
          img:"/assets/images/kelly.png",
          stars:1,
          review:"Adoro essa carne a qualidade é ótima e a embalagem é bem segura, vale a pena.",
          occupation:"Empresária",
        },
        {
          name:"Elson",
          img:"/assets/images/elson.png",
          stars:2,
          review:"Eu adorei a acessiblidade e agilidade no atendimento, recomendo!!",
          occupation:"Programador",
        },
        {
          name:"Rebeca",
          img:"/assets/images/rebeca.png",
          stars:3,
          review:"Eu amei tudo o design do site, muito facil de encotrar o que preciso, estão de parabéns!!",
          occupation:"Estilista",
        },
        {
          name:"Kelly 2",
          img:"/assets/images/kelly.png",
          stars:4,
          review:"Adoro essa carne a qualidade é ótima e a embalagem é bem segura, vale a pena.",
          occupation:"Empresária",
        },
        {
          name:"Elson 2",
          img:"/assets/images/elson.png",
          stars:5,
          review:"Eu adorei a acessiblidade e agilidade no atendimento, recomendo!!",
          occupation:"Programador",
        },
        {
          name:"Rebeca 2",
          img:"/assets/images/rebeca.png",
          stars:3,
          review:"Eu amei tudo o design do site, muito facil de encotrar o que preciso, estão de parabéns!!",
          occupation:"Estilista",
        },
        
        ];


        export interface Produto{
          id:string;
          img:string;
          tabela:string;
          titulo:string;
          cta1:{rotulo:string,url:string},
          cta2:{rotulo:string,url:string},
          avaliacoes?:number,
          fav?:boolean
        }