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
        `}>
        <Paragraph small><Link to="/">Octopus Think</Link></Paragraph>

        <nav>
          <List css={css`
            list-style-type: none;
            display: flex;
            grid-gap: 8px;

          `}>
            <List.Item><Link to="/">Home</Link></List.Item>
            <List.Item><Link to="/about">About</Link></List.Item>
            <List.Item><Link to="/services">Services</Link></List.Item>
            <List.Item><Link to="/work">Work</Link></List.Item>
            <List.Item><Link to="/contact">Contact</Link></List.Item>
          </List>
        </nav>
      </header>
    );
  }
}

export default SiteHeader;
