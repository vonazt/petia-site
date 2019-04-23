import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavLink from "./NavLink";

class Navbar extends Component {
  state = {
    navbarOpen: false,
    navClass: { navbar: "landing-nav", item: "landing-nav-item" }
  };

  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.setState({ navbarOpen: false });
    }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll, true);
    if (this.props.location.pathname === "/work/coaching")
      this.setState({
        navClass: { navbar: "about-nav", item: "about-nav-item" }
      });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    if (
      this.props.location.pathname !== "/work/coaching" &&
      (window.pageYOffset < 900 || window.pageYOffset >= 1705)
    )
      this.setState({
        navClass: { navbar: "landing-nav", item: "landing-nav-item" }
      });
    if (window.pageYOffset >= 900 && window.pageYOffset < 1705)
      this.setState({
        navClass: { navbar: "about-nav", item: "about-nav-item" }
      });
  };

  render() {
    const { navClass } = this.state;
    const {
      location: { pathname }
    } = this.props;
    return (
      <nav
        className={`navbar ${navClass.navbar}`}
        role="navigation"
        aria-label="main-naivagation"
      >
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
            {pathname !== "/" && (
              <NavLink section="Home" navClass={navClass.item} />
            )}
            {pathname !== "/about" && (
              <NavLink section="About" navClass={navClass.item} />
            )}
            {pathname !== "/work" && (
              <NavLink section="Work" navClass={navClass.item} />
            )}
            {pathname !== "/collaborators" && (
              <NavLink section="Collaborators" navClass={navClass.item} />
            )}
            {pathname !== "/contacts" && (
              <NavLink section="Contacts" navClass={navClass.item} />
            )}
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
