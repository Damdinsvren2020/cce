import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import MenuTitle from "../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../components/UI/Social/Social";
import img from "../../assets/images/News/imgss.jpg";
import style from "./index.css";
import * as actions from "../../store/actions/index";

class NewsDetail extends Component {
  componentDidMount() {
    this.props.onFetchNewsDetail(this.props.match.params.id);
  }
  render() {
    let display = <div>...</div>;
    if (!this.props.loading) {
      display = (
        <div className={style.newsDetailContainer}>
          <img
            className={style.newsDetailImg}
            src={this.props.newsDetail.image}
            alt="blabla"
          />
          <h1 className={style.newsDetailTitle}>
            {this.props.newsDetail.title}
          </h1>
          {renderHTML(this.props.newsDetail.text)}
        </div>
      );
    }
    return (
      <div>
        <MenuTitle title={this.props.language === 1 ? "Мэдээ" : "News"} />
        <div className={style.newsDetailSection}>
          {display}
          <div className={style.socialContainer}>
            <SocialSection />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsDetail: state.newsDetail.newsDetail,
    loading: state.newsDetail.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchNewsDetail: (id) => dispatch(actions.fetchNewsDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsDetail);
