import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import { body, metadata, useTheme } from '@octopusthink/nautilus';

const KeyValue = (props) => {
  const theme = useTheme();
  const { keyName, valueName } = props;

  return (
    <Fragment>
      <dt
        css={css`
          ${metadata.small(theme)};
          color: ${theme.colors.neutral.grey600};
          display: block;
        `}
      >
        {keyName}
      </dt>
      <dd
        css={css`
          ${body.small(theme)};
          display: block;
          margin-bottom: 1.6rem;
          margin-left: 0;
        `}
      >
        {valueName}
      </dd>
    </Fragment>
  );
};

export default KeyValue;
