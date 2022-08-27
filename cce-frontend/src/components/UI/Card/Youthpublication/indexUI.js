import React from "react";
//import book from "../Youthpublication/book.jpg";

import publication from "../Youthpublication/publication.css";
const index = (props) => {
  return (
    <div className={publication.Youth}>
    <div className={publication.overflow}>
      <div className={publication.Youthimage} style={{ widows: "60%" }}>
        <img src={props.imgsrc}  alt="image1" className={publication.Youthimgtop} />
      </div>
    </div>
    <div className={publication.Youthbodytextdark}>
      <div className={publication.Youthgarchig} style={{ height: "25%" }}>
        <p className={publication.Youthtitle}>{props.title}</p>
      </div>

      <div className={publication.Youthreading}>
        <a href={"/publication/youth_development/"+props.id} className={publication.Youthreding}>
        {props.language === 1 ? "Унших" : "Read"}
        </a>
      </div>
    </div>
  </div>
  );
};

export default index;
