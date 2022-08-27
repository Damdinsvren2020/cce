import React, { Component } from "react";
import ArchiveSuccessStories from "../../../components/UI/Card/ArchiveSuccessStories/Card";
import SocialSection from "../../../components/UI/Social/Social";
import imgss from "../../../assets/images/Archives/SuccessStories/ss.png";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";
import style from "./style.css";
import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

class Report extends Component {
  componentDidMount() {
    this.props.onFetchSuccessStories();
  }
  state = {
    dataLength: 9,
  };
  readMoreHandler = () => {
    const growDataLength = this.state.dataLength * 2;
    this.setState({ dataLength: growDataLength });
  };
  render() {
    let displayData = null;
    let stories = <div>...</div>;
    if (!this.props.loading) {
      displayData = this.props.successStoriesData.slice(
        0,
        this.state.dataLength
      );
      stories = (
        <div className={style.succesStoriesContainerFull}>
          <div className={style.succesStoriesContainer}>
            {displayData.map((stories) => {
              return (
                <ArchiveSuccessStories
                  key={stories.id}
                  id={stories.id}
                  imgsrc={stories.image}
                  date={stories.date.substring(0, stories.date.indexOf("T"))}
                  title={stories.title}
                  language={this.props.language}
                />
              );
            })}
          </div>
          <button
            className={style.storiesReadMoreButton}
            onClick={this.readMoreHandler}
          >
            {this.props.language === 1 ? "Илүүг унших" : "Read More..."}
          </button>
        </div>
      );
    }
    return (
      <div>
        <MenuTitle
          title={
            this.props.language === 1 ? "Амжилтын түүхүүд" : "Succes Stories"
          }
        />
        <div className={style.succesStoriesSection}>
          {stories}
          <div className={style.socialContainer}>
            <SocialSection />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    successStoriesData: state.successStories.successStoriesData,
    loading: state.successStories.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSuccessStories: () => dispatch(actions.fetchSuccessStories()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
