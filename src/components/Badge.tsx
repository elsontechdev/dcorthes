import React from 'react'

interface BadgeProps {
    svg: React.ReactNode; // SVG component or JSX element
    width: number;
    height: number;
    bgcolor:string
  }
  
  const Badge: React.FC<BadgeProps> = ({ svg, width, height,bgcolor }) => {
    return (
      <div className={` bg-[${bgcolor}] p-2 rounded-full flex items-center justify-center pt-3 align-center w-[${width}] h-[${height}]`}>

      <div style={{ width, height }} className="badge">
        {svg}
      </div>
      </div>
    );
  };
  

export default Badge