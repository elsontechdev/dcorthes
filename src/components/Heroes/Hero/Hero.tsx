import React from "react";



interface HeroProps {
  bg?:string;
  left: React.ComponentType<any>; // Accepts any type of React component
  right: React.ComponentType<any>; // Accepts any type of React component
}


function Hero({left,right}:HeroProps) {
  return (
    <section className=" bg-[#1D181E] md:rounded-lg md:mx-8 flex text-center lg:text-left  flex-col-reverse md:flex-row">
      {React.createElement(left)} {/* Render the passed component */}
      {React.createElement(right)} {/* Render the passed component */}
    </section>
  );
}

export default Hero;
