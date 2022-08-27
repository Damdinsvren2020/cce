import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import MenuTitle from "../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../components/UI/Social/Social";
import img from "../../assets/images/News/imgss.jpg";
import style from "./index.css";
import * as actions from "../../store/actions/index";

class youthPublicationDetail extends Component {
  componentDidMount() {
    this.props.onFetchyouthdevelopmentDetail(this.props.match.params.id);
  }
  render() {
    let book = <div>...</div>;
    if (!this.props.loading) {
      book = (
        <div className={style.youthPublicationDetailContainer}>
          <img
            className={style.youthPublicationDetailImg}
            src={this.props.youthdevelopmentDetail.image}
            alt="blabla"
          />
          <h1 className={style.youthPublicationDetailTitle}>
            {this.props.youthdevelopmentDetail.title}
          </h1>
          {renderHTML(this.props.youthdevelopmentDetail.text)}
        </div>
      );
    }
    return (
      <div>
        <div className={style.youthPublicationDetailSection}>
          {book}
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
    youthdevelopmentDetail: state.youthdevelopmentDetail.youthdevelopmentDetail,
    loading: state.youthdevelopmentDetail.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchyouthdevelopmentDetail: (id) =>
      dispatch(actions.fetchyouthdevelopmentDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(youthPublicationDetail);
