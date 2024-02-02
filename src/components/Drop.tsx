"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from '@heroicons/react/24/outline'

type DropProps = {
  label: string;
};
const Drop = ({ label }: DropProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Select an option");
  const dropdownRef = useRef<HTMLInputElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const options = ["Dropdown Item 1", "Dropdown Item 2", "Dropdown Item 3"];

  useEffect(() => {
    const closeDropdownOnOutsideClick = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node | null)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdownOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full  shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none  "
          id="dropdown-menu"
          onClick={toggleDropdown}>
          <span className="mr-2">{label}</span>
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />

        </button>
      </div>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dropdown-menu">
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleItemClick(option)}
                className="whitespace-nowrap block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem">
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Drop;
