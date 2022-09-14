import React from "react";
import ratings from '../../ratings.json';
import Card from "../card/card";

function CardList(props) {

  const cardMap = ratings.map( 
    (local) => <Card local={local}></Card>
  );

  return ( <> {cardMap} </> )
}

export default CardList;