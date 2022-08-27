import React from "react";
import style from "./Partners.css";

const Card = (props) => {
  return (
    <div className={style.Partners}>
      <a href={props.title} target="blank">
        <div>
          <div>
            <img src={props.imgsrc} alt="image1" />
          </div>
        </div>
      </a>
      <div>
        <p className={style.PartnersText}>{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
