import React, { Component } from "react";
import CE from "../../../components/UI/Card/Ecologipublication/indexUI";
import Ecopublication from "../../Publications/EcologiPublication/ecologi.css";
import { connect } from "react-redux";
import img from "../../../components/UI/Card/Ecologipublication/book.jpg";
import * as actions from "../../../store/actions/ecologi";

class ecologiPublication extends Component {
  componentDidMount() {
    this.props.onFetchEcologi();
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
    let ecologinom = <div>...</div>;
    if (this.props.loading === false) {
      displayData = this.props.ecologiData.slice(0, this.state.dataLength);
      ecologinom = (
        <div style={{ textAlign: "center" }}>
          <div className={Ecopublication.EcoResponsiveFull}>
            {displayData.map((eco) => {
              return (
                <CE
                  id={eco.id}
                  key={eco.id}
                  image={eco.image}
                  styleWidth="eco"
                  title={eco.title}
                  text={eco.text}
                  language={this.props.language}
                />
              );
            })}
          </div>
          <button
            className={Ecopublication.newsReadMoreButton}
            onClick={this.readMoreHandler}
          >
            {this.props.language === 1 ? "Илүүг унших..." : "Read More..."}
          </button>
        </div>
      );
    }

    return (
      <div>
        <h1 className={Ecopublication.EcoPrimary}>
          {this.props.language === 1
            ? "Экологийн боловсрол ном"
            : "Ecological Education Publication"}
        </h1>
        <hr className={Ecopublication.EcoHr} />
        {/* <div className={Ecopublication.EcoResponsive}>{ecologinom}</div> */}
        {/* {ecologinom} */}
        <div className={Ecopublication.EcoResponsive}>
          {ecologinom}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ecologiData: state.Ecological.ecologiData,
    loading: state.Ecological.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchEcologi: () => dispatch(actions.fetchEcologi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ecologiPublication);
