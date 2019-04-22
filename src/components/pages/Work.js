import React, { Component, Fragment } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons";

class Work extends Component {
  render() {
    return (
      <Fragment>
        <section className="work-container">
          <div className="columns">
            <div className="column is-fullwidth">
              <h2 className="section-heading" style={{ color: "white" }}>
                Work
              </h2>
            </div>
          </div>
          <div className="carousel-container">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={30}
              totalSlides={3}
              isPlaying={true}
              interval={10000}
            >
              <div className="columns is-vcentered is-centered">
                <div className="column is-narrow">
                  <ButtonBack className="arrow-left" />
                </div>
                <div className="column is-half">
                  <Slider>
                    <Slide index={0}>
                      <h2 className="quote">
                        "First quote about working with Petia and how brilliant
                        it is"
                      </h2>
                    </Slide>
                    <Slide index={1}>
                      <h2 className="quote">
                        "Second slide about what a professionl and life-changing
                        experience this was for me"
                      </h2>
                    </Slide>
                    <Slide index={2}>
                      <h2 className="quote">
                        "Third Slide about why you should definitely work with
                        Petia if you're not a complete moron"
                      </h2>
                    </Slide>
                  </Slider>
                </div>
                <div className="column is-narrow">
                  <ButtonNext className="arrow-right" />
                </div>
              </div>
            </CarouselProvider>
          </div>
          <div className="container">
            <div className="columns">
              <div className="column is-one-third">
                <h2 className="work-heading">
                  Coaching{" "}
                  <br/><FontAwesomeIcon icon={faCouch} size="2x" color="white" />{" "}
                </h2>
              </div>
              <div className="column is-one-third">
                <h2 className="work-heading">
                  Project Management & Design{" "}
                  <br/><FontAwesomeIcon icon={faCouch} size="2x" color="white" />{" "}
                </h2>
              </div>
              <div className="column is-one-third">
                <h2 className="work-heading">
                  Consulting{" "}
                  <br/><FontAwesomeIcon icon={faCouch} size="2x" color="white" />{" "}
                </h2>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Work;
