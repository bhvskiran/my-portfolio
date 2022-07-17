import React from 'react';
import "./Card.css";

const Card = (props) => {
  const {emoji, heading, desc} = props;
  return (
    <div className="card">
        <img src={emoji} alt={heading} />
        <span>{heading}</span>
        <span>{desc}</span>
        <button className="c-button">Learn More</button>
    </div>
  )
}

export default Card