import { BrowserRouter, Link, Switch, Route } from "react-router-dom";
import { CssModules } from "../compornents/CssModules";
import { Emotion } from "../compornents/Emotion";
import { InlineStyle } from "../compornents/InlineStyle";
import { StyledCompornents } from "../compornents/StyledCompornets";
import { StyledJSX } from "../compornents/StyledJsx";
import { Home } from "../Home";
import { Page404 } from "../Page404";
import { Page1Routes } from "./Page1Routes";
import { Page2Routes } from "./Page2Routes";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
        <InlineStyle />
        <CssModules />
        <StyledJSX />
        <StyledCompornents />
        <Emotion />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {Page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
