import React from 'react';
import './ButtonBackHeader.css';
import { IoChevronBackOutline } from 'react-icons/io5';

const ButtonBackHeader = (props) => (
  <div 
  className='button-back-header'
  onClick={console.log(' ')}>
    <IoChevronBackOutline className='img-back'/>
    {props.children}
  </div>
);    

export default ButtonBackHeader;