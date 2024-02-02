"use client"
import React, { useState, useEffect, useRef } from "react";


interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  label:string;
  options: Option[];
  select?:string
  content?:string;
}

const CustomSelect: React.FC<CustomSelectProps> = ({ options,label,select='',content='' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null); 

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(event.target as HTMLDivElement)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={selectRef}>
      <div
        className={`z-50 bg-white  px-4 py-2 border border-gray-300  cursor-pointer flex items-center justify-between w-[200px] rounded-full select-none ${select}`}
        onClick={toggleSelect}
      >
        <span className="whitespace-nowrap">{selectedOption ? selectedOption.label : `${label}`}</span>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 6L8 10L12 6" stroke="black" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

      </div>
      {isOpen && (
        <div className={`absolute mt-2 w-40 bg-white border border-gray-300 rounded ${content}`}>
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-gray-200 select-none "
              onClick={() => handleOptionClick(option)}
            >
               {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;

