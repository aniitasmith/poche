import React from "react";
import ratings from '../../ratings.json';
import Card from "../card/card";
import '../CardList/cardList.css';

function CardList(props) {
  const filterRatings = ratings.filter( 
    (local) => local.ratings[0].category.name === props.category)
    
  const cardMap = filterRatings.map( 
    (local) => <Card local={local}></Card>
  ); 

  return ( 
   <>
      <div className="top-list">
        <h1 className="title-list"> Top {props.category}</h1>
        <a className="all-list" href="">View all</a>
      </div> 
      {cardMap} 

  </>)
}

export default CardList;