import React from 'react';
import './Card.css';

const Card = ({ item, price }) => {
  return (
    <div className="outerCard">
      <div className="innerCard" />
      <div className="itemTitle">{item}</div>
      <div className="itemPrice">${price}</div>
    </div>
  );
};

export default Card;
