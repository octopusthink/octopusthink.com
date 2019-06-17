import { List, Paragraph } from "@octopusthink/nautilus";
import React, { Component } from "react";
import { Link } from "gatsby";
import { css } from "@emotion/core";
import { Compass, Camera, HelpCircle, Send, Coffee } from "react-feather";

import config from "../../../data/SiteConfig";

class SiteHeader extends Component {
  render() {
    return (
      <header
        css={css`
          display: flex;
          justify-content: space-between;
          font-weight: 600;
          border-bottom: 3px solid #393f49;
          font-family: -apple-system, BlinkMacSystemFont, San Francisco, Roboto,
            Segoe UI, Helvetica Neue, sans-serif;
          font-size: 1.8rem;
          font-weight: 500;
          align-items: center;

          @media screen and (max-width: 479px) {
            margin-bottom: 64px;
          }

          a {
            text-decoration: none;
            border: none;
            color: #393f49;
            padding-bottom: 8px;
            display: flex;
            flex-direction: column;
            align-items: center;
            grid-gap: 4px;

            &:hover {
              color: #a42769;
            }

            @media screen and (max-width: 479px) {
              padding: 16px 8px;
              font-size: 1.6rem;
            }
          }
        `}
      >
        <Link
          to="/"
          css={css`
            font-size: 2.6rem;
            align-items: start !important;

            @media screen and (max-width: 479px) {
              font-size: 2.6rem !important;
              padding: 8px 0 !important;
            }
          `}
        >
          {config.siteTitle}
        </Link>

        <nav>
          <ul
            css={css`
              list-style-type: none;
              display: flex;


              @media screen and (max-width: 479px) {
                position: fixed;
                bottom: 0;
                left: 0;
                right: 0;
                margin-left: -40px;
                grid-gap: 0;
                justify-content: space-between;
                width: calc(100% + 40px);
                background: white;
                margin-bottom: 0;
                border-top: 2px solid #393f49;
              }

              @media screen and (min-width: 480px) {
                grid-gap: 48px;
              }
            `}
          >
            <li>
              <Link to="/">
                <Compass />
                Home
              </Link>
            </li>

            <li>
              <Link to="/about">
                <HelpCircle />
                About
              </Link>
            </li>

            <li>
              <Link to="/services">
                <Coffee />
                Services
              </Link>
            </li>
            <li>
              <Link to="/work">
                <Camera />
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Send />
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default SiteHeader;
