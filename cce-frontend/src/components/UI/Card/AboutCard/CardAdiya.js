import React, { Component } from "react";
import style from "./style.css";
import { connect } from "react-redux";

class CardAdiya extends Component {
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
                : "Mr. Ganbaatar Adiya"}
            </h2>
            <h4>
              Member of the board of directors
              {this.props.language === 1
                ? "Удирдах зөвлөлийн дарга"
                : "Member of the board of directors"}
            </h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1975-1980</b>
              {this.props.language === 1
                ? "Польш улсад Лодзийн их сургуулийг математикч мэргэжлээр төгссөн"
                : "Graduated from the University of Lodz with Bachelor of Science Degree in Mathematics"}
              <br />
              <b>1980-1990</b> 
              {this.props.language === 1
                ? "Он хүртэл Муйс пропессор"
                : "Professor at the National University of Mongolia"}
              <br />
              <b>1992-2000</b>
              {this.props.language === 1
                ? "хооронд УИХ-ын гишүүн"
                : "Member of the State Great Khural (Parliament of Mongolia)"}
            </div>
            <div className={style.AboutCardInfoTextleftright}>
              <b>2000-2012</b> 
              {this.props.language === 1
                ? "Үг студи үг сонины эрхлэгч"
                : "Leader of the Mongolian Social Democratic Movement; Deputy Chairman of the Mongolian Social Democrati Party; Editor-in-chief of the Ug(Word) Studio and the Ug Wordnewspaper"
              }
              
              <br />
              <b>2012-current</b> 
              {this.props.language === 1
                ? "Өнөөг хүртэл Польш улсад суугаа онц бөгөөд бүрэн эрхт элчин сайд"
                : " Ambassador Extroardinary and Plenipotentiary of Mongolia to the Republic of Poland"
                }
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

export default connect(mapStateToProps) (CardAdiya);
