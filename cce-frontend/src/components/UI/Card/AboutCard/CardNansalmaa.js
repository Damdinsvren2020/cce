import React, { Component } from "react";
import style from "./style.css";
import { connect } from "react-redux";

class CardNansalmaa extends Component {
  state = {
    language: 1,
  }
  render() {
    return (
      <div className={style.AboutCard}>
        <div className={style.AboutCardImgContainer}>
          <img src={this.props.imgsrc} alt="boardMemberImage" />
        </div>
        <div className={style.AboutCardInfoContainer}>
          <div className={style.AboutCardInfoName}>
            <h2 style={{ fontWeight: "bold" }}>
            {this.props.language === 1
                ? "Пүрэвдоржийн Нансалмаа"
                : " Mrs. Nansalmaa Purevdorj"}
              </h2>
            <h4>
            {this.props.language === 1
                ? "Удирдах зөвлөлийн дарга"
                : "Member of the board of directors"}
            </h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
              <b>2002-2006</b>
              {this.props.language === 1
                ? "Монголын үндэсний их сургууль төгссөн"
                : " Businesswoman Graduated from the National University of Mongolia with LLM"}
              <br />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};

export default  connect(mapStateToProps) (CardNansalmaa);
