import {
  Button,
  // Emphasis,
  Heading,
  Icon,
  Link,
  List,
  Paragraph,
  TextField,
  // interfaceUI,
  useTheme,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Panel from '../Panel';
import NewsletterSignupForm from '../NewsletterSignupForm';
// import Checkbox from '../Checkbox'; // Move this to Nautilus!

//         */[photo of us together][photo of Edinburgh?]/* * * *//

const ContactContent = () => {
  const theme = useTheme();

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
            <List.Item>
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
            </List.Item>
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
          <NewsletterSignupForm />
        </div>
      </Panel>
      <Panel>
        <Heading id="workwithus">Work with us</Heading>
        <Paragraph>
          We&apos;re always interested in hearing from people with exciting projects. If you have
          work you&apos;d like to discuss, drop us a line at{' '}
          <Link to="mailto:work.with@octopusthink.com">work.with@octopusthink.com</Link>
          {/* or fill in
          the form below for a no-strings-attached estimate */}. You&apos;ll
          hear back from us within 48 hours.
        </Paragraph>
        {/* <form>
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
              Hello! Why don&apos;t you tell us a wee bit about yourself to get started.
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
              Now, tell us a little bit about your project. You don&apos;t need to be{' '}
              <Emphasis>super</Emphasis>
              detailed at this stage, but the more you tell us, the fewer questions we&apos;ll ask
              later on.
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
              <Checkbox>Strategy &amp; training</Checkbox>
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
            <Checkbox
              css={css`
                margin-bottom: 3.2rem;
              `}
            >
              Sign me up for the quarterly Octopus Think newsletter. I love getting emails.
            </Checkbox>
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
          Thanks for your message! Unless we&apos;re an on extraordinarily long flight, you can
          expect to hear back from us within 48 hours. If you&apos;d like to send us any more
          information in the meantime, or if you&apos;ve forgotten to include anything, please send
          it to{' '}
          <Link as="a" href="mailto:work.with@octopusthink.com">
            work.with@octopusthink.com
          </Link>
          . Cheers!
        </div> */}
      </Panel>
    </React.Fragment>
  );
};

export default ContactContent;
