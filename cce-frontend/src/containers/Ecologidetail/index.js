import React, { Component } from "react";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import MenuTitle from "../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../components/UI/Social/Social";
import img from "../../assets/images/News/imgss.jpg";
import style from "./index.css";
import * as actions from "../../store/actions/index";

class ecologiDetail extends Component {
  componentDidMount() {
    this.props.onFetchecologiDetail(this.props.match.params.id);
  }
  render() {
    let ecologi = <div>...</div>;
    
    if (!this.props.loading) {
      ecologi = (
        <div className={style.ecoDetailContainer}>
          <img
            className={style.ecoDetailImg}
            src={this.props.ecologiDetail.image}
            alt="blabla"
          />
          <h1 className={style.ecoDetailTitle}>
            {this.props.ecologiDetail.title}
          </h1>
          {renderHTML(this.props.ecologiDetail.text)}
        </div>
      );
    }
    return (
      <div>
        <div className={style.ecoDetailSection}>
          {ecologi}
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
    ecologiDetail: state.ecologiDetail.ecologiDetail,
    loading: state.ecologiDetail.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchecologiDetail: (id) =>
      dispatch(actions.fetchecologiDetail(id)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ecologiDetail);
