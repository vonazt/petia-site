import React, { Component } from "react";
export default class Home extends Component {
  render() {
    return (
      <section class="hero is-fullheight">
        <div class="hero-body">
          <div class="container">
            <h1 class="landing-title gradient">Petia Tzanova</h1>
            <h2 class="landing-subtitle">Coaching & Facilitation</h2>
            <h2 class="landing-subtitle">Project Design & Management</h2>
            <h2 class="landing-subtitle">Consulting</h2>
            <h3 class="landing-subtitle gradient">
              Full website coming soon. Meanwhile drop me a note at{" "}
              <a href="mailto:hello@petia.uk" style={{borderBottom: "1px solid white"}}>
               hello@petia.uk
              </a>
            </h3>
          </div>
        </div>
      </section>
    );
  }
}
