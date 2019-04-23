import React, { Fragment, useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <section className="hero is-fullheight landing-container">
        <div className="hero-body">
          <div className="container">
            <h1 className="landing-title gradient">Petia Tzanova</h1>
            <h2 className="landing-subtitle">Coaching & Facilitation</h2>
            <h2 className="landing-subtitle">Project Design & Management</h2>
            <h2 className="landing-subtitle">Consulting</h2>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
