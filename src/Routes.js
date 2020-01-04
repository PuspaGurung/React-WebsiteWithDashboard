import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./HOC/Layout";
import Home from "./Components/Home";

const Routes = props => {
  return (
    <Layout>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </Layout>
  );
};

export default Routes;
