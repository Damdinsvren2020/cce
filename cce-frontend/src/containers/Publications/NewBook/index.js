import React, { Component } from "react";
import Ebook from "../../../components/UI/Card/NewPublication/Ebook";

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Ebook
        path="Books/Yaagaad_Ardchilal_1989-1990/DemocracyEbook.html"
        styleEbook={{ width: "500px", height: "500px" }}
      ></Ebook>
      // <iframe
      //   title="books"
      //   src={"Books/Yaagaad_Ardchilal_1989-1990/DemocracyEbook.html"}
      //   seamless="seamless"
      //   scrolling="No"
      //   frameBorder={0}
      //   allowtransparency="true"
      //   style={{ width: "500px", height: "500px" }}
      // />
    );
  }
}

export default Test;

// class extends Ebook = () => {
//   return (
//     <iframe
//       src={"Books/Yaagaad_Ardchilal_1989-1990/DemocracyEbook.html"}
//       // seamless="seamless"
//       scrolling="No"
//       frameBorder={0}
//       // allowtransparency="true"
//       style={{ width: "500px", height: "500px" }}
//     />
//   );
// };

// export default Ebook;
