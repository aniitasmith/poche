import React from 'react';
import './header.css';
import ButtonNewRating from '../ButtonNewRating/ButtonNewRating.js';
import ButtonBackHeader  from '../ButtonBackHeader/ButtonBackHeader.js'

const Header = (props) => {

  return (
    <div className='header'>
      {props.page === 'home' ? <div className='main-title'> Poche </div> : null }
      {props.page === 'LocalProfile' ? <ButtonBackHeader></ButtonBackHeader> : null }
      <ButtonNewRating> New Rating </ButtonNewRating>
    </div>
  )

};
export default Header;