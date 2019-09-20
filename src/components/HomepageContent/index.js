import {
  Button,
  Emphasis,
  Heading,
  Link,
  List,
  Paragraph,
  Strong,
  metadata,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';

import IllustratedPoint from '../IllustratedPoint';
import AccessibilityIllustration from '../../../static/illustrations/accessibility.svg';
import StrategyIllustration from '../../../static/illustrations/strategy.svg';
import AppIllustration from '../../../static/illustrations/app.svg';
import WebIllustration from '../../../static/illustrations/web.svg';
import ProductIllustration from '../../../static/illustrations/product.svg';
import VisualIllustration from '../../../static/illustrations/visual.svg';
import Panel from '../Panel';

const HomepageContent = () => {
  return (
    <React.Fragment>
      <Panel>
        <Heading>Who we are</Heading>
        <Paragraph>
          We're a duo based in Scotland with three decades of design and development experience.
        </Paragraph>
        <Paragraph>
          Matt is our Chief Technical Octopus, a software developer and vintage motorcycle
          enthusiast. Sarah is our Chief Design Octopus, a graphic and product designer with a
          penchant for bold colours and impractical footwear.
        </Paragraph>

        <Button navigation to="/about" minimal>
          Read more about us
        </Button>
      </Panel>
      <Panel dark grid="1fr 1fr 1fr">
        <Heading
          css={css`
            color: ${theme.colors.text.inverseLight};
            grid-column: 1 / 4;
          `}
        >
          What we do
        </Heading>
        <IllustratedPoint
          label="Strategy & training"
          illustration={StrategyIllustration}
        ></IllustratedPoint>

        <IllustratedPoint
          label="Accessibility"
          illustration={AccessibilityIllustration}
        ></IllustratedPoint>

        <IllustratedPoint label="Web development" illustration={WebIllustration}></IllustratedPoint>

        <IllustratedPoint label="App development" illustration={AppIllustration}></IllustratedPoint>

        <IllustratedPoint
          label="Product design"
          illustration={ProductIllustration}
        ></IllustratedPoint>

        <IllustratedPoint
          label="Visual design"
          illustration={VisualIllustration}
        ></IllustratedPoint>

        <Button
          css={css`
            color: ${theme.colors.text.inverseLight};
            background: transparent !important;
            grid-column: 1 / 4;
          `}
          navigation
          to="/services"
          minimal
        >
          Learn more about our services
        </Button>
      </Panel>

      <Panel>
        <Heading>Work with us</Heading>
        <Paragraph>
          Have a project you’d like to discuss? Drop us a line for a no-strings-attached estimate.
        </Paragraph>

        <Button navigation to="/contact" minimal>
          Get in touch with us
        </Button>
      </Panel>
    </React.Fragment>
  );
};

export default HomepageContent;
