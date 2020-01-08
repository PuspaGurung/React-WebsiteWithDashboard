import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./Components/authRoutes/PrivateRoutes";
import PublicRoute from "./Components/authRoutes/PublicRoutes";

import Layout from "./HOC/Layout";
import Home from "./Components/Home";
import SignIn from "./Components/Signin";
import Dashboard from "./Components/admin/Dashboard";

import AdminMatches from "./Components/admin/matches";
import AddEditMatch from "./Components/admin/matches/addEditMatches";

const Routes = props => {
  console.log(props);
  return (
    <Layout>
      <Switch>
        <PrivateRoute
          {...props}
          component={AddEditMatch}
          exact
          path="/admin_matches/edit_matches/:id"
        />
        <PrivateRoute
          {...props}
          component={AdminMatches}
          exact
          path="/admin_matches"
        />
        <PrivateRoute
          {...props}
          component={Dashboard}
          exact
          path="/dashboard"
        />
        <PublicRoute
          component={SignIn}
          {...props}
          path="/sign_in"
          restricted={true}
          exact
        />
        <PublicRoute
          component={Home}
          {...props}
          path="/"
          restricted={false}
          exact
        />
      </Switch>
    </Layout>
  );
};

export default Routes;
