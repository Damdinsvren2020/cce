import React, { Component } from "react";
import style from "./style.css";
import renderHTML from "react-render-html";

class Card extends Component {
  render() {
    return (
      <div className={style.ourTeamCardContainer}>
        <div>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
          <p className={style.ourTeamCardName}>{this.props.name}</p>
          <p>{this.props.job}</p>
        </div>
        <div>
          <p className={style.ourTeamCardText}>{renderHTML(this.props.text)}</p>
        </div>
      </div>
    );
  }
}

export default Card;
