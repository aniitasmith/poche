import React from 'react';
import './Footer.css';
import ButtonMenu from '../ButtonMenu/ButtonMenu';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';


const Footer = () => (
  <div className='footer'>
    <ButtonMenu text='Home' active='true'>
      <AiOutlineHome className='img-menu'/> 
    </ButtonMenu>
    <ButtonMenu text='Search'>
      <AiOutlineSearch className='img-menu'/> 
    </ButtonMenu>
    <ButtonMenu text='Profile'>
      <AiOutlineUser className='img-menu'/> 
    </ButtonMenu>
  </div>
);

export default Footer;