import React, { Component } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";

class SiteHeader extends Component {
  render() {
    const { config } = this.props;
    return (
      <header css={css`
        display: flex;
        justify-content: space-between;
        `}>
        <p><Link to="/">Octopus Think</Link></p>

        <nav>
          <ul css={css`
            list-style-type: none;
            display: flex;
            grid-gap: 8px;

          `}>
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
