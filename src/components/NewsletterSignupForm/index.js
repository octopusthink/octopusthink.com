import {
  Button,
  TextField,
  // interfaceUI,
  useTheme,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const NewsletterSignupForm = (props) => {
  const theme = useTheme();

  return (
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
        <input type="text" name="b_dec5c2d889866b4c67a61ff55_cd3b5cf599" tabIndex="-1" value="" />
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
  );
};

export default NewsletterSignupForm;
