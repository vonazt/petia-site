import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="container">
            <h1 className="landing-title gradient">Petia Tzanova</h1>
            <h2 className="landing-subtitle">Coaching & Facilitation</h2>
            <h2 className="landing-subtitle">Project Design & Management</h2>
            <h2 className="landing-subtitle">Consulting</h2>
            <h3 className="landing-subtitle gradient">
              Full website coming soon. Meanwhile drop me a note at{" "}
              <a href="mailto:hello@petia.uk" target="_blank" rel="noopener noreferrer" style={{borderBottom: "1px solid white"}}>
               hello@petia.uk
              </a>
            </h3>
          </div>
        </div>
      </section>
    );
  }
}
