import React, { Component } from "react";
import { Container, Col } from "react-bootstrap";
import { connect } from "react-redux";
import classes from "./Mission.css";

class Mission extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemNumber: {},
    };
  }
  render() {
    return (
      <div>
        <Container fluid={true} className={classes.missioncontainer}>
          <a href="/programs/civic_education" className={classes.missionLink}>
            <Col className={classes.civicedu}>
              {this.props.language === 1 ? (
                <p>
                  ИРГЭНИЙ <br /> БОЛОВСРОЛ ХӨТӨЛБӨР
                </p>
              ) : (
                <p>
                  CIVIC <br /> EDUCATION PROGRAM
                </p>
              )}
            </Col>
          </a>
          <a href="/civic_participation" className={classes.missionLink}>
            <Col className={classes.civicpar}>
              {this.props.language === 1 ? (
                <p>ИРГЭДИЙН ОРОЛЦОО ХӨТӨЛБӨР</p>
              ) : (
                <p>CIVIC PARTICIPATION PROGRAM</p>
              )}
            </Col>
          </a>
          <a href="/programs/youth_dev_proj" className={classes.missionLink}>
            <Col className={classes.youthdev}>
              {this.props.language === 1 ? (
                <p>ЗАЛУУЧУУДЫН ХӨТӨЛБӨР</p>
              ) : (
                <p>YOUTH DEVELOPMENT PROGRAM</p>
              )}
            </Col>
          </a>
          <a href="/programs/ecologeducation" className={classes.missionLink}>
            <Col className={classes.ecoedu}>
              {this.props.language === 1 ? (
                <p>ЗАЛУУЧУУДЫН ХӨТӨЛБӨР</p>
              ) : (
                <p>ECOLOGICAL EDUCATION</p>
              )}
            </Col>
          </a>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    language: state.language.language,
  };
};

export default connect(mapStateToProps)(Mission);
