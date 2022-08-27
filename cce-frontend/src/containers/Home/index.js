import React, { Component } from "react";
import HomeSlider from "../../components/UI/Slider/HomeSlider";
import Mission from "./Mission";
import Intro from "../../components/Intro/Intro";
import News from "./News";
import Videos from "../../containers/Archive/Videos/Video";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <HomeSlider />
        <News />
        <Mission />
        <Intro />
        <Videos />
      </div>
    );
  }
}

export default Home;
