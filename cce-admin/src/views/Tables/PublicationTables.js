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

const actionCe = (obj, history) => {
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
            pathname: "/admin/publications-web-forms",
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
            .put("http://103.119.92.91:3050/publicationceWeb/delete", {
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

const actionparticipation = (obj, history) => {
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
            pathname: "/admin/publications-web-forms",
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
            .put("http://103.119.92.91:3050/participationWeb/deletepubpart", { id })
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

const actionyouth = (obj, history) => {
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
            pathname: "/admin/publications-web-forms",
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
            .put("http://103.119.92.91:3050/youthWeb/delete", {
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

const actionecologi = (obj, history) => {
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
            pathname: "/admin/publications-web-forms",
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
            .put("http://103.119.92.91:3050/EcologipublicationWeb/delete", {
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
  const [ceWebState, setCeWebState] = React.useState({ ceWebData: [] });
  //civic participation
  const [participationState, setparticipationState] = React.useState({
    participationData: [],
  });
  //youth dev project
  const [youthwebState, setyouthwebState] = React.useState({
    youthwebData: [],
  });
  //ecoligical
  const [ecologiWebState, setecologiWebState] = React.useState({
    ecologiWebData: [],
  });

  useEffect(() => {
    axios
      .get("http://103.119.92.91:3050/publicationceWeb/publicationceall")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: actionCe(response.data[i], history),
          };
        }
        setCeWebState({ ceWebData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://103.119.92.91:3050/participationWeb/publicationpartiall")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: actionparticipation(response.data[i], history),
          };
        }
        setparticipationState({ participationData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://103.119.92.91:3050/youthWeb/youthdevelopment")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: actionyouth(response.data[i], history),
          };
        }
        setyouthwebState({ youthwebData: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://103.119.92.91:3050/EcologipublicationWeb/publicationecologi")
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
          response.data[i] = {
            ...response.data[i],
            actions: actionecologi(response.data[i], history),
          };
        }
        setecologiWebState({ ecologiWebData: response.data });
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
            <h4 className={classes.cardIconTitle}>Civic Education хүснэгт</h4>
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
              data={ceWebState.ceWebData}
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
            <h4 className={classes.cardIconTitle}>Civic participation хүснэгт</h4>
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
              data={participationState.participationData}
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
            <h4 className={classes.cardIconTitle}>Youth Development хүснэгт</h4>
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
              data={youthwebState.youthwebData}
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
            <h4 className={classes.cardIconTitle}>Ecological Education хүснэгт</h4>
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
              data={ecologiWebState.ecologiWebData}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
