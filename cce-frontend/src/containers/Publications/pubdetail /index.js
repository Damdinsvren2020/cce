import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from 'react-render-html';
import img from "../../../assets/images/Publications/irgeniibolowsrol3.jpg";
import style from "./index.css";
import * as actions from "../../../store/actions/index";

class pubDetail extends Component {
  componentDidMount() {
    this.props.onFetchPubDetail(this.props.match.params.id);
  }
  render() {
    let nomvzeh = <div>...</div>;
    if (!this.props.loading) {
      nomvzeh = (
        <div className={style.pubDetailContainer}>
          <img className={style.pubDetailImg} src={img} alt="blabla" />
          <h1 className={style.pubDetailTitle}>
            {this.props.pubDetail.title}
          </h1>
          {/* <p className={style.newsDetailText}>{this.props.newsDetail.text}</p> */}
          {(renderHTML(this.props.pubDetail.text))}
        </div>
      );
    }
    return (
      <div>
        
        <div className={style.pubDetailSection}>
          {nomvzeh}
          <div className={style.socialContainer} >

          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pubDetail: state.pubDetail.pubDetail,
    loading: state.pubDetail.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchPubDetail: (id) => dispatch(actions.fetchPubDetail(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(pubDetail);
