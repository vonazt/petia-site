import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";


import "bulma";
class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
