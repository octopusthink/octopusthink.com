import { Button, Heading, Paragraph, Strong, useTheme } from '@octopusthink/nautilus';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import { css } from '@emotion/core';

import IllustratedPoint from 'components/IllustratedPoint';
import Panel from 'components/Panel';
import AccessibilityIllustration from 'static/illustrations/accessibility.svg';
import StrategyIllustration from 'static/illustrations/strategy.svg';
import AppIllustration from 'static/illustrations/app.svg';
import WebIllustration from 'static/illustrations/web.svg';
import ProductIllustration from 'static/illustrations/product.svg';
import VisualIllustration from 'static/illustrations/visual.svg';

const HomepageContent = () => {
  const staticData = useStaticQuery(graphql`
    {
      sarahAndMattPhoto: file(relativePath: { eq: "photos/sarah-and-matt.jpg" }) {
        childImageSharp {
          fixed(height: 400, width: 400) {
            base64
            height
            src
            srcSet
            width
          }
        }
      }
      octopusSketch: file(
        relativePath: { eq: "illustrations/construction-sketch-transparent.png" }
      ) {
        childImageSharp {
          fluid {
            aspectRatio
            src
            srcSet
            sizes
            tracedSVG
          }
        }
      }
    }
  `);
  const theme = useTheme();

  const { octopusSketch, sarahAndMattPhoto } = staticData;

  return (
    <React.Fragment>
      <Panel grid="auto 40rem">
        <div>
          <Heading>Who we are</Heading>
          <Paragraph>
            We’re a duo based in Scotland with three decades of{' '}
            <Strong>design and development</Strong> experience.
          </Paragraph>
          <Paragraph>
            Matt is our Chief Technical Octopus, a software developer and vintage motorcycle
            enthusiast. Sarah is our Chief Design Octopus, a graphic and product designer with a
            penchant for bold colours and impractical footwear.
          </Paragraph>
          <Paragraph>
            We don’t take ourselves too seriously, but we do <Strong>great work</Strong>.
          </Paragraph>

          <Button
            css={css`
              max-width: max-content;
            `}
            minimal
            navigation
            to="/about/"
          >
            Read about us
          </Button>
        </div>
        <Img
          fixed={sarahAndMattPhoto.childImageSharp.fixed}
          alt="Sarah and Matt discussing cufflinks."
          css={css`
            border-radius: 100%;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.125);
          `}
        />
      </Panel>
      <Panel dark grid="1fr 1fr 1fr" gridSmall="1fr 1fr">
        <Heading
          css={css`
            color: ${theme.colors.text.inverseLight};
            grid-column: 1 / -1;
            text-align: center;
            margin: 0;
          `}
        >
          What we do
        </Heading>

        <IllustratedPoint label="Accessibility" illustration={AccessibilityIllustration} />

        <IllustratedPoint label="Web development" illustration={WebIllustration} />

        <IllustratedPoint label="App development" illustration={AppIllustration} />

        <IllustratedPoint label="Strategy & training" illustration={StrategyIllustration} />

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
          Explore our services
        </Button>
      </Panel>

      <Panel grid="40rem auto">
        <Img
          fluid={octopusSketch.childImageSharp.fluid}
          alt="A sketch of our mascot, Bubbles: an octopus wearing a hard hat and safety goggles."
        />
        <div
          css={css`
            align-self: center;
          `}
        >
          <Heading>Work with us</Heading>

          <Paragraph>
            Our website is still under construction. That’s why our friend Bubbles here is wearing a
            hard hat—and why he’s still in pencil-sketch format. More is coming soon, so stay tuned!
          </Paragraph>
          <Paragraph>
            Have a project you’d like to discuss? Drop us a line for a{' '}
            <Strong>no-strings-attached</Strong> estimate.
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
