import React from 'react';
import './ButtonMenu.css';

function ButtonMenu(props) {

  const isButtonActive = props.active ? 'active' : '';

  return (
    <div 
    className={`button-menu ${isButtonActive}`.trimEnd() }>
      {props.children}
      {props.text}
    </div>
    ) 
};    

export default ButtonMenu;