import React, { Component } from "react";
import style from "./style.css";
import renderHTML from "react-render-html";

class CardAdiya extends Component {
  render() {
    return (
      <div className={style.AboutCard}>
        <div className={style.AboutCardImgContainer}>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div className={style.AboutCardInfoContainer}>
          <div className={style.AboutCardInfoName}>
            <h2 style={{ fontWeight: "bold" }}>{this.props.name}</h2>
            <h4>{this.props.job}</h4>
          </div>
          <div className={style.AboutCardInfoText}>
            {renderHTML(this.props.text)}
          </div>
        </div>
      </div>
    );
  }
}

export default CardAdiya;
