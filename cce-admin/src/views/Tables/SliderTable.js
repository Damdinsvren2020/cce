import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Assignment from "@material-ui/icons/Assignment";
import Dvr from "@material-ui/icons/Dvr";
import Close from "@material-ui/icons/Close";
// import Favorite from "@material-ui/icons/Favorite";
// import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardIcon from "components/Card/CardIcon.js";
import CardHeader from "components/Card/CardHeader.js";
import ReactTable from "components/ReactTable/ReactTable.js";

// import { dataTable } from "variables/general.js";

//axios
import axios from "axios";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.js";

const styles = {
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px",
  },
};

const useStyles = makeStyles(styles);

const action = (obj, history) => {
  const id = obj.id;
  return (
    <div className="actions-right">
      <Button
        justIcon
        round
        simple
        color="warning"
        className="edit"
        onClick={() => {
          history.push({
            pathname: "/admin/slider-forms",
            obj: obj,
          });
        }}
      >
        <Dvr />
      </Button>
      <Button
        justIcon
        round
        simple
        onClick={() => {
          axios
            .put("http://103.119.92.91:3050/sliderweb/delete", {
              id,
            })
            .then((response) => {
              if (response.status === 200) {
                if (window.confirm("Мэдээлэл устгагдсан!")) {
                  window.location.reload();
                }
              }
            })
            .catch((error) => {
              alert("Устгахад алдаа гарлаа!");
            });
        }}
        color="danger"
        className="remove"
      >
        <Close />
      </Button>{" "}
    </div>
  );
};

export default function SlidetTable() {
  const history = useHistory();

  //civic education
  const [sliderState, setsliderState] = React.useState({ sliderData: [] });

  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/sliderweb/all")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: action(response.data[i], history),
          };
        }
        setsliderState({ sliderData: response.data });
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
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Slider хүснэгт</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Id",
                  accessor: "id",
                },
                {
                  Header: "Title",
                  accessor: "title",
                },
                {
                  Header: "Text",
                  accessor: "text",
                },
                {
                  Header: "Image",
                  accessor: "image",
                },
                {
                  Header: "Үйлдэлүүд",
                  accessor: "actions",
                },
              ]}
              data={sliderState.sliderData}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
