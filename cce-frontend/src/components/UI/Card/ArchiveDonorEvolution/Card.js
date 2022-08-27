import React from "react";
import style from "./style.css";

const Card = (props) => {
  return (
    <div className={style.DonorEvolution}>
      <div style={{ height: "100%" }}>
        <img
          src={props.imgsrc}
          alt="image1"
          className={style.DonorEvolutionImgTop}
        />
      </div>
      {/* <div className="archiveDonorEvolution-body text-dark">
        <h4 className="archiveDonorEvolution-title">News Title</h4>
        <p className="archiveDonorEvolution-text text-secondary">
          Some texts are shown here
        </p>
        <a href="/newsDetail" className="btn btn-primary">
          Read
        </a>
      </div> */}
    </div>
  );
};

export default Card;
