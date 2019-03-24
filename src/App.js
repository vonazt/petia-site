import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";
import Work from "./components/pages/Work";
import Navbar from "./components/common/Navbar";


import "bulma";
class App extends Component {
    

  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Fragment>
        <Navbar />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
