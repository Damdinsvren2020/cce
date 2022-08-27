/*!

=========================================================
* Material Dashboard PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";
// import RtlLayout from "layouts/RTL.js";
import AdminLayout from "layouts/Admin.js";

import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";

import App from "./App";

// const hist = createBrowserHistory();
// let authenticated = false;
// let isLoading = true;
// let display = <div>Loading ...</div>;
// if (!isLoading && !authenticated) {
//   display = (
//     <Switch>
//       <Route path="/auth" component={AuthLayout} />
//       <Redirect from="/" to="/auth" />
//     </Switch>
//   );
// } else if (!isLoading && authenticated) {
//   display = (
//     <Switch>
//       <Route path="/admin" component={AdminLayout} />
//       <Redirect from="/" to="/admin/dashboard/" />
//     </Switch>
//   );
// }

ReactDOM.render(<App />, document.getElementById("root"));
