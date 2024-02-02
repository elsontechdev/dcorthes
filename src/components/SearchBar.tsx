"use client"
import React, { useState,ChangeEvent } from 'react';
function SearchBox() {
    const [isFocused, setIsFocused] = useState(false);
    const [query, setQuery] = useState('');
  
    const handleInputFocus = () => {
      setIsFocused(true);
    };
  
    const handleInputBlur = () => {
      setIsFocused(false);
    };
  
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      setQuery(e.target.value);
    };
  
    return (
      <div className={`search-box bg-red-200 ${isFocused || query ? 'focused' : ''}`}>
        <input
          type="text"
          className="search-input outline-none border-none bg-none w-0 px-0  float-left text-16 transition-300"
          placeholder="Comece a procurar algo!"
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChange={handleInputChange}
          value={query}
        />
        <a href="#" className="search-btn text-white float-right w-40 h-40 rounded-50 bg-cd595a flex justify-center items-center text-decoration-none transition-300">
          {/* Ícone de Pesquisa */}
          <i className="fas fa-search">xx</i>
        </a>
      </div>
    );
  }
  
  export default SearchBox;
