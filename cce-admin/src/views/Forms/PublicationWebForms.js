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
  typebook: null,
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
    case "TYPE":
      return {
        ...state,
        typebook: action.typebook,
      };
    default:
      return state;
  }
};

export default function RegularForms(props) {
  const [publication, dispatchpublication] = React.useReducer(
    reducer,
    initialState
  );
  const handleChangeTitle = (event) => {
    dispatchpublication({ type: "CHANGETITLE", title: event.target.value });
  };
  const handleToggle = (value) => {
    dispatchpublication({ type: "TYPE", typebook: value });
  };
  useEffect(() => {
    dispatchpublication({
      type: props.history.location.obj === undefined ? "INSERT" : "UPDATE",
      props: props.history.location.obj,
    });
  }, []);

  const enterpublication = () => {
    if (
      publication.props === undefined ||
      publication.props.id === undefined ||
      publication.props.id === null
    ) {
      console.log(publication.typebook);
      switch (publication.typebook) {
        case 1:
          const url1 = "http://103.119.92.91:3050/publicationceWeb/postpubce";
          const formData = new FormData();
          formData.append("file", publication.props?.file);
          formData.append("title", publication.props?.title);
          formData.append("text", publication.props?.text);
          const config = {
            headers: {
              "content-type": "multipart/form-data",
            },
          };
          return post(url1, formData, config).then((res) => {
            if (res.status === 200) {
              alert("Амжилттай хийгдсэн");
              window.location.reload();
            } else alert("Бааз руу хийгдсэнгүй");
          });
        case 2:
          const url2 = "http://103.119.92.91:3050/participationWeb/postpubpart";
          const formData2 = new FormData();
          formData2.append("file", publication.props?.file);
          formData2.append("title", publication.props?.title);
          formData2.append("text", publication.props?.text);
          const config2 = {
            headers: {
              "content-type": "multipart/form-data",
            },
          };
          return post(url2, formData2, config2).then((res) => {
            if (res.status === 200) {
              alert("Амжилттай хийгдсэн");
              window.location.reload();
            } else alert("Бааз руу хийгдсэнгүй");
          });
        case 3:
          const url3 = "http://103.119.92.91:3050/youthWeb/insert";
          const formData3 = new FormData();
          formData3.append("file", publication.props?.file);
          formData3.append("title", publication.props?.title);
          formData3.append("text", publication.props?.text);
          const config3 = {
            headers: {
              "content-type": "multipart/form-data",
            },
          };
          return post(url3, formData3, config3).then((res) => {
            if (res.status === 200) {
              alert("Амжилттай хийгдсэн");
              window.location.reload();
            } else alert("Бааз руу хийгдсэнгүй");
          });
        case 4:
          const url4 = "http://103.119.92.91:3050/EcologipublicationWeb/insert";
          const formData4 = new FormData();
          formData4.append("file", publication.props?.file);
          formData4.append("title", publication.props?.title);
          formData4.append("text", publication.props?.text);
          const config4 = {
            headers: {
              "content-type": "multipart/form-data",
            },
          };
          return post(url4, formData4, config4).then((res) => {
            if (res.status === 200) {
              alert("Амжилттай хийгдсэн");
              window.location.reload();
            } else alert("Бааз руу хийгдсэнгүй");
          });
        default:
          return;
      }
    } else {
      switch (publication.typebook) {
        case 1:
          if (
            publication.props.file === undefined ||
            publication.props.file === null
          ) {
            console.log("psda");
            return axios
              .put("http://103.119.92.91:3050/publicationceWeb/putpubce", {
                id: publication.props.id,
                text: publication.props.text,
                title: publication.props.title,
                image: publication.props.image,
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
            const url =
              "http://103.119.92.91:3050/publicationceWeb/putpubceFile";
            const formData = new FormData();
            formData.append("file", publication.props?.file);
            formData.append("title", publication.props?.title);
            formData.append("text", publication.props?.text);
            formData.append("id", publication.props.id);
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
        case 2:
          if (
            publication.props.file === undefined ||
            publication.props.file === null
          ) {
            return axios
              .put("http://103.119.92.91:3050/participationWeb/putpubpart", {
                id: publication.props.id,
                text: publication.props.text,
                title: publication.props.title,
                image: publication.props.image,
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
            const url =
              "http://103.119.92.91:3050/participationWeb/putpubpartFile";
            const formData = new FormData();
            formData.append("file", publication.props?.file);
            formData.append("title", publication.props?.title);
            formData.append("text", publication.props?.text);
            formData.append("id", publication.props.id);
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
        case 3:
          if (
            publication.props.file === undefined ||
            publication.props.file === null
          ) {
            return axios
              .put("http://103.119.92.91:3050/youthWeb/update", {
                id: publication.props.id,
                text: publication.props.text,
                title: publication.props.title,
                image: publication.props.image,
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
            const url = "http://103.119.92.91:3050/youthWeb/updateFile";
            const formData = new FormData();
            formData.append("file", publication.props?.file);
            formData.append("title", publication.props?.title);
            formData.append("text", publication.props?.text);
            formData.append("id", publication.props.id);
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
        case 4:
          if (
            publication.props.file === undefined ||
            publication.props.file === null
          ) {
            return axios
              .put("http://103.119.92.91:3050/EcologipublicationWeb/update", {
                id: publication.props.id,
                text: publication.props.text,
                title: publication.props.title,
                image: publication.props.image,
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
            const url =
              "http://103.119.92.91:3050/EcologipublicationWeb/updateFile";
            const formData = new FormData();
            formData.append("file", publication.props?.file);
            formData.append("title", publication.props?.title);
            formData.append("text", publication.props?.text);
            formData.append("id", publication.props.id);
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
        default:
          return;
      }
    }
  };
  const handleImage = (e) => {
    const imgFile = e.target.files[0];
    dispatchpublication({ type: "IMAGECHANGE", file: imgFile });
  };
  const onEditorChange = (evt) => {
    dispatchpublication({ type: "CHANGETEXT", text: evt.editor.getData() });
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
            <h4 className={classes.cardIconTitle}>Ном</h4>
          </CardHeader>
          <CardBody>
            <form style={{ padding: "30px" }}>
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
                  <figcaption>Номны нүүр зураг</figcaption>
                </figure>
              </div>
              <CustomInput
                labelText="Гарчиг"
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
                    ? "Номны гарчиг"
                    : props.history.location.obj.title
                }
              />

              <CKEditor
                data={
                  props.history.location.obj === undefined
                    ? "Номны агуулга"
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
                      // defaultChecked={
                      //   props.history.location?.obj !== undefined ? true : false
                      // }
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
                  label="Civic Education"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(2)}
                      // defaultChecked={
                      //   props.history.location?.obj !== undefined ? true : false
                      // }
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
                  label="Civic Participation"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(3)}
                      // defaultChecked={
                      //   props.history.location?.obj !== undefined ? true : false
                      // }
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
                  label="Youth Dev Project"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      tabIndex={-1}
                      onClick={() => handleToggle(4)}
                      // defaultChecked={
                      //   props.history.location?.obj !== undefined ? true : false
                      // }
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
                  label="Ecological Edu"
                />
                <hr />
              </div>
              <Button color="rose" onClick={enterpublication}>
                Оруулах
              </Button>
            </form>
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
