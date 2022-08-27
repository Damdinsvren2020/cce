import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

//axios
import axios, { post, put } from "axios";

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const useStyles = makeStyles(styles);

const initialState = {
  image: null,
  file: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "IMAGE":
      return {
        ...state,
        image: action.image,
      };
    case "FILE":
      return {
        ...state,
        file: action.file,
      };
    default:
      return state;
  }
};

export default function ReportsWebForms() {
  const [reportState, dispatchReports] = React.useReducer(
    reducer,
    initialState
  );

  const handleInsert = () => {
    const url = "http://103.119.92.91:3050/reportsWeb/insert";
    const formData = new FormData();
    formData.append("image", reportState.image);
    formData.append("file", reportState.file);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config).then((res) => {
      if (res.status === 200) {
        alert("Амжилттай хийгдсэн");
        window.location.reload();
      }
    });
  };
  const handleImage = (e) => {
    dispatchReports({ type: "IMAGE", image: e.target.files[0] });
  };
  const handleFile = (e) => {
    dispatchReports({ type: "FILE", file: e.target.files[0] });
  };
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="rose" icon>
            <CardIcon color="rose">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Reports PDF</h4>
          </CardHeader>
          <CardBody>
            <form>
              <div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleImage(e)}
                  />
                </div>
                <span style={{ fontStyle: "italic" }}>
                  Жич: Дээрх "Choose file" нь pdf file-ийн нүүр зураг байна
                </span>
                <div>
                  <input type="file" onChange={(e) => handleFile(e)} />
                </div>
                <span style={{ fontStyle: "italic" }}>
                  Жич: Дээрх "Choose file" нь pdf file байна
                </span>
              </div>
              <Button color="rose" onClick={handleInsert}>
                Оруулах
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
