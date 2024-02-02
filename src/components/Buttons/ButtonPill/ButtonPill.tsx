export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant: 'filled' |'ghost' ;
  destination?:string;
  
  
}
import { useRouter } from "next/navigation";

export function ButtonPill(props: ButtonProps) {
  const { variant,destination, ...rest } = props;
  let classes="";

  if(variant==='filled'){
    classes="text-white capitalize text-[12px] font-jost font-bold bg-[#E0AA2C] rounded-[20px] px-2 py-[4px]"
  }else if(variant==='ghost') {
    classes="text-[#333] capitalize text-[12px] font-bold font-jost border-2 border-[#E0AA2C] bg-white rounded-[20px] px-2 py-[4px]"
  }

  const router=useRouter();
  

  return <button onClick={()=>{
    if(destination){
      router.push(destination)
    }
  }} className={classes} {...rest} ></button>;
}