import React from "react";

import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={() =>
      localStorage.getItem("token") ? <Component /> : <Redirect to="/login" />
    }
  />
);
