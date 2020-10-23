import { Button, TextField } from '@octopusthink/nautilus';
import React, { useState } from 'react';
import { css } from '@emotion/core';
import EmailValidator from 'email-validator';

import Checkbox from 'components/Checkbox'; // Move this to Nautilus!

const ContactForm = () => {
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form state
  const [formState, setFormState] = useState({
    email: null,
    name: undefined,
    newsletter: false,
  });
  const setField = (field) => {
    return (event) => {
      const { target } = event;
      const value = target.type === 'checkbox' ? target.checked : target.value;

      setFormState({
        ...formState,
        [field]: value && value.length ? value : undefined,
      });
    };
  };

  return (
    <form
      action="https://mailthis.to/workwithoctopusthink"
      method="POST"
      encType="multipart/form-data"
    >
      <input type="hidden" name="_subject" value="New message from octopusthink.com" />
      <input
        type="hidden"
        name="_after"
        value="https://octopusthink.com/thanks-for-contacting-us/"
      />
      <input type="hidden" name="_replyto" value={formState.email} />
      <input type="hidden" name="_honeypot" value="" />
      <input
        type="hidden"
        name="_confirmation"
        value="Thanks for your message! We'll be in touch soon."
      />

      <TextField
        autoComplete="email"
        error={
          isEmailValid || isEmailValid === null ? undefined : 'Please enter a valid email address.'
        }
        type="email"
        label="Email"
        name="Email"
        onBlur={() => {
          setIsEmailValid(
            formState.email && formState.email.length && EmailValidator.validate(formState.email),
          );
        }}
        onChange={(event) => {
          if (formState.email && formState.email.length && isEmailValid === false) {
            setIsEmailValid(
              formState.email && formState.email.length && EmailValidator.validate(formState.email),
            );
          }

          if (
            isEmailValid === null &&
            formState.email &&
            EmailValidator.validate(formState.email)
          ) {
            setIsEmailValid(true);
          }

          setField('email')(event);
        }}
        value={formState.email}
      />

      <TextField multiline name="Message" label="Message" value={formState.message} />

      <Checkbox onChange={setField('newsletter')} checked={formState.newsletter}>
        Sign me up for the quarterly Octopus Think newsletter. I love getting emails.
      </Checkbox>
      <input
        type="hidden"
        name="Signup for newsletter"
        value={formState.newsletter ? `Yes: ${formState.email}` : 'No'}
      />
      <Button
        css={css`
          margin: 3.2rem 0 -3.2rem;
        `}
        disabled={!isEmailValid}
        onClick={(event) => {
          if (!isEmailValid || isSubmitting) {
            event.preventDefault();
            return;
          }

          setIsSubmitting(true);
        }}
        type="submit"
        primary
      >
        {isSubmitting ? 'Sending message…' : 'Send my message'}
      </Button>
    </form>
  );
};

export default ContactForm;
