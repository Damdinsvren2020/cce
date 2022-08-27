import React from "react";

const Ebook = (props) => {
  return (
    <div>
      <div style={{border:"1px solid red"}}>
        <iframe
          src={props.path}
          seamless="seamless"
          scrolling="No"
          frameBorder={0}
          allowtransparency="true"
          style={props.styleEbook}
        />
      </div>
    </div>
  );
};

export default Ebook;
