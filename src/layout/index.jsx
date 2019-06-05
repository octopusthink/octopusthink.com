import { Nautilus } from '@octopusthink/nautilus';
import React from "react";
import Helmet from "react-helmet";

import config from "../../data/SiteConfig";
import SiteHeader from "../components/SiteHeader";

import "./index.css";

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <Nautilus>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <SiteHeader />
        {children}
      </Nautilus>
    );
  }
}
