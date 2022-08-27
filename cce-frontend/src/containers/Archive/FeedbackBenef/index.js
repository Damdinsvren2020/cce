import React, { Component } from "react";
import ArchiveFeedback from "../../../components/UI/Card/ArchiveFeedback/Card";
import SocialSection from "../../../components/UI/Social/Social";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import imgss from "../../../assets/images/Archives/FeedbackBenef/imgss.png";
import style from "./style.css";

class Report extends Component {
  componentDidMount() {
    this.props.onFetchFeedbackFromVenef();
  }
  state = {
    dataLength: 9,
  };
  readMoreHandler = () => {
    const growDataLength = this.state.dataLength * 2;
    this.setState({ dataLength: growDataLength });
  };
  render() {
    let displayData = null;
    let images = <div>...</div>;
    if (!this.props.loading) {
      let dataRev = [...this.props.feedbackFromBenefData.reverse()];
      displayData = dataRev.slice(0, this.state.dataLength);
      images = (
        <div className={style.FeedbackBenefContainerFull}>
          <div className={style.FeedbackBenefContainer}>
            {displayData.map((news) => {
              return <ArchiveFeedback key={news.id} imgsrc={news.image} />;
            })}
          </div>
          <button onClick={this.readMoreHandler}>
            {this.props.language === 1 ? "Илүүг унших" : "Read More..."}
          </button>
        </div>
      );
    }
    return (
      <div>
        <MenuTitle
          title={
            this.props.language === 1
              ? "Үр шим хүртэгчдийн сэтгэгдэл"
              : "Feedback from Beneficiareies"
          }
        />
        <div className={style.FeedbackBenefSection}>
          {images}
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
    feedbackFromBenefData: state.feedbackFromBenef.feedbackFromBenef,
    loading: state.feedbackFromBenef.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchFeedbackFromVenef: () => dispatch(actions.fetchFeedbackFromBenef()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
