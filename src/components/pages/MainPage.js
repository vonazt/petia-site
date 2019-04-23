import React, { Fragment } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Home from "./Home";
import About from "./About";
import Work from "./Work/";
import Collaborators from "./Collaborators";
import Navbar from "../common/Navbar";

const MainPage = () => {
  return (
    <ParallaxProvider>
      <Fragment>
      <Navbar />
        <Parallax y={[-40, 40]}>
          <section className="down-slope">
            <Home />
          </section>
        </Parallax>
        <section className="sloped">
          <About />
        </section>
        <section className="sloped">
          <Parallax y={[-20, 20]}>
            <Work />
          </Parallax>
        </section>
        <Collaborators />
      </Fragment>
    </ParallaxProvider>
  );
};

export default MainPage;
