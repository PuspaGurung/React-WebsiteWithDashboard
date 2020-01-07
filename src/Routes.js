import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/authRoutes/PrivateRoutes";

import Layout from "./HOC/Layout";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import Dashboard from "./Components/admin/Dashboard";

const Routes = props => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <Route component={SignIn} path="/sign-in" />
        <Route component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
