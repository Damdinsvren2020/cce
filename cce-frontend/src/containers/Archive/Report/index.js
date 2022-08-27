import React, { Component } from "react";
import ReportCard from "../../../components/UI/Card/ArchiveReports/Card";
import MenuTitle from "../../../components/UI/MenuTitle/MenuTitle";

import { connect } from "react-redux";
import * as actions from "../../../store/actions/index";

import reportimg from "./report.png";
import style from "./style.css";

class Report extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  componentDidMount() {
    this.props.onFetchReportsData();
  }
  state = {
    dataLength: 9,
  };
  readMoreHandler = () => {
    const growDataLength = this.state.dataLength * 2;
    this.setState({ dataLength: growDataLength });
  };
  render() {
    let display = <div>...</div>;
    let displayData = null;
    if (!this.props.loading) {
      displayData = this.props.reportsPDFData.slice(0, this.state.dataLength);
      display = (
        <div style={{ display: "table", width: "100%" }}>
          {displayData.map((item) => {
            return <ReportCard imgsrc={item.image} link={item.file} />;
          })}
        </div>
      );
    }
    return (
      <div>
        <div className={style.ArchiveReportTitle}>
          <MenuTitle title={this.props.language === 1 ? "Тайлан" : "Reports"} />
        </div>
        {display}
        {/* <div className={style.ArchiveReportContainer}>
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
          <ReportCard imgsrc={reportimg} />
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    reportsPDFData: state.reportsPDFData.reportsPDFData,
    loading: state.reportsPDFData.loading,
    language: state.language.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchReportsData: () => dispatch(actions.fetchReportsPDFData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Report);
