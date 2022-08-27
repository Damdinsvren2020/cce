import React, { Component } from "react";
import { connect } from "react-redux";
import classes from "./BoardMembers.css";
import Card from "../../../components/UI/Card/AboutCard/Card";
import CardRavdan from "../../../components/UI/Card/AboutCard/CardRavdan";
import CardChultem from "../../../components/UI/Card/AboutCard/CardChultem";
import CardAdiya from "../../../components/UI/Card/AboutCard/CardAdiya";
import CardSainbayar from "../../../components/UI/Card/AboutCard/CardSainbayar";
import CardNansalmaa from "../../../components/UI/Card/AboutCard/CardNansalmaa";
import {
  GAdiya,
  KhRavdan,
  LChultem,
  no_image,
} from "../../../assets/images/AboutUs/BoardMembers";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";

class BoardMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    let display = <div>...</div>;
    if (!this.props.loading) {
      display = this.props.boardmemberData.map((item) => {
        return (
          <Card
            name={item.name}
            job={item.job}
            imgsrc={item.image}
            text={item.text}
            key={item.id}
          ></Card>
        );
      });
    }
    return (
      <div>
        <MenuTitle
          title={this.props.language === 1 ? "Удирдах зөвлөл" : "Board Members"}
        />
        {display}

        {/* <CardRavdan imgsrc={KhRavdan} />
        <CardChultem imgsrc={LChultem} />
        <CardAdiya imgsrc={GAdiya} />
        <CardSainbayar imgsrc={no_image} />
        <CardNansalmaa imgsrc={no_image} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    boardmemberData: state.boardmember.boardmemberData,
    loading: state.boardmember.loading,
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(BoardMembers);
