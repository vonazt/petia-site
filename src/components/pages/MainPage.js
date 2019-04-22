import React, { Fragment } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import Home from "./Home";
import About from "./About";
import Work from "./Work";

const MainPage = () => {
  return (
    <ParallaxProvider>
      <Fragment>
        <Parallax y={[-40, 40]}>
          <section className="down-slope">
            <Home />
          </section>
        </Parallax>
        <section className="sloped" style={{ marginTop: "-10rem" }}>
          <About />
        </section>
        <Work />
      </Fragment>
    </ParallaxProvider>
  );
};

export default MainPage;
