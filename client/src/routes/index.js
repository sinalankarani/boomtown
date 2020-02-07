import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Items from "../pages/Items";
import Home from "../pages/Home";
import Share from "../pages/Share";
import Profile from "../pages/Profile";
import NavBar from "../components/NavBar";
import PRoute from "../components/PrivateRoute";
import { ViewerContext } from "../context/ViewerProvider";
import FullScreenLoader from "../components/FullScreenLoader";

export default () => (
  <ViewerContext.Consumer>
    {({ viewer, loading }) => {
      if (loading) return <FullScreenLoader />;
      if (!viewer) {
        return (
          <Switch>
            <Route exact path="/home" name="home" component={Home} />
            <Redirect from="*" to="/home" />
          </Switch>
        );
      }

      return (
        <Fragment>
          <NavBar />
          <Switch>
            <PRoute exact path="/items" component={Items} />
            <PRoute exact path="/share" component={Share} />
            <PRoute exact path="/Profile" component={Profile} />
            <PRoute exact path="/profile/:id" component={Profile} />
            <Redirect exact path="*" to="/items" />
          </Switch>
        </Fragment>
      );
    }}
  </ViewerContext.Consumer>
);
