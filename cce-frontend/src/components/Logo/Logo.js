import React from "react";
import LogoH from "../../assets/images/Home/logo.png";
import { connect } from "react-redux";
import classes from "./Logo.css";

class Logo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={classes.Logo} style={{ height: this.props.height }}>
        <img src={LogoH} alt="CCE logo" />
        {this.props.language === 1 ? (
          <p>Иргэний боловсролын төв</p>
        ) : (
          <p>Center for Citizenship Education</p>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { language: state.language.language };
};

export default connect(mapStateToProps)(Logo);
