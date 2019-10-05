import { css } from '@emotion/core';
import { Paragraph, metadata, useTheme, VisuallyHiddenStyles } from '@octopusthink/nautilus';
import React from 'react';

import Logo from '../../../static/octopusthink.svg';
import NewsletterSignupForm from '../NewsletterSignupForm';
import SiteMap from '../SiteMap';
import SocialMediaLinks from '../SocialMediaLinks';

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
            grid-template-columns: 7fr 3fr 2fr;
            grid-column-gap: ${theme.site.desktopPadding};
            grid-row-gap: 3.2rem;
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
            inverse
            large
            css={css`
              letter-spacing: -0.025em;
            `}
          >
            Octopus Think is a digital product company specialising in inclusive, user-centred
            design and smart React development. We build smart, inclusive, usable digital products
            that make people’s lives better.
          </Paragraph>
          <Paragraph
            inverse
            large
            css={css`
              letter-spacing: -0.025em;
            `}
          >
            Ready for your technology to work for you?
          </Paragraph>
        </div>

        <SiteMap
          css={css`
            margin-top: 8rem;
          `}
        />

        <SocialMediaLinks
          css={css`
            margin-top: 8rem;
          `}
        />

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

        <div
          css={css`
            grid-column: 2 / -1;

            label {
              border: 0;
              clip-path: rect(0 0 0 0);
              height: 1px;
              margin: -1px;
              overflow: hidden;
              padding: 0;
              position: absolute;
              white-space: nowrap;
              width: 1px;
            }

            button {
              margin-top: -0.4rem;
            }
          `}
        >
          <Paragraph
            css={css`
              ${metadata.small(theme)};
              color: ${theme.colors.text.inverseDark};
              margin-bottom: 0.8rem;
            `}
          >
            Sign up for quarterly updates
          </Paragraph>
          <NewsletterSignupForm />
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
