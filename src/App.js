import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import Navbar from "./components/common/Navbar";


import "bulma";
class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Navbar />
          <Route exact path="/" component={MainPage} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
