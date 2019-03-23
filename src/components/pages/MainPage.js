import React, { Fragment } from "react";
import Home from "./Home";
import About from "./About";

const MainPage = () => (
  <Fragment>
    <div className="parallax">
      <div className="parallax-layer parallax-layer-back">
        <Home />
      </div>
      <div className="parallax-layer parallax-layer-base">
        <About />
      </div>
    </div>
  </Fragment>
);

export default MainPage;
