import React from 'react';
import './ButtonMenu.css';

function ButtonMenu(props) {
  return (
    <div 
    className={`button-menu ${props.active ? 'active' : ''}`.trimEnd() }>
      {props.children}
      {props.text}
    </div>
    ) 
};    

export default ButtonMenu;