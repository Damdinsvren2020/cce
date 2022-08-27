import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import SocialSection from "../../components/UI/Social/Social";
import style from "./index.css";
import * as actions from "../../store/actions/index";

class PublicationDetail extends Component {
  componentDidMount() {
    this.props.onFetchPublicationDetail(this.props.match.params.id);
  }
  render() {
    let display = <div>...</div>;
    if (!this.props.loading) {
      display = (
        <div className={style.PublicationDetailContainer}>
          <img
            className={style.PublicationDetailImg}
            src={this.props.PublicationDetail.image}
            alt="blabla"
          />
          <h1 className={style.PublicationDetailTitle}>
            {this.props.PublicationDetail.title}
          </h1>
          {renderHTML(this.props.PublicationDetail.text)}
        </div>
      );
    }
    return (
      <div>
        <div className={style.PublicationDetailSection}>
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
    PublicationDetail: state.PublicationDetail.PublicationDetail,
    loading: state.PublicationDetail.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPublicationDetail: (id) =>
      dispatch(actions.fetchPublicationDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PublicationDetail);
