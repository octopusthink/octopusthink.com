import { css } from '@emotion/core';
import { Icon, Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import Emoji from 'a11y-react-emoji';
import React from 'react';

import Logo from '../../../static/octopusthink.svg';
import SiteMap from '../SiteMap';

const SiteFooter = () => {
  const theme = useTheme();
  return (
    <footer
      css={css`
        background: ${theme.colors.neutral.black};
        position: relative;
        overflow: hidden;

        ::before {
          content: '';
          display: block;
          width: 120%;
          margin-left: -10%;
          overflow: hidden;
          height: 50px;
          background-image: linear-gradient(
            to bottom left,
            ${theme.colors.neutral.white},
            ${theme.colors.neutral.white} 46%,
            ${theme.colors.accent.primary} 47%,
            ${theme.colors.accent.primary} 53%,
            ${theme.colors.neutral.black} 54%,
            ${theme.colors.neutral.black}
          );
        }
      `}
    >
      <div
        css={css`
          padding: ${theme.site.mobilePadding};

          @media screen and (min-width: 640px) {
            padding: ${theme.site.tabletPadding};
          }
          @media screen and (min-width: 1024px) {
            padding: ${theme.site.desktopPadding};
            max-width: ${theme.site.maxSiteWidth};
            margin: 0 auto;
            display: grid;
            grid-template-columns: 7fr 5fr;
            grid-gap: ${theme.site.desktopPadding};
          }
        `}
      >
        <div>
          <Logo
            css={css`
              margin: 0 0 3.2rem -1.6rem;
              max-width: 32rem;
            `}
          />
          <Paragraph
            large
            inverse
            css={css`
              letter-spacing: -0.025em;
            `}
          >
            Octopus Think is a design & technology company based in Scotland with a special interest
            in leveraging technology to make the world a better place.
          </Paragraph>
          <Paragraph
            large
            inverse
            css={css`
              letter-spacing: -0.017em;
            `}
          >
            We <Emoji symbol="❤" label="love" />️ inclusion, open source, emerging technologies,
            design systems, and React development. We focus on solutions that are accessible,
            usable, and beautiful.
          </Paragraph>

          <div
            css={css`
              margin-bottom: 3.2rem;

              a {
                border: 0;

                &:focus,
                &:hover {
                  background: none;
                }

                  &:focus {
                    span {
                      box-shadow: 0 0 0 3px ${theme.colors.accent.primaryLight};
                    }
                  }

                  &:hover {
                    span {
                      background: ${theme.colors.accent.primaryLight};
                      box-shadow: 0 0 0 2px ${theme.colors.accent.primaryLight};
                    }
                  }
                }
              }
            `}
          >
            <Link as="a" href="//instagram.com/octopusthinks">
              <Icon
                background={theme.colors.neutral.white}
                fillColor={theme.colors.accent.primaryLight}
                strokeColor={theme.colors.accent.primaryDark}
                name="instagram"
                color={theme.colors.neutral.black}
                title="Follow on Instagram"
              />
            </Link>
            <Link as="a" href="//twitter.com/octopusthinks">
              <Icon
                background={theme.colors.neutral.white}
                fillColor={theme.colors.accent.primaryLight}
                strokeColor={theme.colors.accent.primaryDark}
                name="twitter"
                color={theme.colors.neutral.black}
                title="Follow on Twitter"
              />
            </Link>
            <Link as="a" href="//github.com/octopusthink">
              <Icon
                background={theme.colors.neutral.white}
                fillColor={theme.colors.accent.primaryLight}
                strokeColor={theme.colors.accent.primaryDark}
                name="github"
                color={theme.colors.neutral.black}
                title="Follow on Github"
              />
            </Link>
            <Link as="a" href="mailto:hello@octopusthink.com">
              <Icon
                background={theme.colors.neutral.white}
                fillColor={theme.colors.accent.primaryLight}
                strokeColor={theme.colors.accent.primaryDark}
                name="mail"
                color={theme.colors.neutral.black}
                title="Send an email"
              />
            </Link>
          </div>
        </div>

        <div>
          <SiteMap />

          <Paragraph
            small
            inverse
            dark
            css={css`
              font-size: 1.6rem;
              margin: 0;
            `}
          >
            <span
              css={css`
                display: none;
              `}
            >
              Copyright
            </span>{' '}
            © 2019 Octopus Think Ltd.
            <br />
            UK Registered Company No. 11747595
            <br />
            VAT ID: GB324954685
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
