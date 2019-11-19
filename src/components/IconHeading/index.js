import { Heading, Icon, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

const IconHeading = (props) => {
  const { children, icon, problem, solution, result, role } = props;
  const theme = useTheme();

  let darkColor = theme.colors.text.black;
  let lightColor = theme.colors.text.white;
  let iconName = icon;
  let headingText = children;

  // We have some pre-set variants with specific text, icons, and colours attached.
  if (problem) {
    darkColor = theme.colors.intent.danger;
    lightColor = theme.colors.intent.dangerLight;
    iconName = 'radio';
    headingText = 'Problem';
  } else if (solution) {
    darkColor = theme.colors.intent.success;
    lightColor = theme.colors.intent.successLight;
    iconName = 'life-buoy';
    headingText = 'Solution';
  } else if (result) {
    darkColor = theme.colors.intent.inProgress;
    lightColor = theme.colors.intent.inProgressLight;
    iconName = 'star';
    headingText = 'Outcomes';
  } else if (role) {
    darkColor = theme.colors.intent.new;
    lightColor = theme.colors.intent.newLight;
    iconName = 'coffee';
    headingText = 'Our contributions';
  }

  return (
    <Heading
      css={css`
        ${metadata.large(theme)};
        color: ${darkColor};
        margin-bottom: 0.8rem;
      `}
    >
      <Icon
        strokeColor={darkColor} //fillColor={lightColor}
        name={iconName}
      />
      {headingText}
    </Heading>
  );
};

export default IconHeading;
