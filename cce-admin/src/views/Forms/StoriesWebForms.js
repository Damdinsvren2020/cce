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
  files: null,
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
    case "CHANGETITLE":
      return {
        ...state,
        props: { ...state.props, title: action.title },
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
    case "MULTIIMAGE":
      return {
        ...state,
        files: action.files,
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
  const [stories, dispatchStories] = React.useReducer(reducer, initialState);
  const handleChangeTitle = (event) => {
    dispatchStories({ type: "CHANGETITLE", title: event.target.value });
  };
  const handleToggle = (value) => {
    dispatchStories({ type: "LANGUAGE", language: value });
  };

  useEffect(() => {
    dispatchStories({
      type: props.history.location.obj === undefined ? "INSERT" : "UPDATE",
      props: props.history.location.obj,
    });
  }, []);

  const enterStories = () => {
    if (
      stories.props === undefined ||
      stories.props.id === undefined ||
      stories.props.id === null
    ) {
      const url = "http://103.119.92.91:3050/storiesweb/poststories";
      const formData = new FormData();
      formData.append("language", stories.props?.language);
      formData.append("file", stories.props?.file);
      formData.append("title", stories.props?.title);
      formData.append("text", stories.props?.text);
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
      if (stories.props.file === undefined || stories.props.file === null) {
        axios
          .put("http://103.119.92.91:3050/storiesweb/putstories", {
            id: stories.props.id,
            text: stories.props.text,
            title: stories.props.title,
            language: stories.props.language,
            image: stories.props.image,
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
        const url = "http://103.119.92.91:3050/storiesweb/putstoriesFile";
        const formData = new FormData();
        formData.append("language", stories.props?.language);
        formData.append("file", stories.props?.file);
        formData.append("title", stories.props?.title);
        formData.append("text", stories.props?.text);
        formData.append("id", stories.props.id);
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
    dispatchStories({ type: "IMAGECHANGE", file: imgFile });
  };
  const insetStoriesImg = (file) => {
    const url = "http://103.119.92.91:3050/storiesweb/postnewsall";
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append("file", file[i]);
    }
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config).then((res) => {
      if (res.status === 200) {
        let link = [];
        res.data.map((aa) => {
          link.push(aa.urlImage);
        });
        prompt("Линк хуулна уу?", link);
      }
    });
  };
  const onEditorChange = (evt) => {
    dispatchStories({ type: "CHANGETEXT", text: evt.editor.getData() });
  };
  const handleMultiImage = (e) => {
    dispatchStories({ type: "MULTIIMAGE", files: e.target.files });
  };
  const handleMulti = () => {
    insetStoriesImg(stories.files);
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
            <h4 className={classes.cardIconTitle}>Стори</h4>
          </CardHeader>
          <CardBody>
            <div>
              <div>
                <input
                  type="file"
                  name="multiimage"
                  multiple
                  onChange={(e) => handleMultiImage(e)}
                />
                <Button color="rose" type="submit" onClick={handleMulti}>
                  Оруулах
                </Button>
              </div>
              <span style={{ fontStyle: "italic" }}>
                Жич: Дээрх "Choose file" нь олон зураг сонгож болох ба оруулах
                товчийг дараад сануулга дээрх линкийг хуулж авна уу. Тус линк нь
                стори агуулга дээр орох зургууд байна
              </span>
            </div>
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
                  <figcaption>Стори нүүр зураг</figcaption>
                </figure>
              </div>

              <CustomInput
                labelText="Стори гарчиг"
                id="title"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  onChange: handleChangeTitle,
                }}
                defaultProps={
                  props.history.location.obj === undefined
                    ? null
                    : props.history.location.obj.title
                }
              />
              <CKEditor
                data={
                  props.history.location.obj === undefined
                    ? "Стори агуулга"
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
                      defaultChecked={
                        props.history.location.obj?.language === 1
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
                  label="Монгол"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      defaultChecked={
                        props.history.location.obj?.language === 2
                          ? true
                          : false
                      }
                      onClick={() => handleToggle(2)}
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
              <Button color="rose" onClick={enterStories}>
                Оруулах
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
