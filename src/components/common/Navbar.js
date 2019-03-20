import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Navbar extends Component {
  state = {
    navbarOpen: false
  };

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false });
    }
  }

  render() {
    return (
      <nav className="navbar is-fixed-top" role="navigation" aria-label="main-naivagation">
        <div className="navbar-brand">
          <a
            className={`navbar-burger${
              this.state.navbarOpen ? " is-active" : ""
            }`}
            role="button"
            href="#menu"
            aria-label="menu"
            aria-expanded="false"
            onClick={this.toggleNavbar}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div
          className={`navbar-menu${this.state.navbarOpen ? " is-active" : ""}`}
        >
          <div className="navbar-end">
            <Link
              to="/about"
              className="navbar-item"
            >
              About
            </Link>
            <Link
              to="/work"
              className="navbar-item"
            >
              Work
            </Link>
            <Link
              to="/collaborators"
              className="navbar-item"
            >
              Collaborators
            </Link>
            <Link
              to="/contact"
              className="navbar-item"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar)