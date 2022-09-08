import React from 'react';
import './ButtonNewRating.css';
import { AiOutlinePlus } from 'react-icons/ai';

const ButtonNewRating = (props) => (
  <div 
  className='button-new-rating'
  onClick={props.createRating}>
    <AiOutlinePlus className='img-new-rating'/>
    {props.children}
  </div>
);    

export default ButtonNewRating;