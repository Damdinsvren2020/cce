import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// material-ui icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

//axios
import axios from "axios";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0",
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
};

//links
//category, news, quiz, result, newsweb, publicationceWeb, successstoriesweb

const useStyles = makeStyles(styles);

export default function RegularTables() {
  //category
  const [categoryState, setCategoryState] = React.useState({
    categoryData: [],
  });
  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/category/allAdmin")
      .then((response) => {
        setCategoryState({ categoryData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //quiz
  const [quizState, setquizState] = React.useState({
    quizData: [],
  });
  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/quiz/allAdmin")
      .then((response) => {
        setquizState({ quizData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //result
  const [resultState, setresultState] = React.useState({
    resultData: [],
  });
  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/result/allAdmin")
      .then((response) => {
        setresultState({ resultData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //newsapp
  const [newsAppState, setnewsAppState] = React.useState({
    newsAppData: [],
  });
  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/news/allAdmin")
      .then((response) => {
        setnewsAppState({ newsAppData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //newsweb
  const [newsWebAppState, setnewsWebAppState] = React.useState({
    newsWebAppData: [],
  });
  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/newsWeb/newsAdmin")
      .then((response) => {
        setnewsWebAppState({ newsWebAppData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Category</h4>
          </CardHeader>
          <CardBody>
            <Table
              style={{ maxHeight: "500px" }}
              tableHeaderColor="primary"
              tableHead={["id", "Date", "Title", "Text"]}
              tableData={categoryState.categoryData}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Quiz</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["id", "Date", "Title", "Text"]}
              tableData={quizState.quizData}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Quiz</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["id", "Date", "Title", "Text"]}
              tableData={quizState.quizData}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Result</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["id", "Date", "Title", "Text"]}
              tableData={resultState.resultData}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>News App</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["id", "Date", "Title", "Text"]}
              tableData={newsAppState.newsAppData}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>News Web</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["id", "Date", "Title", "Text"]}
              tableData={newsWebAppState.newsWebAppData}
              coloredColls={[3]}
              colorsColls={["primary"]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
