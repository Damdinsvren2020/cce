import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../../components/UI/Social/Social";
// import img from "../../assets/images/News/imgss.jpg";
import style from "../../NewsDetail/index.css";
import * as actions from "../../../store/actions/index";

class StoriesDetail extends Component {
  componentDidMount() {
    this.props.onFetchStoriesDetail(this.props.match.params.id);
  }
  render() {
    let display = <div>...</div>;
    if (!this.props.loading) {
      display = (
        <div className={style.newsDetailContainer}>
          <img
            className={style.newsDetailImg}
            src={this.props.storiesDetail.image}
            alt="blabla"
          />
          <h1 className={style.newsDetailTitle}>
            {this.props.storiesDetail.title}
          </h1>
          {renderHTML(this.props.storiesDetail.text)}
        </div>
      );
    }
    return (
      <div>
        <MenuTitle
          title={
            this.props.language === 1 ? "Амжилтын түүхүүд" : "Succes Stories"
          }
        />
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
    storiesDetail: state.storiesDetail.storiesDetail,
    loading: state.storiesDetail.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchStoriesDetail: (id) => dispatch(actions.fetchStoriesDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoriesDetail);
