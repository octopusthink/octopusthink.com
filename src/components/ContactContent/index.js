import { Heading, Link, Paragraph, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Panel from '../Panel';
import QuoteForm from '../QuoteForm';
import NewsletterSignupForm from '../NewsletterSignupForm';
import SocialMediaLinks from '../SocialMediaLinks';

const ContactContent = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Panel>
        <Heading>Get in touch</Heading>
        <Paragraph>
          We&apos;re based in beautiful Edinburgh, Scotland, but we work remotely for clients around
          the world. If you want to talk to us about a project, feel free use the{' '}
          <Link as="a" href="#workwithus">
            contact form
          </Link>{' '}
          to request a quote.
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
          <SocialMediaLinks />
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
          <Link to="mailto:work.with@octopusthink.com">work.with@octopusthink.com</Link> or fill in
          the form below for a no-strings-attached estimate. You&apos;ll hear back from us within 48
          hours.
        </Paragraph>
        <QuoteForm />
      </Panel>
    </React.Fragment>
  );
};

export default ContactContent;
