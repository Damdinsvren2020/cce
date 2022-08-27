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

const actionBoardMember = (obj, history) => {
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
            pathname: "/admin/boardmember-web-forms",
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
            .put("http://103.119.92.91:3050/boardmember/delete", {
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

const actionourteam = (obj, history) => {
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
            pathname: "/admin/ourteam-web-forms",
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
            .put("http://103.119.92.91:3050/ourteam/delete", { id })
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

const actionpartners = (obj, history) => {
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
            pathname: "/admin/partners-web-forms",
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
            .put("http://103.119.92.91:3050/partnersWeb/delete", {
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

export default function ReactTables() {
  const history = useHistory();

  //civic education
  const [boarmember, setboarmember] = React.useState({ data: [] });
  //civic participation
  const [ourteamstate, setourteamstate] = React.useState({
    data: [],
  });
  //youth dev project
  const [partners, setpartners] = React.useState({
    data: [],
  });

  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/boardmember/all")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: actionBoardMember(response.data[i], history),
          };
        }
        setboarmember({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://103.119.92.91:3050/ourteam/all")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: actionourteam(response.data[i], history),
          };
        }
        setourteamstate({ data: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://103.119.92.91:3050/partnersWeb/partners")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: actionpartners(response.data[i], history),
          };
        }
        setpartners({ data: response.data });
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
            <h4 className={classes.cardIconTitle}>Board Members</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Id",
                  accessor: "id",
                },
                {
                  Header: "Name",
                  accessor: "name",
                },
                {
                  Header: "Job",
                  accessor: "job",
                },
                {
                  Header: "Image",
                  accessor: "image",
                },
                {
                  Header: "Text",
                  accessor: "text",
                },
                {
                  Header: "Үйлдэлүүд",
                  accessor: "actions",
                },
              ]}
              data={boarmember.data}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Our Team</h4>
          </CardHeader>
          <CardBody>
            <ReactTable
              columns={[
                {
                  Header: "Id",
                  accessor: "id",
                },
                {
                  Header: "Name",
                  accessor: "name",
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
              data={ourteamstate.data}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12}>
        <Card>
          <CardHeader color="primary" icon>
            <CardIcon color="primary">
              <Assignment />
            </CardIcon>
            <h4 className={classes.cardIconTitle}>Partners</h4>
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
              data={partners.data}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
