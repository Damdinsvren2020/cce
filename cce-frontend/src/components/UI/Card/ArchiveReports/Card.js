import React from "react";
import style from "./style.css";

const Card = (props) => {
  return (
    <a href={props.link} target={"_blank"} className={style.ArchiveReportCard}>
      <div style={{ height: "100%" }}>
        <img
          src={props.imgsrc}
          alt="image1"
          className={style.ArchiveReportCardImg}
        />
      </div>
    </a>
  );
};

export default Card;
