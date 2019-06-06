import { List, Paragraph } from "@octopusthink/nautilus";
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
        font-weight: 600;
        border-bottom: 3px solid #393F49;
        font-family: -apple-system,BlinkMacSystemFont,San Francisco,Roboto,Segoe UI,Helvetica Neue,sans-serif;
        font-size: 1.8rem;
        font-weight: 500;
        align-items: center;

        a {
          text-decoration: none;
          border: none;
          color: #393F49;
          padding-bottom: 8px;

          &:hover {
            color: #A42769;
          }
        }
        `}>
        <Link to="/">Octopus Think</Link>

        <nav>
          <ul css={css`
            list-style-type: none;
            display: flex;
            grid-gap: 24px;
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
