import React, { Component, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
// import Navbar from "./components/common/Navbar";


import "bulma";
class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
