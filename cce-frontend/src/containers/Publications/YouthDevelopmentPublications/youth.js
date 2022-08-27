import React, { Component } from "react";
import CE from "../../../components/UI/Card/Youthpublication/indexUI";
//import youthpublication from "../../../components/UI/Card/Youthpublication/publication.css";
import { connect } from "react-redux";
import youthpublication from "../../Publications/YouthDevelopmentPublications/youth.css";
//import youthpublication from "../YouthDevelopmentPublications/youth.css";
import * as actions from "../../../store/actions/youth";
import img from "../../../components/UI/Card/Cepublication/book.jpg";

class Youth extends Component {
  componentDidMount() {
    this.props.onFetchYouth();
  }
  state = {
    dataLength: 8,
  };
  readMoreHandler = () => {
    const growDataLength = this.state.dataLength * 2;
    this.setState({ dataLength: growDataLength });
  };
  render() {
    let displayData = null;
    let youthPublication = <div>...</div>;
    if (this.props.loading === false) {
      displayData = this.props.youthData.slice(0, this.state.dataLength);
      youthPublication = (
        <div style={{ textAlign: "center" }}>
          <div className={youthpublication.YouthResponsiveFull}>
            {displayData.map((youth) => {
              return (
                <CE
                  id={youth.id}
                  key={youth.id}
                  imgsrc={youth.image}
                  styleWidth="youth"
                  text={youth.text}
                  title={youth.title}
                  language={this.props.language}
                />
              );
            })}
          </div>
          <button
            className={youthpublication.newsReadMoreButton}
            onClick={this.readMoreHandler}
          >
            {this.props.language === 1 ? "Илүүг унших..." : "Read More..."}
          </button>
        </div>
      );
    }
    return (
      <div>
        <h1 className={youthpublication.YouthPrimary}>
          <i class="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? "Залуучуудын хөгжил ном"
            : "Youth development publication"}
        </h1>
        <hr className={youthpublication.YouthHr} />
        <div className={youthpublication.YouthResponsive}>
          {youthPublication}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    youthData: state.Youth.youthData,
    loading: state.Youth.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchYouth: () => dispatch(actions.fetchYouth()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Youth);
