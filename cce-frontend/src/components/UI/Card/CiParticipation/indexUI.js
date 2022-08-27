import React from "react";
import cistyle from "../CiParticipation/publication.css";
//import publication from "../CiParticipation/publication.css";
const index = (props) => {
  return (
    <div className={ cistyle .Parti}>
      <div className={ cistyle.overflow}>
        <div className={cistyle.Ciimage} style={{ widows: "60%" }}>
        <img src={props.imgsrc} alt="image1" className={cistyle.Partiimgtop} />
        </div>
      </div>  
      <div className={cistyle.Partibodytextdark}>
        <div className={cistyle.Partigarchig} style={{ height: "25%" }}>
        <p className={cistyle.Partititle}>{props.title}</p>
        </div>
        
        <div className={cistyle.Partireading}>
        <a href={"/publication/civic_participation/" + props.id}  
         className={cistyle.parreding}>
          {props.language === 1 ? "Унших" : "Read"}
           </a>
        </div>
      </div>
    </div>
  );
};

export default index;
