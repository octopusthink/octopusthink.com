import { css, Global } from '@emotion/core';
import Nautilus from '@octopusthink/nautilus';
import { Link } from 'gatsby';
import React from 'react';
import 'typeface-inter';

import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import theme from '../../config/theme';

export const App = (props) => {
  const { children } = props;

  return (
    <Nautilus theme={theme} config={{ LinkComponent: Link }}>
      <Global
        styles={css`
          body {
            background: ${theme.colors.neutral.white};
            margin: 0;

            h1,
            h2,
            h3,
            h4 {
              color: ${theme.colors.text.dark};
            }

            h2 {
              letter-spacing: -0.04em;
            }

            h3 {
              color: ${theme.colors.text.default};
              letter-spacing: -0.035em;
              margin-bottom: 1.6rem !important;
            }

            h1 strong,
            h2 strong,
            h3 strong,
            h3 strong,
            strong {
              background-color: transparent !important;
              background-image: linear-gradient(
                  181deg,
                  rgba(255, 255, 255, 0) 50%,
                  ${theme.colors.text.strongBackground} 50%,
                  ${theme.colors.text.strongBackground} 90%,
                  rgba(255, 255, 255, 0) 90%
                ) !important;
                padding-right: 0.2em;
                position: relative;
                z-index: 2;

                &::before {
                  content: '';
                  position: absolute;
                  top: 0;
                  left: 0;
                  width: 0.4em;
                  bottom: 0;
                  background: white;
                  z-index: -1;
                }
              }
            }

            p {
              letter-spacing: -0.015em;
            }

            p + h2 {
              padding-top: 3.2rem;
            }

            p + h3 {
              padding-top: 1.6rem;
            }
          }
        `}
      />
      <SiteHeader />
      <main id="content">{children}</main>
      <SiteFooter />
    </Nautilus>
  );
};

export default App;
