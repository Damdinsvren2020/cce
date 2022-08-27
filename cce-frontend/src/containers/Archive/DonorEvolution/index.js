import React, { Component } from "react";
import ArchiveDonorEvolution from "../../../components/UI/Card/ArchiveDonorEvolution/Card";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../../components/UI/Social/Social";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import imgss from "../../../assets/images/Archives/DonorsEvolution/imgss.png";
import style from "./style.css";

class DonorsEvaluation extends Component {
  componentDidMount() {
    this.props.onFetchDonorsEvaluation();
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
    let donors = <div>...</div>;
    if (!this.props.loading) {
      displayData = this.props.donorsEvaluationData.slice(
        0,
        this.state.dataLength
      );
      donors = (
        <div className={style.DonorEvolutionContainerFull}>
          <div className={style.DonorEvolutionContainer}>
            {displayData.map((donor) => {
              return (
                <ArchiveDonorEvolution
                  id={donor.id}
                  key={donor.id}
                  imgsrc={donor.image}
                />
              );
            })}
          </div>
          <button onClick={this.readMoreHandler}>
            {" "}
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
              ? "Хандивлагчийн үнэлгээ"
              : "Donor's Evaluation"
          }
        />
        <div className={style.DonorEvolutionSection}>
          {donors}
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
    donorsEvaluationData: state.donorsEvaluation.donorsEvaluationData,
    loading: state.donorsEvaluation.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDonorsEvaluation: () => dispatch(actions.fetchDonorsEvaluation()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DonorsEvaluation);
