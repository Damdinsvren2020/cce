import React from "react";
import style from "./style.css";

const Card = (props) => {
  return (
    <div className={style.archiveFeedBack}>
      <div style={{ height: "100%" }}>
        <img
          src={props.imgsrc}
          alt="image1"
          className={style.archiveFeedBackImgTop}
        />
      </div>
    </div>
  );
};

export default Card;
