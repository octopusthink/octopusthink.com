import { Button, Heading, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import IllustratedPoint from '../IllustratedPoint';
import AccessibilityIllustration from '../../../static/illustrations/accessibility.svg';
import StrategyIllustration from '../../../static/illustrations/strategy.svg';
import AppIllustration from '../../../static/illustrations/app.svg';
import WebIllustration from '../../../static/illustrations/web.svg';
import ProductIllustration from '../../../static/illustrations/product.svg';
import VisualIllustration from '../../../static/illustrations/visual.svg';
import Panel from '../Panel';

const HomepageContent = () => {
  const theme = useTheme();
  return (
    <React.Fragment>
      <Panel>
        <Heading>Who we are</Heading>
        <Paragraph>
          We’re a duo based in Scotland with three decades of design and development experience.
        </Paragraph>
        <Paragraph>
          Matt is our Chief Technical Octopus, a software developer and vintage motorcycle
          enthusiast. Sarah is our Chief Design Octopus, a graphic and product designer with a
          penchant for bold colours and impractical footwear.
        </Paragraph>

        <Button minimal navigation to="/about/">
          Read more about us
        </Button>
      </Panel>
      <Panel dark grid="1fr 1fr 1fr" gridSmall="1fr 1fr">
        <Heading
          css={css`
            color: ${theme.colors.text.inverseLight};
            grid-column: 1 / -1;
          `}
        >
          What we do
        </Heading>

        <IllustratedPoint label="Strategy & training" illustration={StrategyIllustration} />

        <IllustratedPoint label="Accessibility" illustration={AccessibilityIllustration} />

        <IllustratedPoint label="Web development" illustration={WebIllustration} />

        <IllustratedPoint label="App development" illustration={AppIllustration} />

        <IllustratedPoint label="Product design" illustration={ProductIllustration} />

        <IllustratedPoint label="Visual design" illustration={VisualIllustration} />

        <Button
          css={css`
            grid-column: 1 / -1;
            margin: 0 auto;
            max-width: max-content;
          `}
          navigation
          primary
          to="/services/"
        >
          Learn more about our services
        </Button>
      </Panel>

      <Panel grid="40rem auto">
        <img
          src="/illustrations/construction-sketch-transparent.png"
          alt="A sketch of our mascot, Bubbles: an octopus wearing a hard hat and safety goggles."
          width="480"
          height="480"
          css={css`
            max-width: 100%;
            height: auto;
          `}
        />
        <div
          css={css`
            align-self: center;
          `}
        >
          <Heading>Work with us</Heading>

          <Paragraph>
            Our website is still under construction, as evidenced by our friend Bubbles still
            needing a hard hat. More is coming soon, so stay tuned!
          </Paragraph>
          <Paragraph>
            Have a project you’d like to discuss? Drop us a line for a no-strings-attached estimate.
          </Paragraph>

          <Button minimal navigation to="/contact/">
            Get in touch with us
          </Button>
        </div>
      </Panel>
    </React.Fragment>
  );
};

export default HomepageContent;
