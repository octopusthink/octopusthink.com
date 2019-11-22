import { useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import ReachingArmIllustration from 'static/illustrations/reaching-octo-arm.svg';

const WavingOctopusArm = (props) => {
  return (
    <div
      css={css`
        position: absolute;
        bottom: -290px;
        right: -80px;
        width: 300px;

        @media screen and (min-width: 640px) {
          bottom: 0;
          right: 20px;
        }
      `}
    >
      <ReachingArmIllustration />
    </div>
  );
};

export default WavingOctopusArm;
