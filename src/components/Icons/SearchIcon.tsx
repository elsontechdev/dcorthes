import * as React from "react"
interface Props{
  props?:any;
  fill?:string;
  width?:number;
  height?:number;
}
function SearchIcon({props,fill,width=25,height=25}:Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 20 19"
    >
       <path
        stroke={fill}
        strokeLinecap="round"
        strokeWidth="2"
        d="M19.25 19.25l-4.112-4.12 4.112 4.12zm-1.833-9.625a7.792 7.792 0 11-15.584 0 7.792 7.792 0 0115.584 0v0z"
      ></path>
    </svg>
  );
}

export default SearchIcon;