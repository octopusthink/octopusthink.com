import {
  Button,
  Emphasis,
  Heading,
  Icon,
  Link,
  List,
  Paragraph,
  TextField,
  //interfaceUI,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import theme from '../../../config/theme';
import Panel from '../Panel';
import Checkbox from '../Checkbox'; // Move this to Nautilus!

const QuoteForm = () => {
  const submitForm = async (event) => {
    event.preventDefault();

    $.post('https://mailthis.to/sarah@octopusthink.com', {
      email: 'foo@bar.co',
      _subject: 'hi!',
      message: 'Test',
    }).then(function() {
      location.href = 'https://mailthis.to/confirm';
    });

    if (emailRef && emailRef.current && emailRef.current.value) {
      try {
        const response = await addToMailchimp(emailRef.current.value);
        if (response.result === 'success') {
          setErrorMessage(null);
          setSuccessMessage(response.msg);
        } else {
          setErrorMessage(response.msg);
          setSuccessMessage(null);
        }
        console.log('email success', response);
      } catch (error) {
        console.error('email error', error);
        setErrorMessage(response.msg);
      }
    }
  };
  return (
    <React.Fragment>
      <form
        action="https://mailthis.to/work.with@octopusthink.com"
        method="POST"
        encType="multipart/form-data"
        onSubmit={submitForm}
      >
        {successMessage && <p>Success! {successMessage}</p>}

        <input type="hidden" name="_subject" value="New quote request" />
        {/*<input type="hidden" name="_after" value="https://octopusthink.com/thank-you" />*/}
        <input type="hidden" name="_honeypot" value="" />
        <input
          type="hidden"
          name="_confirmation"
          value="Thanks for your message! We'll be in touch soon."
        />
        {/*<fieldset
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
            </Paragraph>*/}
        <TextField autoComplete="name" type="text" name="name" label="Name" />
        <TextField autoComplete="email" type="email" name="_replyto" label="Email" />
        {/*<TextField autocomplete="organisation" label="Organisation" optional />
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
            />*/}

        <TextField
          multiline
          name="message"
          label="Project details"
          hint="What do we need to know about your project?"
        />

        {/*<Checkbox
              css={css`
                padding-bottom: 3.2rem;
              `}
            >
              Sign me up for the quarterly Octopus Think newsletter. I love getting emails.
            </Checkbox>*/}
        <Button
          onClick={submitForm}
          primary
          css={css`
              margin: 0 0 6.4rem;
            }
            `}
        >
          Send me a quote!
        </Button>
        {/*</fieldset>*/}
      </form>

      {/*
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
        </div>
        */}
    </React.Fragment>
  );
};

export default QuoteForm;
