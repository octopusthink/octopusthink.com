import { css } from '@emotion/core';
import { Link, Paragraph, metadata, useTheme } from '@octopusthink/nautilus';
import React, { useRef } from 'react';

import NewsletterSignupForm from 'components/NewsletterSignupForm';
import SiteMap from 'components/SiteMap';
import SocialMediaLinks from 'components/SocialMediaLinks';
import Logo from 'static/octopusthink.svg';
import AppsMenu from '../AppsMenu';

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
          grid-gap: ${theme.site.tabletPadding};

          @media screen and (min-width: 640px) {
            grid-gap: ${theme.site.tabletPadding};
            grid-template-columns: 6fr 6fr;
            padding: ${theme.site.tabletPadding};
          }

          @media screen and (min-width: 860px) {
            padding: ${theme.site.desktopPadding};
            max-width: ${theme.site.maxSiteWidth};
            margin: 0 auto;
            grid-template-columns: 6fr 3fr 3fr;
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
            inverse
            large
            noMargin
            css={css`
              letter-spacing: -0.025em;
            `}
          >
            Octopus Think is a design &amp; development duo based in Scotland and Portugal. We build
            smart, inclusive, usable digital products that make people’s lives better.
          </Paragraph>
        </div>

        <SiteMap />

        <AppsMenu />

        <div
          css={css`
            grid-column: 1 / -1;
            max-width: 640px;
            width: 100%;
            margin-left: auto;
            margin-right: auto;

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

        <SocialMediaLinks
          css={css`
            grid-column: 1 / -1;
          `}
        />

        <Paragraph
          small
          inverse
          dark
          css={css`
            font-size: 1.6rem;
            margin: 0 auto;
            grid-column: 1 / -1;
            width: 100%;
            text-align: center;

            .line {
              white-space: nowrap;

              @media screen and (max-width: 639px) {
                display: block;
                margin-bottom: 0.4rem;
              }

              @media screen and (min-width: 640px) and (max-width: 1024px) {
                &:nth-of-type(odd):after {
                  display: inline;
                  content: '·';
                  padding-left: 0.8rem;
                  padding-right: 0.8rem;
                }

                &:nth-of-type(even):after {
                  display: block;
                  content: '';
                }
              }

              @media screen and (min-width: 1024px) {
                &:not(:last-of-type):after {
                  display: inline;
                  content: '·';
                  padding-left: 0.8rem;
                  padding-right: 0.8rem;
                }
              }
            }
          `}
        >
          <span className="line">
            <span
              css={css`
                display: none;
              `}
            >
              Copyright
            </span>{' '}
            © 2020 Octopus Think Ltd.
          </span>

          <span className="line">
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
          </span>

          <span className="line">VAT ID: GB324954685</span>

          <span className="line">
            <Link
              external
              css={css`
                box-shadow: 0 0.2rem ${theme.colors.text.inverseDark};
                color: ${theme.colors.text.inverseDark};
              `}
              href="https://github.com/octopusthink/octopusthink.com/issues/new"
            >
              Report an issue
            </Link>{' '}
            with this site
          </span>
        </Paragraph>
      </div>
    </footer>
  );
};

export default SiteFooter;
