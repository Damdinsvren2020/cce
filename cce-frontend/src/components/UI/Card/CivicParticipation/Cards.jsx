import React, { Component } from "react";
import Card from "./CardUI";
import img1 from "./slider1.jpg";

class Cards extends Component {
  render() {
    return (
      <div style={{ width: "1200px", margin: "0 auto" }}>
        <hr />
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-4">
              <Card imgsrc={img1} title="console" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img1} title="console" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img1} title="console" />
            </div>
            <hr />
            <div className="col-md-4">
              <Card imgsrc={img1} title="console" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img1} title="console" />
            </div>
            <div className="col-md-4">
              <Card imgsrc={img1} title="console" />
            </div>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Cards;
