import React from "react";
import renderHTML from "react-render-html";
import style from "./style.css";

const Card = (props) => {
  return (
    <div className={style.archiveSuccessStories}>
      <div className={style.archiveSuccessStoriesImgTop}>
        <img src={props.imgsrc} alt="image1" />
      </div>
      <div className={style.archiveSuccessStoriesBody}>{props.title}</div>
      <div className={style.archiveSuccessStoriesDate}>
        <span>{props.date}</span>
      </div>
      <div className={style.newsCardButton}>
        <a href={"/archive/success_stories/" + props.id}>
          {props.language === 1 ? "Унших" : "Read"}
        </a>
      </div>
    </div>
  );
};

export default Card;
