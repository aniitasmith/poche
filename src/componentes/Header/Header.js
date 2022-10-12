import React from 'react';
import './header.css';
import ButtonNewRating from '../ButtonNewRating/ButtonNewRating.js';
import ButtonBackHeader  from '../ButtonBackHeader/ButtonBackHeader.js'

const Header = (props) => {
  let headerButton;

  switch(props.page){
    case 'home':
      headerButton = <div className='main-title'> Poche </div>
      break;
    case 'LocalProfile':
      headerButton = <ButtonBackHeader></ButtonBackHeader>
      break;
    default:
      headerButton = null;
      break;
  }

  return (
    <div className='header'>
      {headerButton}
      <ButtonNewRating> New Rating </ButtonNewRating>
    </div>
  );
};
export default Header;