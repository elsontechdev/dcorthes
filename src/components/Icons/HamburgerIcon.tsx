import * as React from "react"
interface Props{
  props?:any;
  fill?:string;
  width?:number;
  height?:number;
}
function HamburgerIcon({props,fill,width=25,height=25}:Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 19"
    >
     <path
        strokeLinecap="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      ></path>
    </svg>
  );
}

export default HamburgerIcon;