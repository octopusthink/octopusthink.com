import { List, Paragraph } from "@octopusthink/nautilus";
import React, { Component } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { Compass, Camera, HelpCircle, Send, Coffee } from 'react-feather';

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
          display: flex;
          flex-direction: column;
          align-items: center;
          grid-gap: 4px;

          &:hover {
            color: #A42769;
          }
        }
        `}>
        <Link to="/" css={css`
            font-size: 2.6rem;
            align-items: start !important;
          `}>
          Octopus
          <span css={css`
            font-weight: 600;
            `}>Think</span>
        </Link>

        <nav>
          <ul css={css`
            list-style-type: none;
            display: flex;
            grid-gap: 48px;
          `}>
            <li>
              <Link to="/">
                <Compass/>
                Home
              </Link>
            </li>

            <li><Link to="/about">
              <HelpCircle/>About</Link>
            </li>

            <li><Link to="/services"><Coffee/>Services</Link></li>
            <li><Link to="/work"><Camera/>Work</Link></li>
            <li><Link to="/contact"><Send/>Contact</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default SiteHeader;
