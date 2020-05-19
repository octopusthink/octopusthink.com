import { css } from '@emotion/core';
import { Link, Paragraph, metadata, useTheme } from '@octopusthink/nautilus';
import React, { useRef } from 'react';

import ButtonInverse from 'components/ButtonInverse';
import NewsletterSignupForm from 'components/NewsletterSignupForm';
import SiteMap from 'components/SiteMap';
import SocialMediaLinks from 'components/SocialMediaLinks';
import Logo from 'static/octopusthink.svg';

const SiteFooter = () => {
  const emailRef = useRef();
  const theme = useTheme();

  return (
    <footer
      css={css`
        background: ${theme.colors.neutral.black};
        position: relative;
        overflow: hidden;
        }
      `}
    >
      <div
        css={css`
          padding: ${theme.site.mobilePadding};
          display: grid;
          grid-row-gap: ${theme.site.tabletPadding};

          @media screen and (min-width: 640px) {
            grid-template-columns: 6fr 6fr;
            padding: ${theme.site.tabletPadding};
          }

          @media screen and (min-width: 1024px) {
            padding: ${theme.site.desktopPadding};
            max-width: ${theme.site.maxSiteWidth};
            margin: 0 auto;
            grid-template-columns: 7fr 3fr 2fr;
            grid-column-gap: ${theme.site.desktopPadding};
          }
        `}
      >
        <div
          css={css`
            @media screen and (min-width: 640px) and (max-width: 1023px) {
              grid-column: 1 / span 2;
            }
          `}
        >
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
            Octopus Think is a design &amp; development agency specialising in user-centred design
            and React development. We build smart, inclusive, usable digital products that make
            people’s lives better.
          </Paragraph>
          <Paragraph
            inverse
            large
            css={css`
              letter-spacing: -0.025em;
              margin-bottom: 1.6rem;
            `}
          >
            Ready for your technology to work for you?
          </Paragraph>
          <Paragraph
            inverse
            large
            css={css`
              letter-spacing: -0.025em;
              margin-bottom: 0;
            `}
          >
            <ButtonInverse
              minimal
              navigation
              to="/contact"
              css={css`
                font-size: 2.1rem;
                margin: 0;
              `}
            >
              Contact us!
            </ButtonInverse>
          </Paragraph>
        </div>

        <SiteMap
          css={css`
            @media screen and (min-width: 1024px) {
              margin-top: 8rem;
            }
          `}
        />

        <SocialMediaLinks
          css={css`
            @media screen and (min-width: 1024px) {
              margin-top: 8rem;
            }
          `}
        />

        <div
          css={css`
            @media screen and (min-width: 640px) and (max-width: 1023px) {
              grid-column: 1 / span 2;
            }

            @media screen and (min-width: 1024px) {
              grid-column: 2 / -1;
              order: 5;
            }

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

            @media screen and (min-width: 640px) {
              button {
                margin-top: -0.4rem;
              }
            }
          `}
        >
          <Paragraph
            css={css`
              ${metadata.small(theme)};
              color: ${theme.colors.text.inverseDark};
              margin-bottom: 0.8rem;

              &:hover {
                cursor: default;
              }
            `}
            onClick={() => {
              if (emailRef && emailRef.current) {
                emailRef.current.focus();
              }
            }}
          >
            Sign up for quarterly updates
          </Paragraph>
          <NewsletterSignupForm emailRef={emailRef} />
        </div>

        <Paragraph
          small
          inverse
          dark
          css={css`
            font-size: 1.6rem;
            margin: 0;

            @media screen and (min-width: 640px) and (max-width: 1023px) {
              grid-column: 1 / span 2;
            }

            @media screen and (min-width: 1024px) {
              grid-column: 1 / 2;
            }
          `}
        >
          <span
            css={css`
              display: none;
            `}
          >
            Copyright
          </span>{' '}
          © 2020 Octopus Think Ltd.
          <br />
          UK Registered Company No.{' '}
          <Link
            external
            css={css`
              box-shadow: 0 0.2rem ${theme.colors.text.inverseDark};
              color: ${theme.colors.text.inverseDark};
            `}
            href="https://beta.companieshouse.gov.uk/company/11747595"
          >
            11747595
          </Link>
          <br />
          VAT ID: GB324954685
          <br />
          <Link
            external
            css={css`
              box-shadow: 0 0.2rem ${theme.colors.text.inverseDark};
              color: ${theme.colors.text.inverseDark};
            `}
            href="https://github.com/octopusthink/octopusthink.com/issues/new"
          >
            {' '}
            Report an issue
          </Link>{' '}
          with this site
        </Paragraph>
      </div>
    </footer>
  );
};

export default SiteFooter;
