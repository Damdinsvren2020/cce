import React from "react";
import Ecologi from "./ecologi.css";
const ecologi = (props) => {
  console.log("props", props);
  return (
    <div className={Ecologi.ECO}>
      <div className={Ecologi.ECOoverflow}></div>
      <div className={Ecologi.ECObodytextdark}>
        <p className={Ecologi.ECOtexttextsecondary}>{props.text}</p>
      </div>
    </div>
  );
};

export default ecologi;
