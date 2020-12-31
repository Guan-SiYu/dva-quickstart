import React from "react";
import { Router, Route, Switch } from "dva/router";
import IndexPage from "./routes/IndexPage";
import ProductsPage from "./routes/Products";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/products" exact component={ProductsPage} />
        <Route path="/" exact component={IndexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
