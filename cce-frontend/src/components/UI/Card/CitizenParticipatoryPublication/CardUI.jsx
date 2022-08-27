import React from "react";

const Card = (props) => {
  return (
    <div className="CivicParticipationpublication card text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <p className="card-title">Card Title</p>
        <p className="card-text text-secondary">Zurag oruulaw</p>
        <a href="#" className="btn btn-outline-success">
          Үзэх
        </a>
      </div>
    </div>
  );
};

export default Card;
