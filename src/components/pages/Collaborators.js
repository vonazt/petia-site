import React, {Component} from 'react'
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default class Collaborators extends Component {

  render() {
    return (
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
    )
  }
}