import React, { Component } from "react";
import style from "./style.css";
import { connect } from "react-redux";
class CardChultem extends Component {
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
              {this.state.language === 1
                ? "Чүлтэмийн Лхагважав"
                : "Dr. Lkhagvajav Chultem"}
            </h2>
            <h4>
              {this.props.language === 1
                ? "Удирдах зөвлөлийн дарга"
                : "Member of the board of directors"}
            </h4>
          </div>
          <div className={style.AboutCardInfoText}>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1968-1973</b>
              {this.props.language === 1
                ? "онд М.В.Ломоносовын нэрэмжит Москвагийн улсын их сургуулийн физикийн факультетыг асрономич,астрофизикийн мэргэжлээр төгссөн."
                : " Graduated the M.V.Lomonosov Moscow State University with Bachelor of Science Degree in Astonomy,Astrophysics Secretary General of the Board of Mongolian National Council Intercosmos"}
              <br />
              <b>1973-1976</b>
              {this.props.language === 1
                ? "оноос ШУА-ийн Одон орныг судлах оргилд эрдэм шинжэлгээний ажилтнаар"
                : "Researcher at the Astronomy Research Center of the Mongolian Academy of Sciences"}
              <br />
              <b>1976-1980</b>
              {this.props.language === 1
                ? "онд мөн их сургуулийн аспирантурт нарны физик мэргэшлээр физик математикийн ухааны дэд докторын phd зэрэг хамгаалсан. "
                : "Ph.D in Physics-Mathematics Solar Physics at the National University of Mongolia "}
              <br />
              <b>1980-1990</b>
              {this.props.language === 1
                ? "онд ШУА-ийн Физик Техникийн Хүрээлэнгийн Сансар судлалийн секторын эрхлэгч,Монголын Интеркосмос үндэсний зөвлөлийн нарийн бичгийн дарга"
                : "Chief of the Astrospace Research sector of the Physics, Technological Institute of the Mongolian Academy of Sciences"}
            </div>
            <div className={style.AboutCardInfoTextleftright}>
              <b>1991-1995</b>
              {this.props.language === 1
                ? "оноос одон орон судлах оргилд астрофизикийн секторын эрхлэгч,астрофизикийн судалгааны төслийн удирдагч"
                : "Chief of the Astrospace Research sector of the Physics, Technological Institute of the Mongolian Academy of Sciences and project leader of the Astrophysics Research"}
              <br />
              <b>1996-2000</b> 
              {this.props.language === 1
                ? "Монгол улсын засгийн газрын гишүүн"
                : "Member of the Cabinet, Minister of Education; Advisor to the Prime Minister of Mongolia; Advisor to the Speake of the Parliament of Mongolia"}
               <br />
              <b>2002-2010</b>
              {this.props.language === 1
                ? "Муйс-ын физик электроник сургуулийн захирал"
                : "Director of the School of Physics and Electronics of the National University of Mongolia "}
              <br />
              <b>2004-current</b> 
              {this.props.language === 1
                ? "Боловсорлын сайдын зөвлөх"
                : "Advisor to the Minister of Education and Science of Mongolia"}
              
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

export default connect(mapStateToProps) (CardChultem);
