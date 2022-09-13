import React from "react";
import ratings from '../../ratings.json';
import Card from "../card/card";

function CardList(props) {

  const cardMap = ratings.map( 
    (rating) => <Card rating={rating}></Card>
  );

  return ( <> {cardMap} </> )
}

export default CardList;