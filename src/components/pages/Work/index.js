import React, { Component, Fragment } from "react";
import  {Link} from 'react-router-dom'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCouch,
  faTasks,
  faChalkboardTeacher
} from "@fortawesome/free-solid-svg-icons";

export default class Work extends Component {
  render() {
    return (
      <Fragment>
        <section className="work-container">
          <div className="columns">
            <div className="column is-fullwidth">
              <h2
                className="section-heading"
                style={{ color: "white", marginBottom: "1.5rem" }}
              >
                Work
              </h2>
            </div>
          </div>

          <div className="container">
            <div className="columns">
              <div
                className="column is-one-third icon-column"
                style={{ paddingRight: "3rem" }}
              >
                <FontAwesomeIcon icon={faCouch} size="4x" color="white" />
                <h2 className="work-heading">Coaching </h2>
                <p className="blurb">
                  A short blurb on coaching here, detailing what you do and why
                  it's for the greater good
                </p>
                <Link to={"/work/coaching"}><p className="blurb" style={{ textAlign: "right" }}>
                  READ MORE...
                </p></Link>
              </div>

              <div
                className="column is-one-third icon-column"
                style={{ padding: "inherit 1.5rem" }}
              >
                <FontAwesomeIcon icon={faTasks} size="4x" color="white" />
                <h2 className="work-heading">Project Management & Design</h2>
                <p className="blurb">
                  A short blurb on project management here, detailing what you
                  do and why it's for the greater good
                </p>
                <p className="blurb" style={{ textAlign: "right" }}>
                  READ MORE...
                </p>
              </div>

              <div
                className="column is-one-third icon-column"
                style={{ paddingLeft: "3rem" }}
              >
                <FontAwesomeIcon
                  icon={faChalkboardTeacher}
                  size="4x"
                  color="white"
                />
                <h2 className="work-heading">Consulting</h2>
                <p className="blurb">
                  A short blurb on consulting here, detailing what you do and
                  why it's for the greater good
                </p>
                <p className="blurb" style={{ textAlign: "right" }}>
                  READ MORE...
                </p>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

