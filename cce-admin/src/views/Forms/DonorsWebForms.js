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
  files: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INSERT":
      return {
        ...state,
        files: action.files,
      };
    default:
      return state;
  }
};

export default function RegularForms() {
  const [feedBackState, dispatchFeedback] = React.useReducer(
    reducer,
    initialState
  );

  const postDonor = (files) => {
    console.log(files);
    const url = "http://103.119.92.91:3050/donorsEvaluationWeb/postdonorall";
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }
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
  const handleMultiImage = (e) => {
    dispatchFeedback({ type: "INSERT", files: e.target.files });
  };
  const configHanlde = () => {
    postDonor(feedBackState.files);
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
            <h4 className={classes.cardIconTitle}>Donors Evoluation</h4>
          </CardHeader>
          <CardBody>
            <form>
              <div>
                <div>
                  <input
                    type="file"
                    name="multiimage"
                    multiple
                    onChange={(e) => handleMultiImage(e)}
                  />
                  <Button color="rose" onClick={configHanlde}>
                    Оруулах
                  </Button>
                </div>
                <span style={{ fontStyle: "italic" }}>
                  Жич: Дээрх "Choose file" нь олон зураг сонгож болох ба зураг
                  тус бүр "Donors ..." хуудсанд орох болно
                </span>
              </div>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
