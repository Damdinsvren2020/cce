import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import SocialSection from "../../components/UI/Social/Social";
import style from "./style.css";
import * as actions from "../../store/actions/index";

class ParticipationDetail extends Component {
  componentDidMount() {
    this.props.onFetchParticipationDetail(this.props.match.params.id);
  }
  render() {
    let display = <div>...</div>;
    if (!this.props.loading) {
      display = (
        <div className={style.ParticipationDetailContainer}>
          <img
            className={style.ParticipationDetailImg}
            src={this.props.participationDetail.image}
            alt="blabla"
          />
          <h1 className={style.ParticipationDetailTitle}>
            {this.props.participationDetail.title}
          </h1>
          {renderHTML(this.props.participationDetail.text)}
        </div>
      );
    }
    return (
      <div>
        <div className={style.ParticipationDetailSection}>
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
    participationDetail: state.participationDetail.participationDetail,
    loading: state.participationDetail.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchParticipationDetail: (id) =>
      dispatch(actions.fetchParticipationDetail(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ParticipationDetail);
