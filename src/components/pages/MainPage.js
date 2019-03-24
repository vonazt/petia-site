import React, { Fragment } from "react";
import Home from "./Home";
import About from "./About";
import Work from "./Work";

class MainPage extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="parallax">
          <div className="parallax-group">
            <div className="parallax-layer parallax-layer-back">
              <Home />
            </div>
            {/* <div className="parallax-layer parallax-layer-base">
             
            </div> */}
          </div>
          <div className="parallax-group">
            <div className="parallax-layer parallax-layer-forward">
              <section className="sloped">
                <About />
              </section>
            </div>
            <div className="parallax-layer parallax-layer-forwarder">
              <Work />
            </div>
          </div>

          {/* <div className="parallax-layer parallax-layer-back">
            <Work />
          </div> */}
        </div>
      </Fragment>
    );
  }
}

export default MainPage;
