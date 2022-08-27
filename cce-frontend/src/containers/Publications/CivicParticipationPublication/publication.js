import React, { Component } from "react";
import CE from "../../../components/UI/Card/CiParticipation/indexUI";
import civicparti from "../CivicParticipationPublication/civicparti.css";
//import { FaUserAlt } from "react-icons/fa";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/cipar";
class Publication extends Component {
  componentDidMount() {
    this.props.onFetchCipar();
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
    let publication = <div>...</div>;
    if (this.props.loading === false) {
      displayData = this.props.ciparData.slice(0, this.state.dataLength);
      publication = (
        <div style={{ textAlign: "center" }}>
          <div className={civicparti.PartiResponsiveFull}>
            {displayData.map((par) => {
              return (
                <CE
                  id={par.id}
                  key={par.id}
                  imgsrc={par.image}
                  styleWidth="par"
                  title={par.title}
                  text={par.text}
                  language={this.props.language}
                />
              );
            })}
          </div>
          <button
            className={civicparti.newsReadMoreButton}
            onClick={this.readMoreHandler}
          >
            {this.props.language === 1 ? "Илүүг унших..." : "Read More..."}
          </button>
        </div>
      );
    }
    return (
      <div>
        <h1 className={civicparti.PartiPrimary}>
          <i class="fa fa-user" aria-hidden="true"></i>
          {this.props.language === 1
            ? "Иргэдийн оролцоо ном"
            : "Citizen Participatory Publication"}
        </h1>
        <hr className={civicparti.PartiHr} />
        {/* <div className={civicparti.PartiResponsive}>{publication}</div> */}
        {publication}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ciparData: state.ciparpublication.ciparData,
    loading: state.ciparpublication.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchCipar: (ciparId) => dispatch(actions.fetchCipar(ciparId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Publication);
