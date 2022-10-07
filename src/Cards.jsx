import React from "react";
const Cards = (props) => {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="moviepic" className="card_img" />
          <div className="card_info">
            <h3 className="card_heading">
              <span>{props.ranking}</span>
              {props.title}
            </h3>
            <p className="year">{props.year}</p>
            <p className="card_distibutor">{props.distributor}</p>
            <p className="card_amount">{props.amount}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
