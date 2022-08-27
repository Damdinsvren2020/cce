import React, { Component } from "react";
import { connect } from "react-redux";
import NewsCard from "../../components/UI/Card/NewsCard/CardUI";
import MenuTitle from "../../components/UI/MenuTitle/MenuTitle";
import SocialSection from "../../components/UI/Social/Social";
import img from "../../assets/images/News/imgss.jpg";

import indexStyle from "./index-style.css";
import * as actions from "../../store/actions/index";

class News extends Component {
  // componentDidMount() {
  //   this.props.onFetchNews();
  // }
  state = {
    dataLength: 9,
  };
  readMoreHandler = () => {
    const growDataLength = this.state.dataLength * 2;
    this.setState({ dataLength: growDataLength });
  };
  render() {
    let displayData = null;
    let news = <div>...</div>;
    if (!this.props.loading) {
      // let dataRev = [...this.props.newsData.reverse()];
      displayData = this.props.newsData.slice(0, this.state.dataLength);
      news = (
        <div className={indexStyle.newsContainerFull}>
          <div className={indexStyle.newsContainer}>
            {displayData.map((news) => {
              return (
                <NewsCard
                  id={news.id}
                  key={news.id}
                  styleWidth="news"
                  date={news.date}
                  imgsrc={news.image}
                  title={news.title}
                  text={news.text}
                  language={this.props.language}
                />
              );
            })}
          </div>
          <button
            className={indexStyle.newsReadMoreButton}
            onClick={this.readMoreHandler}
          >
            {this.props.language === 1 ? "Илүүг унших..." : "Read More..."}
          </button>
        </div>
      );
    }
    return (
      <div>
        <MenuTitle title={this.props.language === 1 ? "Мэдээ" : "News"} />
        <div className={indexStyle.newsSection}>
          {news}
          <div className={indexStyle.socialContainer}>
            <SocialSection />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    newsData: state.news.newsData,
    loading: state.news.loading,
    language: state.language.language,
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onFetchNews: () => dispatch(actions.fetchNews()),
//   };
// };

export default connect(mapStateToProps)(News);
