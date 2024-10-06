import React from "react";
import Card from "../Card/Card";

interface Props {}

const CardList = (props: Props) => {
  return (
    <div>
      <Card companyName="Apple" price={1000} ticker='tickerApple'/>
      <Card companyName="Amazon" price={1200} ticker='tickerAmazon'/>
      <Card companyName="Tesla" price={3000} ticker='tickerTesla'/>
    </div>
  );
};

export default CardList;
