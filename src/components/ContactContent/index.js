import {
  Button,
  Heading,
  Icon,
  Link,
  List,
  Paragraph,
  Tags,
  TextField,
  interfaceUI,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';
import dayjs from 'dayjs';

import config from '../../../config';
import theme from '../../../config/theme';
import Panel from '../Panel';
import Checkbox from '../Checkbox'; // Move this to Nautilus!

//         */[photo of us together][photo of Edinburgh?]/* * * *//

const ContactContent = (props) => {
  const { date, readingTime, slug, summary, title } = props;
  const formattedDate = dayjs(date).format(config.dateFormat);

  return (
    <>
      <Panel>
        <Heading>Get in touch</Heading>
        <Paragraph>
          We're based in beautiful Edinburgh, Scotland, but we work remotely for clients around the
          world. If we respond to your email at 1am that's our excuse! Sometimes we keep odd hours.
        </Paragraph>
        <Paragraph>
          The best way to get in touch with us is via email (
          <Link to="mailto:hello@octopusthink.com">hello@octopusthink.com</Link>), but you can also
          follow us if you just want to keep tabs on what we're up to.
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
                to="mailto:hello@octopusthink.com"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
              >
                hello@octopusthink.com
              </Link>
            </List.Item>
            <List.Item>
              <Icon
                background={theme.colors.neutral.grey0}
                fillColor={theme.colors.accent.secondaryLight}
                strokeColor={theme.colors.accent.secondaryDark}
                name="twitter"
                title="Twitter"
              />
              <Link
                to="https://twitter.com/octopusthinks"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
              >
                @octopusthinks
              </Link>
            </List.Item>
            <List.Item>
              <Icon
                background={theme.colors.neutral.grey0}
                fillColor={theme.colors.accent.secondaryLight}
                strokeColor={theme.colors.accent.secondaryDark}
                name="instagram"
                title="Instagram"
              />
              <Link
                to="https://instagram.com/octopusthinks"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
              >
                @octopusthinks
              </Link>
            </List.Item>
            <List.Item>
              <Icon
                background={theme.colors.neutral.grey0}
                fillColor={theme.colors.accent.secondaryLight}
                strokeColor={theme.colors.accent.secondaryDark}
                name="rss"
                title="RSS feed"
              />
              <Link
                to="#"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
              >
                Coming soon!
              </Link>
            </List.Item>
            <List.Item>
              <Link
                to="https://github.com/octopusthink"
                css={css`
                  border-bottom: 0;
                  color: white;
                  font-weight: bold;
                `}
              >
                <Icon
                  background={theme.colors.neutral.grey0}
                  fillColor={theme.colors.accent.secondaryLight}
                  strokeColor={theme.colors.accent.secondaryDark}
                  name="github"
                  title="GithHb"
                />
                @octopusthink
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
            We send out emails around once a quarter with highlights of what we've been up to, what
            we're doing next, apps and tools we've built, and things we've found to make your life
            easier. You can unsubscribe any time you get bored, and we promise never to sell your
            details.
          </Paragraph>
        </div>
      </Panel>
      <Panel>
        <Heading>Work with us</Heading>
        <Paragraph>
          We're always interested in hearing from people with exciting projects. If you have work
          you'd like to discuss, drop us a line at{' '}
          <Link to="mailto:work.with@octopusthink.com">work.with@octopusthink.com</Link> or fill in
          the form below for a no-strings-attached estimate. You'll hear back from us within 48
          hours.
        </Paragraph>
        <form>
          <fieldset
            css={css`
              border: none;
              padding: 0;
              margin: 1.6rem 0 0 0;
            `}
          >
            <legend
              css={css`
                padding: 0;
              `}
            >
              <Heading level={3}>About you</Heading>
            </legend>

            <Paragraph>
              Hello! Why don't you tell us a wee bit about yourself to get started.
            </Paragraph>
            <TextField autocomplete="name" label="Name" />
            <TextField autocomplete="email" label="Email" />
            <TextField autocomplete="organisation" label="Organisation" optional />
            <Button
              primary
              css={css`
              margin: 0 0 6.4rem;
            }
            `}
            >
              Next step
            </Button>
          </fieldset>

          <fieldset
            css={css`
              border: none;
              padding: 0;
              margin: 0.8rem 0 0 0;
            `}
          >
            <legend
              css={css`
                padding: 0;
              `}
            >
              <Heading level={3}>About your project</Heading>
            </legend>
            <Paragraph>
              Now, tell us a little bit about your project. You don't need to be _super_ detailed at
              this stage, but the more you tell us, the fewer questions we'll ask later on.
            </Paragraph>

            <fieldset
              css={css`
                border: 0;
                margin: 0;
                padding: 0 0 3.2rem;
              `}
            >
              <legend
                css={css`
                  ${interfaceUI.small(theme)};
                  margin: 0;
                  padding: 0 0 1.6rem;
                `}
              >
                Type(s) of work
              </legend>
              <Checkbox>App development</Checkbox>
              <Checkbox>Web development</Checkbox>
              <Checkbox>Strategy & training</Checkbox>
              <Checkbox>Visual design</Checkbox>
              <Checkbox>Product design</Checkbox>
              <Checkbox>Accessibility</Checkbox>
            </fieldset>

            <TextField
              autocomplete="name"
              label="Budget"
              optional
              hint="Do you have a budget in mind?"
            />
            <TextField
              autocomplete="name"
              label="Timeline"
              optional
              hint="Are there any milestones or
              deadlines that we need to keep in mind?"
            />
            <TextField
              multiline
              label="Project details"
              hint="What do we need to know about your project?"
            />
            {/*
            <Checkbox
              css={css`
                margin-bottom: 3.2rem;
              `}
            >
              Sign me up for the quarterly Octopus Think newsletter. I love getting emails.
            </Checkbox>
            */}
            <Button
              primary
              css={css`
              margin: 0 0 6.4rem;
            }
            `}
            >
              Send me a quote!
            </Button>
          </fieldset>
        </form>

        <div
          css={css`
            display: none;
          `}
        >
          Thanks for your message! Unless we're an on extraordinarily long flight, you can expect to
          hear back from us within 48 hours. If you'd like to send us any more information in the
          meantime, or if you've forgotten to include anything, please send it to
          [work.with@octopusthink.com](mailto:work.with@octopusthink.com). Cheers!
        </div>
      </Panel>
    </>
  );
};

export default ContactContent;
