import { Button, Icon, TextField } from '@octopusthink/nautilus';
import React, { useRef, useState } from 'react';
import { css } from '@emotion/core';
import addToMailchimp from 'gatsby-plugin-mailchimp';

import theme from '../../../config/theme';

const NewsletterSignupForm = () => {
  const emailRef = useRef();
  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const onChange = () => {
    setErrorMessage(null);
    setSuccessMessage(null);
  };

  const submitForm = async (event) => {
    event.preventDefault();

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
    <form onSubmit={submitForm}>
      {successMessage && <p>Success! {successMessage}</p>}
      <TextField
        error={errorMessage}
        onChange={onChange}
        label="Email"
        type="email"
        name="email"
        autoComplete="email"
        ref={emailRef}
      />
      <Button onClick={submitForm}>Sign up</Button>
    </form>
  );
};

export default NewsletterSignupForm;
