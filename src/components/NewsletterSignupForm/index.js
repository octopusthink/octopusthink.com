import { Button, TextField } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const NewsletterSignupForm = (props) => {
  const { className, emailRef } = props;

  return (
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/octopusthink"
      method="post"
      className={className}
      noValidate
      css={css`
        align-items: end;
        display: grid;
        grid-gap: 0.8rem;

        @media screen and (min-width: 640px) {
          grid-template-columns: auto auto;
          grid-gap: 0.4rem;
        }
      `}
    >
      <div>
        <TextField
          autocomplete="email"
          type="email"
          name="email"
          label="Email"
          ref={emailRef}
          placeholder="eg: name@yourdomain.com"
          css={css`
            margin-bottom: 0;
          `}
        />
        <input type="hidden" value="1" name="embed" />
        <input type="hidden" name="tag" value="from-website, octopus-thoughts" />
      </div>
      <Button
        css={css`
          margin-bottom: 0;

          @media screen and (max-width: 639px) {
            max-width: max-content;
          }
        `}
        primary
        type="submit"
      >
        Subscribe
      </Button>
    </form>
  );
};

export default NewsletterSignupForm;
