import React from "react";

const Card = (props) => {
  return (
    <div className="irgeniicard text-center shadow">
      <div className="overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">Card Title</h4>
        <p className="card-text text-secondary">Zurag oruulaw</p>
        <a href="#" className="btn btn-outline-success">
          Үзэх
        </a>
      </div>
    </div>
  );
};

export default Card;
