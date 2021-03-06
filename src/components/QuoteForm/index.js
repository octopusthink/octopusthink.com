import {
  Button,
  Emphasis,
  Heading,
  Paragraph,
  TextField,
  interfaceUI,
  useTheme,
} from '@octopusthink/nautilus';
import React, { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/core';
import EmailValidator from 'email-validator';

import Checkbox from 'components/Checkbox'; // Move this to Nautilus!

const QuoteForm = () => {
  const theme = useTheme();

  const firstCheckboxRef = useRef();
  const stepRefs = {};
  stepRefs[1] = useRef();
  stepRefs[2] = useRef();

  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isNameValid, setIsNameValid] = useState(null);
  const [isProjectDetailsValid, setIsProjectDetailsValid] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const [focusedStep, setFocusedStep] = useState(1);

  useEffect(() => {
    if (focusedStep !== step && stepRefs[step] && stepRefs[step].current) {
      stepRefs[step].current.scrollIntoView();
      firstCheckboxRef.current.focus();
      setFocusedStep(step);
    }
  }, [focusedStep, step, stepRefs]);

  // Form state
  const [formState, setFormState] = useState({
    email: null,
    name: undefined,
    organisation: undefined,
    type_appdev: false,
    type_webdev: false,
    type_strategy: false,
    type_visualdesign: false,
    type_productdesign: false,
    type_accessibility: false,
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
      <input type="hidden" name="_subject" value="New quote request from octopusthink.com" />
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
      <fieldset
        ref={stepRefs[1]}
        css={css`
          border: none;
          display: none;
          padding: 0;
          margin: 1.6rem 0 0 0;

          ${step >= 1 &&
            css`
              display: block;
            `}
        `}
      >
        <legend
          css={css`
            padding: 0;
          `}
        >
          <Heading level={3}>About you</Heading>
        </legend>
        <Paragraph
          css={css`
            ${step > 1 &&
              css`
                display: none;
              `}
          `}
        >
          Hello! Why don&apos;t you tell us a wee bit about yourself to get started.
        </Paragraph>
        <TextField
          autoComplete="name"
          error={isNameValid || isNameValid === null ? undefined : 'Please tell us your name. 🙂'}
          type="text"
          label="Name"
          name="Name"
          onBlur={() => {
            setIsNameValid(formState.name && formState.name.length);
          }}
          onChange={(event) => {
            if (formState.name && isNameValid === false) {
              setIsNameValid(formState.name && formState.name.length);
            }

            if (isNameValid === null && formState.name && formState.name.length) {
              setIsNameValid(true);
            }

            setField('name')(event);
          }}
          value={formState.name}
        />
        <TextField
          autoComplete="email"
          error={
            isEmailValid || isEmailValid === null
              ? undefined
              : 'Please enter a valid email address.'
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
                formState.email &&
                  formState.email.length &&
                  EmailValidator.validate(formState.email),
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
        <TextField
          autoComplete="organisation"
          label="Organisation"
          name="Organisation"
          onChange={setField('organisation')}
          optional
          value={formState.organisation}
        />
        <Button
          disabled={!isNameValid || !isEmailValid}
          primary
          css={css`
            margin: 0 0 6.4rem;

            ${step > 1 &&
              css`
                display: none;
              `}
          `}
          onClick={() => {
            setIsNameValid(formState.name && formState.name.length);
            setIsEmailValid(
              formState.email && formState.email.length && EmailValidator.validate(formState.email),
            );

            if (!formState.name || !formState.email || !isEmailValid) {
              return;
            }

            setStep(step + 1);
          }}
        >
          Next step
        </Button>
      </fieldset>

      <fieldset
        ref={stepRefs[2]}
        css={css`
          border: none;
          display: none;
          padding: 0;
          margin: 0.8rem 0 0 0;

          ${step >= 2 &&
            css`
              display: block;
            `}
        `}
      >
        <input
          type="hidden"
          name="Application Development"
          value={formState.type_appdev ? 'Yes' : 'No'}
        />
        <input type="hidden" name="Web Development" value={formState.type_webdev ? 'Yes' : 'No'} />
        <input type="hidden" name="Stragegy" value={formState.type_strategy ? 'Yes' : 'No'} />
        <input
          type="hidden"
          name="Visual Design"
          value={formState.type_visualdesign ? 'Yes' : 'No'}
        />
        <input
          type="hidden"
          name="Product Design"
          value={formState.type_productdesign ? 'Yes' : 'No'}
        />
        <input
          type="hidden"
          name="Accessibility"
          value={formState.type_accessibility ? 'Yes' : 'No'}
        />
        <legend
          css={css`
            padding: 0;
          `}
        >
          <Heading level={3}>About your project</Heading>
        </legend>
        <Paragraph>
          Now, tell us a little bit about your project. You don&apos;t need to be{' '}
          <Emphasis>super</Emphasis> detailed at this stage, but the more you tell us now, the fewer
          questions we&apos;ll need to ask later on.
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
          <Checkbox
            ref={firstCheckboxRef}
            onChange={setField('type_appdev')}
            checked={formState.type_appdev}
          >
            App development
          </Checkbox>
          <Checkbox onChange={setField('type_webdev')} checked={formState.type_webdev}>
            Web development
          </Checkbox>
          <Checkbox onChange={setField('type_strategy')} checked={formState.type_strategy}>
            Strategy &amp; training
          </Checkbox>
          <Checkbox onChange={setField('type_visualdesign')} checked={formState.type_visualdesign}>
            Visual design
          </Checkbox>
          <Checkbox
            onChange={setField('type_productdesign')}
            checked={formState.type_productdesign}
          >
            Product design
          </Checkbox>
          <Checkbox
            onChange={setField('type_accessibility')}
            checked={formState.type_accessibility}
          >
            Accessibility
          </Checkbox>
        </fieldset>

        <TextField
          label="Budget"
          optional
          onChange={setField('budget')}
          name="Budget"
          value={formState.budget}
          hint="Do you have a budget in mind?"
        />
        <TextField
          label="Timeline"
          optional
          name="Timeline"
          onChange={setField('timeline')}
          value={formState.timeline}
          hint="Are there any milestones or
              deadlines that we need to keep in mind?"
        />

        <TextField
          multiline
          error={
            isProjectDetailsValid || isProjectDetailsValid === null
              ? undefined
              : 'Please tell us a bit about your project.'
          }
          onBlur={() => {
            setIsProjectDetailsValid(formState.project_details && formState.project_details.length);
          }}
          onChange={(event) => {
            setIsProjectDetailsValid(formState.project_details && formState.project_details.length);

            if (
              isProjectDetailsValid === null &&
              formState.project_details &&
              formState.project_details.length
            ) {
              setIsProjectDetailsValid(true);
            }

            setField('project_details')(event);
          }}
          name="Project details"
          label="Project details"
          value={formState.project_details}
          hint="What do we need to know about your project?"
        />

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
            margin: 3.2rem 0 6.4rem;
          `}
          disabled={!isNameValid || !isEmailValid || !isProjectDetailsValid}
          onClick={(event) => {
            if (!isNameValid || !isEmailValid || !isProjectDetailsValid || isSubmitting) {
              event.preventDefault();
              return;
            }

            setIsSubmitting(true);
          }}
          onMouseEnter={() => {
            setIsProjectDetailsValid(formState.project_details && formState.project_details.length);
          }}
          type="submit"
          primary
        >
          {isSubmitting ? 'Sending message…' : 'Send me a quote!'}
        </Button>
      </fieldset>
    </form>
  );
};

export default QuoteForm;
