import React from "react";
import "./Card.css"
type Props = {};

const Card = (props: Props) => {
  return (
    <div className="card">
      <img
        src="https://www.austinfivestarlimos.com/wp-content/uploads/2019/06/testimonials-11-110x110.jpg"
        alt="image"
      />
      <div className="details">
        <h2>AAPL</h2>
        <p>$110</p>
      </div>
      <p className="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, neque?
      </p>
    </div>
  );
};

export default Card;
