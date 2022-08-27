import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Assignment from "@material-ui/icons/Assignment";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";

//axios
import axios, { post, put } from "axios";

import styles from "assets/jss/material-dashboard-pro-react/views/regularFormsStyle";

import CKEditor from "ckeditor4-react";

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
    case "CHANGENAME":
      return {
        ...state,
        props: { ...state.props, name: action.name },
      };
    case "CHANGEJOB":
      return {
        ...state,
        props: { ...state.props, job: action.job },
      };
    case "CHANGETEXT":
      return {
        ...state,
        props: { ...state.props, text: action.text },
      };
    case "IMAGECHANGE":
      return {
        ...state,
        props: { ...state.props, file: action.file },
      };
    case "LANGUAGE":
      return {
        ...state,
        props: { ...state.props, language: action.language },
      };
    default:
      return state;
  }
};

export default function RegularForms(props) {
  const [boardmember, dispatchboardmember] = React.useReducer(
    reducer,
    initialState
  );
  const handleChangeName = (event) => {
    dispatchboardmember({ type: "CHANGENAME", name: event.target.value });
  };
  const handleChangeJob = (event) => {
    dispatchboardmember({ type: "CHANGEJOB", job: event.target.value });
  };
  const handleToggle = (value) => {
    dispatchboardmember({ type: "LANGUAGE", language: value });
  };
  useEffect(() => {
    dispatchboardmember({
      type: props.history.location.obj === undefined ? "INSERT" : "UPDATE",
      props: props.history.location.obj,
    });
  }, []);

  const enterNews = () => {
    if (
      boardmember.props === undefined ||
      boardmember.props.id === undefined ||
      boardmember.props.id === null
    ) {
      const url = "http://103.119.92.91:3050/boardmember/insert";
      const formData = new FormData();
      formData.append("language", boardmember.props?.language);
      formData.append("file", boardmember.props?.file);
      formData.append("name", boardmember.props?.name);
      formData.append("job", boardmember.props?.job);
      formData.append("text", boardmember.props?.text);
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
        boardmember.props.file === undefined ||
        boardmember.props.file === null
      ) {
        axios
          .put("http://103.119.92.91:3050/boardmember/update", {
            id: boardmember.props.id,
            name: boardmember.props.name,
            text: boardmember.props.text,
            job: boardmember.props.job,
            language: boardmember.props.language,
            image: boardmember.props.image
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
        const url = "http://103.119.92.91:3050/boardmember/updateFile";
        const formData = new FormData();
        formData.append("language", boardmember.props?.language);
        formData.append("file", boardmember.props?.file);
        formData.append("name", boardmember.props?.name);
        formData.append("job", boardmember.props?.job);
        formData.append("text", boardmember.props?.text);
        formData.append("id", boardmember.props.id);
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
    const imgFile = e.target.files[0];
    dispatchboardmember({ type: "IMAGECHANGE", file: imgFile });
  };
  const onEditorChange = (evt) => {
    dispatchboardmember({ type: "CHANGETEXT", text: evt.editor.getData() });
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
            <h4 className={classes.cardIconTitle}>Board Member</h4>
          </CardHeader>
          <CardBody>
            <form encType="multipart/form-data" style={{ padding: "30px" }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <input
                  type="file"
                  name="singleimage"
                  onChange={(e) => handleImage(e)}
                  accept="image/*"
                />
                <figure>
                  <img
                    style={{ width: "250px", height: "250px" }}
                    src={props.history.location.obj?.image}
                  />
                  <figcaption>Зураг</figcaption>
                </figure>
              </div>
              <CustomInput
                labelText="Овог нэр"
                id="name"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  onChange: handleChangeName,
                }}
                defaultProps={props.history.location.obj?.name}
              />
              <CustomInput
                labelText="Ажил"
                id="job"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  onChange: handleChangeJob,
                }}
                defaultProps={props.history.location.obj?.job}
              />
              <CKEditor
                data={
                  props.history.location.obj === undefined
                    ? "Мэдээлэл"
                    : props.history.location.obj.text
                }
                onChange={(e) => onEditorChange(e)}
              />

              <div className={classes.checkboxAndRadio}>
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(1)}
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      defaultChecked={
                        props.history.location.obj?.language === 1
                          ? true
                          : false
                      }
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="Монгол"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(2)}
                      defaultChecked={
                        props.history.location.obj?.language === 2
                          ? true
                          : false
                      }
                      checkedIcon={<Check className={classes.checkedIcon} />}
                      icon={<Check className={classes.uncheckedIcon} />}
                      classes={{
                        checked: classes.checked,
                        root: classes.checkRoot,
                      }}
                    />
                  }
                  classes={{
                    label: classes.label,
                    root: classes.labelRoot,
                  }}
                  label="English"
                />
              </div>
              <Button color="rose" onClick={enterNews}>
                Оруулах
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
