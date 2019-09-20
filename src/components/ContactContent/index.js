import {
  Button,
  Emphasis,
  Heading,
  Icon,
  Link,
  List,
  Paragraph,
  TextField,
  interfaceUI,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';
import Panel from '../Panel';
import QuoteForm from '../QuoteForm'; // Move this to Nautilus!

//         */[photo of us together][photo of Edinburgh?]/* * * *//

const ContactContent = () => {
  return (
    <React.Fragment>
      <Panel>
        <Heading>Get in touch</Heading>
        <Paragraph>
          We&apos;re based in beautiful Edinburgh, Scotland, but we work remotely for clients around
          the world.
          {/* If you want to talk to us about a project,{' '}
          <Link as="a" href="#workwithus">
            feel free use the contact form below to request a quote
          </Link>
          . */}
        </Paragraph>
        <Paragraph>
          The best way to get in touch with us is via email (
          <Link as="a" href="mailto:hello@octopusthink.com">
            hello@octopusthink.com
          </Link>
          ), but you can also follow us if you just want to keep tabs on what we&apos;re up to.
        </Paragraph>
      </Panel>
      <Panel dark grid="5fr 7fr">
        <div>
          <Heading
            css={css`
              color: ${theme.colors.text.inverse};
            `}
          >
            Follow along
          </Heading>
          <List
            css={css`
              li {
                padding-bottom: 0.8rem;
                &:before {
                  display: none;
                }
              }
            `}
          >
            <List.Item>
              <Icon
                background={theme.colors.neutral.grey0}
                fillColor={theme.colors.accent.secondaryLight}
                strokeColor={theme.colors.accent.secondaryDark}
                name="mail"
                title="Email"
              />
              <Link
                as="a"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
                href="mailto:hello@octopusthink.com"
              >
                hello@octopusthink.com
              </Link>
            </List.Item>
            <List.Item>
              <Link
                as="a"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
                href="https://twitter.com/octopusthinks"
              >
                <Icon
                  background={theme.colors.neutral.grey0}
                  fillColor={theme.colors.accent.secondaryLight}
                  strokeColor={theme.colors.accent.secondaryDark}
                  name="twitter"
                  title="Twitter"
                />
                @octopusthinks
              </Link>
            </List.Item>
            {/* <List.Item>
              <Icon
                background={theme.colors.neutral.grey0}
                fillColor={theme.colors.accent.secondaryLight}
                strokeColor={theme.colors.accent.secondaryDark}
                name="instagram"
                title="Instagram"
              />
              <Link
                as="a"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
                href="https://instagram.com/octopusthinks"
              >
                @octopusthinks
              </Link>
            </List.Item> */}
            {/* <List.Item>
              <Icon
                background={theme.colors.neutral.grey0}
                fillColor={theme.colors.accent.secondaryLight}
                strokeColor={theme.colors.accent.secondaryDark}
                name="rss"
                title="RSS feed"
              />
              <Link
                as="a"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
                href="#rss"
              >
                Coming soon!
              </Link>
            </List.Item> */}
            <List.Item>
              <Link
                as="a"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
                href="https://github.com/octopusthink"
              >
                <Icon
                  background={theme.colors.neutral.grey0}
                  fillColor={theme.colors.accent.secondaryLight}
                  strokeColor={theme.colors.accent.secondaryDark}
                  name="github"
                  title="GitHub"
                />
                octopusthink
              </Link>
            </List.Item>
          </List>
        </div>
        <div>
          <Heading
            css={css`
              color: ${theme.colors.text.inverse};
            `}
          >
            Sign up for our newsletter
          </Heading>
          <Paragraph small inverse>
            We send out emails around once a quarter with highlights of what we&apos;ve been up to,
            what we&apos;re doing next, apps and tools we&apos;ve built, and things we&apos;ve found
            to make your life easier. You can unsubscribe any time you get bored, and we promise
            never to sell your details.
          </Paragraph>

          <form
            action="https://octopusthink.us4.list-manage.com/subscribe/post?u=dec5c2d889866b4c67a61ff55&amp;id=cd3b5cf599"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
            css={css`
              align-items: center;
              display: grid;
              grid-gap: 0.4rem;
              grid-template-columns: auto auto;

              label {
                color: ${theme.colors.text.inverse};
              }
            `}
          >
            <div>
              <TextField type="email" name="EMAIL" id="mce-EMAIL" label="Email" />
            </div>

            <div
              css={css`
                position: absolute;
                left: -5000px;
              `}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_dec5c2d889866b4c67a61ff55_cd3b5cf599"
                tabIndex="-1"
                value=""
              />
            </div>
            <Button
              css={css`
                margin-top: 0.4rem;
              `}
              primary
              type="submit"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </Panel>
      <Panel>
        <Heading id="workwithus">Work with us</Heading>
        <Paragraph>
          We&apos;re always interested in hearing from people with exciting projects. If you have
          work you&apos;d like to discuss, drop us a line at{' '}
          <Link to="mailto:work.with@octopusthink.com">work.with@octopusthink.com</Link>
          or fill in the form below for a no-strings-attached estimate. You&apos;ll hear back from
          us within 48 hours.
        </Paragraph>
        <QuoteForm />
      </Panel>
    </React.Fragment>
  );
};

export default ContactContent;
