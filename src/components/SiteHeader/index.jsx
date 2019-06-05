import React, { Component } from "react";
import { Link } from "gatsby";

class SiteHeader extends Component {
  render() {
    const { config } = this.props;
    return (
      <header>
        <p><Link to="/">Octopus Think</Link></p>

        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/work">Work</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default SiteHeader;
