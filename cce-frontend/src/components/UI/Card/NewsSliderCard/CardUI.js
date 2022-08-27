import React from "react";
import wtf from "./slider1.jpg";
import cardStyle from "./card-style.css";

const Card = (props) => {
  return (
    <div className={cardStyle.newsSliderCard}>
      <div>
        <img
          src={wtf}
          alt="image1"
          className={cardStyle.newsSliderCardImgTop}
        />
      </div>
      <div className={cardStyle.newsSliderCardBody}>
        <h4 className={cardStyle.newsSliderCardTitle}>News Title</h4>
        <p className={cardStyle.newsSliderCardText}>
          Some texts are shown here
        </p>
      </div>
    </div>
  );
};

export default Card;
