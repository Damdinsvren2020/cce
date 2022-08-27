import React, { Component } from "react";
import style from "./style.css";
import { connect } from "react-redux";
class CardRavdan extends Component {
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
                ? "Равданы Хатанбаатар"
                : " Mr. Khatanbaatar Ravdan"}
            </h2>
            <h4>
              {this.props.language === 1
                ? "Удирдах зөвлөлийн дарга"
                : " Chairman of the board of directors"}
            </h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1972-1979</b>
              {this.props.language === 1
                ? "онд МУЙС-ийг математикч мэргэжлээр төгссөн."
                : " Graduated from the National University of Mongolia with Bachelors Degree in Mathematics"}
              <br />
              <b>1977-1990</b>
              {this.props.language === 1
                ? "онд хүртэл МУЙС-д багш."
                : "Proffessor at the National University of Mongolia"}
              <br />
              <b>1990-1992</b>
              {this.props.language === 1
                ? "онд улсын бага хурлын тэргүүлэгч."
                : " Member of the State Baga Khural of Mongolia(first democratic parliament) "}
              <br />
              <b>1992-1994</b>
              {this.props.language === 1
                ? "онд МСДН-ын дэд дарга."
                : " Deputy director of the Mongolian Social Democratic Party"}
            </div>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1995-2000</b>
              {this.props.language === 1
                ? "онд Унгар улсад суух онц бөгөөд бүрэн эрхт элчин сайд."
                : " Ambassador Extraordinary and Plenipotentiary of Mongolia to Hungary "}
              <br />
              <b>2001-2005</b>
              {this.props.language === 1
                ? "онд МУ-БНХАУ-ын хилийн комист тусгай үүрэг гүйцэтгэгч элчин сайд."
                : " Ambassador at large of Mongolia and the People's Republic of China's Border, Commission "}
              <br />
              <b>2005-2009</b> 
              {this.props.language === 1
                ? "онд Казакстан улсад суух онц бөгөөд бүрэн эрхт элчин сайдын албыг тус тус хашиж байсан."
                : " Ambassador Extraordinary and Plenipotentiary of Mongolia to the Republic of Kazakhstan "}
             <br />
              <b>2010-current</b> 
              {this.props.language === 1
                ? "оноос өнөөг хүртэл УИХ-ын тамгын газар ахлах реферэнтээр ажиллаж байна."
                : " Senior Officer at the Secretarist of the Parliament of Mongolia"}
              
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

export default connect(mapStateToProps) (CardRavdan);
