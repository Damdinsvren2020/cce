import React from "react";
import book from "../../Card/Ecologipublication/book.jpg";
import publication from "../Ecologipublication/publication.css";
const index = (props) => {
  return (
    <div className={publication.Eco}>
      <div className={publication.overflow}>
        <div className={publication.Ecoimage} style={{ widows: "60%" }}>
          <img
            src={props.image}
            alt="image1"
            className={publication.Ecoimgtop}
          />
        </div>
      </div>
      <div className={publication.Ecobodytextdark}>
        <div className={publication.Ecogarchig} style={{ height: "25%" }}>
          <p className={publication.Ecotitle}>{props.title}</p>
        </div>
      </div>
      <div>
        <a
          href={"/publication/ecological_education_publication/" + props.id}
          className={publication.Ecoreading}
        >
          {props.language === 1 ? "Унших" : "Read"}
        </a>
      </div>
    </div>
  );
};

export default index;
