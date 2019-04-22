import React, { Component, Fragment } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

class Work extends Component {
  render() {
    return (
      <Fragment>
        <section className="work-container">
          <div className="container">
            <CarouselProvider
              naturalSlideWidth={100}
              naturalSlideHeight={30}
              totalSlides={3}
            >
              <div className="columns is-vcentered is-centered">
                <div className="column is-narrow">
                  <ButtonBack className="arrow-left" />
                </div>
                <div className="column is-half">
                  <Slider>
                    <Slide index={0}>
                      <h2 className="quote">"First slde"</h2>
                    </Slide>
                    <Slide index={1}>
                      <h2 className="quote">"Second slide"</h2>
                    </Slide>
                    <Slide index={2}>
                      <h2 className="quote">"Third Slide"</h2>
                    </Slide>
                  </Slider>
                </div>
                <div className="column is-narrow">
                  <ButtonNext className="arrow-right" />
                </div>
              </div>
            </CarouselProvider>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Work;
