import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./NavigationItems.css";
import NavigationItem from "./NavigationItem/NavigationItem";
import NavigationItemDrop from "./NavigationItemDrop/NavigationItemDrop";
import * as actions from "../../../store/actions/index";

class NavigationItems extends Component {
  render() {
    let display = <div>...</div>;
    if (this.props.language === 1) {
      display = (
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/" exact>
            НҮҮР
          </NavigationItem>
          <NavigationItemDrop title="БИДНИЙ ТУХАЙ" style={this.props.style} />
          <NavigationItemDrop title="ХӨТӨЛБӨР" style={this.props.style} />
          <NavigationItem link="/news">МЭДЭЭ</NavigationItem>
          <NavigationItemDrop title="АРХИВ" style={this.props.style} />
          <NavigationItemDrop title="НИЙТЛЭЛҮҮД" style={this.props.style} />
        </ul>
      );
    } else if (this.props.language === 2) {
      display = (
        <ul className={classes.NavigationItems}>
          <NavigationItem link="/" exact>
            HOME
          </NavigationItem>
          <NavigationItemDrop title="ABOUT US" />
          <NavigationItemDrop title="PROGRAMS" />
          <NavigationItem link="/news">NEWS</NavigationItem>
          <NavigationItemDrop title="ARCHIVES" />
          <NavigationItemDrop title="PUBLICATIONS" />
        </ul>
      );
    }
    return display;
  }
}

const mapStateToProps = (state) => {
  return { language: state.language.language, loading: state.language.loading };
};

export default connect(mapStateToProps)(NavigationItems);
