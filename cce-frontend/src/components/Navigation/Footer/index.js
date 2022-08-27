import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./index.css";
import footerlogo from "../../../assets/images/footer/Footerlogo.png";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
import * as actions from "../../../store/actions/index";

const shareUrl = `localhost${window.location.pathname}`;

class Footer extends Component {
  componentDidMount() {
    this.props.onFetchNews(1);
    this.props.onFetchOurTeam(1);
    this.props.onFetchBoardMember(1);
  }
  handleLanguageMon = () => {
    this.props.onFetchLanguage(1);
    this.props.onFetchOurTeam(1);
    this.props.onFetchNews(1);
    this.props.onFetchBoardMember(1);
  };

  handleLanguageEng = () => {
    this.props.onFetchLanguage(2);
    this.props.onFetchNews(2);
    this.props.onFetchOurTeam(2);
    this.props.onFetchBoardMember(2);
  };
  render() {
    return (
      <div className={classes.FooterContainer}>
        <div className={classes.FooterInfoTitle}>
          <h1>{this.props.language === 1 ? "Холбоо барих" : "Contact Us"}</h1>
        </div>
        <div className={classes.FooterInfo}>
          <div className={classes.FooterInfoDetail}>
            {this.props.language === 1
              ? " Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, Авто замчдын гудамж, Хасвуу плаза 1-р давхар Иргэний Боловсролын Төв"
              : "Center for Citizenship Education, 1st floor Khasvuu Plaza, AvtoZamchdiin Street, Sukhbaatar District, Ulaanbaatar, Mongolia"}
          </div>

          <div className={classes.FooterInfoDetail}>
            {this.props.language === 1
              ? "Пост хаяг: Улаанбаатар 11, Утас: 976-11-313619, Имэйл: naraa_r@yahoo.com / ariuna.cce.mn@gmail.com"
              : "Post Address: Ulaanbaatar 11, Mongolia Phone/Fax:976-11-313619 Email:naraa_r@yahoo.com / ariuna.cce.mn@gmail.com"}
          </div>

          <div className={classes.FooterInfoDetail}>
            <ul className={classes.FooterLanguage}>
              <li>
                <button
                  className={classes.FooterLangButton}
                  onClick={this.handleLanguageMon}
                >
                  Монгол |
                </button>
                <button
                  className={classes.FooterLangButton}
                  onClick={this.handleLanguageEng}
                >
                  {" "}
                  English
                </button>
              </li>
            </ul>
            <ul>
              <div
                style={{
                  marginTop: "0px",
                  marginBottom: "50px",
                  textAlign: "right",
                  marginRight: "50px",
                }}
              >
                <FacebookShareButton url={shareUrl} className="m-2">
                  <FacebookIcon size={50} round={true} />
                </FacebookShareButton>
                <TwitterShareButton
                  url={shareUrl}
                  className="button"
                  style={{ margin: "5px" }}
                >
                  <TwitterIcon size={50} round={true} />
                </TwitterShareButton>
              </div>
            </ul>
          </div>
          <div className={classes.FooterInfoDetail}>
            <img style={{ borderRadius: "100px" }} src={footerlogo} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.language.language, loading: state.language.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchLanguage: (language) => dispatch(actions.fetchLanguage(language)),
    onFetchNews: (language) => dispatch(actions.fetchNews(language)),
    onFetchOurTeam: (language) => dispatch(actions.fetchOurTeam(language)),
    onFetchBoardMember: (language) => dispatch(actions.fetchBoardMember(language)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
