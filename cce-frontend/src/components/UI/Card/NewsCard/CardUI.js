import React from "react";
import renderHTML from "react-render-html";
import newsCard from "./style.css";

const Card = (props) => {
  return (
    <div
      className={
        props.styleWidth === "home"
          ? newsCard.newsCardHome
          : newsCard.newsCardNews
      }
    >
      <div className={newsCard.newsCardImgTop}>
        <img src={props.imgsrc} alt="image1" />
      </div>
      <div className={newsCard.newsCardBody}>
        <p className={newsCard.newsCardTitle}>{props.title}</p>
        <p className={newsCard.newsCardDate}>
          {props.date.substr(0, props.date.indexOf("T"))}
        </p>
      </div>
      <div className={newsCard.newsCardButton}>
        <a href={"/newsDetail/" + props.id}>
          {props.language === 1 ? "Унших" : "Read"}
        </a>
      </div>
    </div>
  );
};

export default Card;
