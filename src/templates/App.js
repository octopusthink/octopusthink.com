import { css, Global } from '@emotion/core';
import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import 'typeface-inter';

import GhostShipMDX from 'components/GhostShipMDX';
import SiteHeader from 'components/SiteHeader';
import SiteFooter from 'components/SiteFooter';

export const App = (props) => {
  const theme = useTheme();
  const { children } = props;

  return (
    <GhostShipMDX>
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
              background: linear-gradient(
                  -180.5deg,
                  rgba(255, 255, 255, 0) 45%,
                  ${theme.colors.text.strongBackground} 45%,
                  ${theme.colors.text.strongBackground} 85%,
                  rgba(255, 255, 255, 0) 85%
                ) !important;
                padding-right: 0.1em;
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
    </GhostShipMDX>
  );
};

export default App;
