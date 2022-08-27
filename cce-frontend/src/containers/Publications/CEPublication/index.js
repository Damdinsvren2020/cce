import React, { Component } from "react";
import CE from "../../../components/UI/Card/Cepublication/indexUI";
import cepublication from "../../Publications/CEPublication/bookce.css";
import img from "../../../components/UI/Card/Cepublication/book.jpg";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/index";
class ciparpublication extends Component {
  componentDidMount() {
    this.props.onFetchCepub();
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
    let book = <div>...</div>;
    if (this.props.loading === false) {
      displayData = this.props.cepubData.slice(0, this.state.dataLength);
      book = (
        <div style={{ textAlign: "center" }}>
          <div className={cepublication.CeResponsiveFull}>
            {displayData.map((pub) => {
              return (
                <CE
                  id={pub.id}
                  key={pub.id}
                  imgsrc={pub.image}
                  styleWidth="pub"
                  title={pub.title}
                  text={pub.text}
                  language={this.props.language}
                />
              );
            })}
          </div>
          <button
            className={cepublication.newsReadMoreButton}
            onClick={this.readMoreHandler}
          >
            {this.props.language === 1 ? "Илүүг унших..." : "Read More..."}
          </button>
        </div>
      );
    }

    return (
      <div>
        <h1 className={cepublication.CePrimary}>
          {this.props.language === 1
            ? "Иргэний боловсрол ном"
            : "Civic Education Publication"}
        </h1>
        <hr className={cepublication.CeHr} />
        {/* <div className={cepublication.CeResponsive}>{book}</div> */}
        {book}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cepubData: state.publicationce.cepubData,
    loading: state.publicationce.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCepub: () => dispatch(actions.fetchCepub()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ciparpublication);
