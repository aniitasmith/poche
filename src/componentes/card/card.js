import React from "react";
import { AiFillStar} from 'react-icons/ai';
import './card.css';
import Location from "../location/Location";

function Card({ local: {name, city, country, ratings} }) {
  
 return (
    <div className='card'>
      <Location></Location>
      <div className='card-text'>
        <h3 className='place'> {name} </h3>
        <h4 className='locale'> {city}, {country} </h4>
      </div>
      <div className='rating-container'>
        <AiFillStar className='star'></AiFillStar>
        <div className='rating'> {ratings[0].rating} </div>
      </div>
    </div>
  ) 
};    

export default Card;