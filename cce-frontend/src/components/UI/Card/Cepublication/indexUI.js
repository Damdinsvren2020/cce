import React from "react";
import publication from "../Cepublication/publication.css";
const index = (props) => {
  return (
    <div className={publication.Ce}>
      <div className={publication.overflow}>
        <div className={publication.Ceimage} style={{ widows: "60%" }}>
          <img src={props.imgsrc} alt="image1" className={publication.Ceimgtop} />
        </div>
      </div>
      <div className={publication.Cebodytextdark}>
        <div className={publication.Cegarchig} style={{ height: "25%" }}>
          <p className={publication.Cetitle}>{props.title}</p>
        </div>

        <div className={publication.Cereading}>
          <a href={"/publication/civic_education/" + props.id}
           className={publication.cereding}>
           {props.language === 1 ? "Унших" : "Read"}
           </a>
        </div>
      </div>
    </div>
  );
};

export default index;
