import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../routes";
import { CHAT_ROUTE, LOGIN_ROUTE } from "../utils/consts";

const AppRouter = () => {
  const user = false;

  return user ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true}></Route>
      ))}

      <Redirect to={CHAT_ROUTE}></Redirect>
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} component={Component} exact={true}></Route>
      ))}

      <Redirect to={LOGIN_ROUTE}></Redirect>
    </Switch>
  );
};

export default AppRouter;
