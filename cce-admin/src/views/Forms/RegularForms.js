import React, { useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

// @material-ui/icons
import Check from "@material-ui/icons/Check";
import Assignment from "@material-ui/icons/Assignment";

import Datetime from "react-datetime";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";

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

// import CKEditor from "ckeditor4-react";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const IFRAME_SRC = "//cdn.iframe.ly/api/iframe";
const API_KEY = "68bb4168460f7d057f8630";

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
    case "DATE":
      return {
        ...state,
        props: { ...state.props, date: action.date },
      };
    default:
      return state;
  }
};

export default function RegularForms(props) {
  const [news, dispatchnews] = React.useReducer(reducer, initialState);
  const handleChangeTitle = (event) => {
    dispatchnews({ type: "CHANGETITLE", title: event.target.value });
  };
  const handleToggle = (value) => {
    console.log(value);
    dispatchnews({ type: "LANGUAGE", language: value });
  };

  useEffect(() => {
    dispatchnews({
      type: props.history.location.obj === undefined ? "INSERT" : "UPDATE",
      props: props.history.location.obj,
    });
  }, []);

  const enterNews = () => {
    if (
      news.props === undefined ||
      news.props.id === undefined ||
      news.props.id === null
    ) {
      const url = "http://103.119.92.91:3050/newsweb/postnews";
      const formData = new FormData();
      formData.append("language", news.props?.language);
      formData.append("file", news.props?.file);
      formData.append("date", news.props?.date);
      formData.append("title", news.props?.title);
      formData.append("text", news.props?.text);
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
      if (news.props.file === undefined || news.props.file === null) {
        axios
          .put("http://103.119.92.91:3050/newsweb/putnews", {
            id: news.props.id,
            title: news.props.title,
            date: news.props.date,
            text: news.props.text,
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
        const url = "http://103.119.92.91:3050/newsweb/putnewsFile";
        const formData = new FormData();
        formData.append("language", news.props?.language);
        formData.append("file", news.props?.file);
        formData.append("title", news.props?.title);
        formData.append("text", news.props?.text);
        formData.append("date", news.props?.date);
        formData.append("id", news.props.id);
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
  const handleDate = (e) => {
    dispatchnews({ type: "DATE", date: e.format("MM/DD/YYYY") });
  };
  const handleImage = (e) => {
    const imgFile = e.target.files[0];
    dispatchnews({ type: "IMAGECHANGE", file: imgFile });
  };
  const insertNewsImages = (file) => {
    const url = "http://103.119.92.91:3050/newsweb/postnewsall";
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
  const onEditorChange = (evt, editor) => {
    dispatchnews({ type: "CHANGETEXT", text: editor.getData() });
  };
  const handleMultiImage = (e) => {
    dispatchnews({ type: "MULTIIMAGE", files: e.target.files });
  };
  const handleMulti = () => {
    insertNewsImages(news.files);
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
            <h4 className={classes.cardIconTitle}>Мэдээ</h4>
          </CardHeader>
          <CardBody>
            {/* <div>
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
                мэдээний агуулга дээр орох зургууд байна
              </span>
            </div> */}
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
                  <figcaption>Мэдээний нүүр зураг</figcaption>
                </figure>
              </div>
              <CustomInput
                labelText="Мэдээний гарчиг"
                id="title"
                formControlProps={{
                  fullWidth: true,
                }}
                inputProps={{
                  type: "text",
                  onChange: handleChangeTitle,
                }}
                defaultProps={props.history.location.obj?.title}
              />

              <CKEditor
                editor={ClassicEditor}
                data={
                  props.history.location.obj === undefined
                    ? "Мэдээний агуулга"
                    : props.history.location.obj.text
                }
                onChange={onEditorChange}
                config={{
                  image: {
                    // Configure the available styles.
                    styles: ["alignLeft", "alignCenter", "alignRight"],

                    // Configure the available image resize options.
                    resizeOptions: [
                      {
                        name: "imageResize:original",
                        label: "Original",
                        value: null,
                      },
                      {
                        name: "imageResize:50",
                        label: "50%",
                        value: "50",
                      },
                      {
                        name: "imageResize:75",
                        label: "75%",
                        value: "75",
                      },
                    ],

                    // You need to configure the image toolbar, too, so it shows the new style
                    // buttons as well as the resize buttons.
                    toolbar: [
                      "imageStyle:alignLeft",
                      "imageStyle:alignCenter",
                      "imageStyle:alignRight",
                      "|",
                      "imageResize",
                      "|",
                      "imageTextAlternative",
                    ],
                  },
                  ckfinder: {
                    // Upload the images to the server using the CKFinder QuickUpload command
                    // You have to change this address to your server that has the ckfinder php connector
                    uploadUrl: "http://103.119.92.97:3050/news/ckeditorimage",
                  },
                  mediaEmbed: {
                    previewsInData: true,
                    providers: [
                      {
                        name: "iframely previews",
                        url: /.+/,
                        html: (match) => {
                          const url = match[0];
                          var iframeUrl =
                            IFRAME_SRC +
                            "?app=1&api_key=" +
                            API_KEY +
                            "&url=" +
                            encodeURIComponent(url);
                          // alternatively, use &key= instead of &api_key with the MD5 hash of your api_key
                          // more about it: https://iframely.com/docs/allow-origins

                          return (
                            // If you need, set maxwidth and other styles for 'iframely-embed' class - it's yours to customize
                            '<div class="iframely-embed">' +
                            '<div class="iframely-responsive">' +
                            `<iframe src="${iframeUrl}" ` +
                            'frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>' +
                            "</iframe>" +
                            "</div>" +
                            "</div>"
                          );
                        },
                      },
                    ],
                  },
                }}
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
              <CardBody>
                <InputLabel className={classes.label}>Өдөр сонгох</InputLabel>
                <br />
                <FormControl fullWidth>
                  <Datetime
                    timeFormat={false}
                    inputProps={{ placeholder: "Өдөр сонгох" }}
                    onChange={(e) => handleDate(e)}
                  />
                </FormControl>
              </CardBody>
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
