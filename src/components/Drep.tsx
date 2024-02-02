"use client"
import React, { useState, useRef } from 'react';
import useClickOutside from '@/other/hooks/use-clickoutside';
import Image from 'next/image';

interface DrepDrops{
    children:React.ReactNode;
    dropdowncls?:string;
    contentcls?:string;
    buttoncls?:string;
    label?:string;
    
}

function Drep({label='label aqui',children,contentcls,buttoncls,dropdowncls}:DrepDrops) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleUlClick = (event: React.MouseEvent<HTMLUListElement>) => {
    const target = event.target as HTMLLIElement; // Cast the target to HTMLLIElement
    if (target.tagName === 'LI') {
      handleOptionClick(target.textContent || ''); // Extract text content and handle the click
    }
  };

  // Use the custom hook to handle click outside events
  useClickOutside(dropdownRef, () => {
    setIsOpen(false);
  });

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`  inline-block  relative ${dropdowncls}`}>
    <div className='flex justify-start align-center items-center'>
      <button onClick={toggleDropdown} className={`${buttoncls} whitespace-nowrap`}>{label}</button>
      <Image className="w-3 mt-1  inline-block" src={isOpen ? "/assets/svgs/caret-down.png":"/assets/svgs/caret-down.png"} width={10} height={10} alt="caret" />

    </div>
      {isOpen && (
        <div ref={dropdownRef} className={`${isOpen ? 'slideup':'slidedown'} border  rounded-bl-xl rounded-br-xl  md:absolute left-0  bg-[#F9F7F3] z-40 ${contentcls}`}>
          
          <ul 
          ref={ulRef}
           className={`${contentcls}`}
          onClick={handleUlClick}>
            
          {children}
          </ul>
        </div>
      )}
      {/* {selectedOption && <p>Selected Option: {selectedOption}</p>} */}
    </div>
  );
}

export default Drep;
