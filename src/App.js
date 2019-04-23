import React, { Component, Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MainPage from "./components/pages/MainPage";
import About from "./components/pages/About";
import Work from "./components/pages/Work/";
import { Coaching } from "./components/pages/Work/Coaching";
import { ProjectManagement } from "./components/pages/Work/ProjectManagement";

import "bulma";
class App extends Component {
  render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/work" component={Work} />
          <Route exact path="/work/coaching" component={Coaching} />
          <Route
            exact
            path="/work/project-management"
            component={ProjectManagement}
          />
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
