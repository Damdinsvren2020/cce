import React from "react";

const Card = (props) => {
  return (
    <div className="Youthdevelopmentpublication card text-center shadow">
      <div className="Youthdevelopmentpublication overflow">
        <img src={props.imgsrc} alt="image1" className="card-img-top" />
      </div>
      <div className="Youthdevelopmentpublication card-body text-dark">
        <h4 className="Youthdevelopmentpublication card-title">Card Title</h4>
        <p className="Youthdevelopmentpublication card-text text-secondary">
          Zurag oruulaw
        </p>
        <a
          href="#"
          className="Youthdevelopmentpublication btn btn-outline-success"
        >
          Үзэх
        </a>
      </div>
    </div>
  );
};

export default Card;
