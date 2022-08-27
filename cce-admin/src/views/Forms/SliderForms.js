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
import CustomInput from "components/CustomInput/CustomInput.js";

//axios
import axios, { post, put } from "axios";

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

const useStyles = makeStyles(styles);

const initialState = {
  props: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INSERT":
      return {
        ...state,
        props: action.props,
      };
    case "UPDATE":
      return {
        ...state,
        props: action.props,
      };
    case "IMAGE":
      return {
        ...state,
        props: { ...state.props, file: action.file },
      };
    case "TEXT":
      return {
        ...state,
        props: { ...state.props, text: action.text },
      };
    case "TITLE":
      return {
        ...state,
        props: { ...state.props, title: action.title },
      };
    default:
      return state;
  }
};

export default function RegularForms(props) {
  const [sliderState, dispatchSlider] = React.useReducer(reducer, initialState);

  useEffect(() => {
    dispatchSlider({
      type: props.history.location.obj === undefined ? "INSERT" : "UPDATE",
      props: props.history.location.obj,
    });
  }, []);

  const insert = () => {
    if (
      sliderState.props === undefined ||
      sliderState.props.id === undefined ||
      sliderState.props.id === null
    ) {
      const url = "http://103.119.92.91:3050/sliderweb/insert";
      const formData = new FormData();
      formData.append("file", sliderState.props?.file);
      formData.append("title", sliderState.props?.title);
      formData.append("text", sliderState.props?.text);
      const config = {
        headers: {
          "content-type": "multipart/form-data",
        },
      };
      return post(url, formData, config).then((res) => {
        if (res.status === 200) {
          alert("Амжилттай нэмэгдлээ!");
          window.location.reload();
        } else alert("Бааз руу нэмэгдсэнгүй");
      });
    } else {
      if (
        sliderState.props.file === undefined ||
        sliderState.props.file === null
      ) {
        axios
          .put("http://103.119.92.91:3050/sliderweb/update", {
            id: sliderState.props.id,
            title: sliderState.props.title,
            text: sliderState.props.text,
            image: sliderState.props.image,
          })
          .then(function (response) {
            if (response.status === 200) {
              if (window.confirm("Амжилттай засагдлаа!")) {
                window.location.reload();
              }
            } else {
              alert("Бааз руу засагдсангүй");
            }
          });
      } else {
        const url = "http://103.119.92.91:3050/sliderweb/updateFile";
        const formData = new FormData();
        formData.append("file", sliderState.props?.file);
        formData.append("title", sliderState.props?.title);
        formData.append("text", sliderState.props?.text);
        formData.append("id", sliderState.props.id);
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        };
        return put(url, formData, config).then((res) => {
          if (res.status === 200) {
            alert("Амжилттай засагдлаа!");
            window.location.reload();
          } else alert("Бааз руу нэмэгдсэнгүй");
        });
      }
    }
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    dispatchSlider({ type: "IMAGE", file: e.target.files[0] });
  };

  const handleChangeTitle = (e) => {
    console.log(e.target.value);
    dispatchSlider({ type: "TITLE", title: e.target.value });
  };

  const handleChangeText = (e) => {
    dispatchSlider({ type: "TEXT", text: e.target.value });
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
            <h4 className={classes.cardIconTitle}>Feedback</h4>
          </CardHeader>
          <CardBody>
            <form>
              <div>
                <input
                  type="file"
                  onChange={(e) => handleImage(e)}
                  accept="image/*"
                />
                <figure>
                  <img
                    style={{ width: "250px", height: "250px" }}
                    src={props.history.location.obj?.image}
                  />
                  <figcaption>Slider зураг</figcaption>
                </figure>
              </div>
              <CustomInput
                labelText="Slider гарчиг"
                id="title"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "title",
                  onChange: handleChangeTitle,
                }}
                defaultProps={props.history.location.obj?.title}
              />
              <CustomInput
                labelText="Slider тайлбар"
                id="text"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  onChange: handleChangeText,
                }}
                defaultProps={props.history.location.obj?.text}
              />
              <Button color="rose" onClick={insert}>
                Оруулах
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
