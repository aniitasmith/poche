import React from 'react';
import './header.css';
import ButtonNewRating from '../ButtonNewRating/ButtonNewRating.js';

const Header = () => (
  <div className='header'>
    <div className='main-title'> Poché </div>
    <ButtonNewRating> New Rating </ButtonNewRating>
  </div>
);

export default Header;