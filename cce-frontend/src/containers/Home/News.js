import React, { Component } from "react";
import { connect } from "react-redux";
import NewsCard from "../../components/UI/Card/NewsCard/CardUI";
import homeNewsStyle from "./homeNewsStyle.css";
import imgss from "../../assets/images/News/imgss.jpg";
import * as actions from "../../store/actions/index";

class NewsHome extends Component {
  // componentDidMount() {
  //   this.props.onFetchNews();
  // }
  render() {
    let displayData = null;
    let news = <div>...</div>;
    if (!this.props.loading) {
      // let dataRev = [...this.props.newsData.reverse()];
      displayData = this.props.newsData.slice(0, 4);
      news = (
        <div className={homeNewsStyle.homeNewsStyleContainer}>
          {displayData.map((news) => {
            return (
              <NewsCard
                id={news.id}
                key={news.id}
                styleWidth="home"
                imgsrc={news.image}
                date={news.date}
                title={news.title}
                text={news.text}
                language={this.props.language}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div>
        <h3 className={homeNewsStyle.homeNewsStyleContainerTitle}>
          {this.props.language === 1 ? "Мэдээ" : "News"}
        </h3>
        {news}
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

export default connect(mapStateToProps)(NewsHome);
