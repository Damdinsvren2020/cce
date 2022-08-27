import React, { Component } from "react";
import { connect } from "react-redux";
import intro from "./Intro.css";

class Intro extends Component {
  render() {
    return (
      <div className={intro.HomeIntro}>
        <h1 className={intro.HomeIntroTitle}>
          {this.props.language === 1
            ? "Иргэний Боловсролын төв (ИБТ) нь Монгол улсад ардчилсан иргэний нийгмийг төлөвшүүлэн хөгжүүлэх үйлсэд хувь нэмрээ оруулах зорилгоор байгуулагдсан ашгийн бус, нийгэмд үйлчилдэг төрийн бус байгууллага юм."
            : "CCE is a non-profit,community serving NGO with the purpose of contrubuting to the development of democratic civil society in Mongolia."}
        </h1>
        <hr className={intro.HomeIntroHr} />
        <p className={intro.HomeIntroText}>
          {this.props.language === 1
            ? " Анх 1992 онд Төв Азийн Хөгжлийн Сан нэртэй байгуулагдсан анхны төрийн бус байгууллагуудын нэг бөгөөд 1995 оноос Иргэний Боловсролын Төв хэмээн нэрээ өөрчилсөн. ИБТ нь иргэний боловсрол, иргэдийн оролцоо, төрийн бус байгууллагын менежмент, экологийн боловсрол зэрэг чиглэлээр сургалт семинар зохион байгуулах, сургалтын хөтөлбөр боловсруулах, ном, сурах бичиг, гарын авлага хэвлэн нийтлэх, мэргэжлийн зөвлөгөө өгөх, үндэсний болон олон улсын хурал, арга хэмжээ зохион байгуулах зэрэг үйл ажиллагаа явуулдаг."
            : "Founded in 1992, CCE,originally named Central Asia Development Foundation (CADF) was one of the oldest NGOs in Mongolia.Since 1995,it has been named the Centre of Citizenship Education (CCE),CCE organises workshops,training on civis education,citizens'participation, NGO management and ecological education;develops training curriculum;publishes textbooks, book and manuals;provides professional advice and organises national and international conferences and seminars."}
        </p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(Intro);
