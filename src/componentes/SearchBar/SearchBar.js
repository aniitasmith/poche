import React from 'react';
import './SearchBar.css';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => (
  <div className='search-wrapper'>
    <input className='search-form' type="search" placeholder="Search for local"></input>
    <AiOutlineSearch className='input-icon'></AiOutlineSearch>
  </div>
);

  export default SearchBar; 