import React, { Component } from "react";
import style from "./style.css";
import { connect } from "react-redux";
class CardSainbayar extends Component {
  state = {
    language: 1,
  };
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
                ? "Сайнбаярын Уянга"
                : " Mrs. Uyanda Sainbayar"}
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
                ? "Муйс ийг түүхч түүхийн багш мэргэжлээр төгссөн"
                : " Graduated from the National University of Mongolia with Bachelor of Arts Degree in History and Histor Teacher She is one of the contributing authors of Civic Education textbooks of General Educations School of Mongolia"}
              <br />
              <b>2006-current</b> 
              {this.props.language === 1
                ? "Нийслэлийн ерөнхий боловсролын 6-р сургуульд Түүх-нийгмийн ухааны багшаар ажиллаж байна.ЕБС-ийн иргэний боловсролын сурах бичиг зохиогчдын нэг"
                : " Teacher of History and Civic Education at the 6th Secondary School of Ulaanbaatar, Mongolia"}
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


export default connect(mapStateToProps) (CardSainbayar);
