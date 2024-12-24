// SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';
//import searchIcon from '../seo-social-web-network-internet_340_icon-icons.com_61497.ico';

const SearchBar = () => {
  const [searchVisible, setSearchVisible] = useState(false);

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
    if (!searchVisible) {
      setTimeout(() => {
        document.querySelector('.input-search').focus();
      }, 0);
    }
  };

  return (
    <div className="search-box">
      <input 
        type="text" 
        className={`input-search ${searchVisible ? 'expanded' : ''}`} 
        placeholder="Type to Search..."
      />
    </div>
  );
};

export default SearchBar;
