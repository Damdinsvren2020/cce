import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import homeSlider from "../../../assets/images/Home/homeSlider.png";
import classes from "./HomeSlider.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class HomeSlider extends Component {
  componentDidMount() {
    this.props.onFetchSlider();
  }
  render() {
    let display = null;
    if (!this.props.loading) {
      display = this.props.sliderData.map((item) => {
        return (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.image}
              alt="First slide"
              className={classes.HomeSliderImg}
            />
            <Carousel.Caption className={classes.HomeSliderTitle}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }
    return (
      <div>
        <Carousel className={classes.HomeSlider}>
          {display}
          {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeSlider}
              alt="First slide"
              className={classes.HomeSliderImg}
            />
            <Carousel.Caption className={classes.HomeSliderTitle}>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeSlider}
              alt="Third slide"
              className={classes.HomeSliderImg}
            />

            <Carousel.Caption className={classes.HomeSliderTitle}>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={homeSlider}
              alt="Third slide"
              className={classes.HomeSliderImg}
            />

            <Carousel.Caption className={classes.HomeSliderTitle}>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item> */}
        </Carousel>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sliderData: state.slider.sliderData,
    loading: state.slider.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSlider: () => dispatch(actions.fetchSlider()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeSlider);
