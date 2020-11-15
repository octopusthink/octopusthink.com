import React from 'react';
import { css } from '@emotion/core';
import { useTheme } from '@octopusthink/nautilus';

import CardImage from 'components/CardImage';

const AppsMenu = () => {
  const theme = useTheme();
  return (
    <div
      css={css`
        @media screen and (max-width: 860px) {
          grid-column: 1 / -1;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: ${theme.site.tabletPadding};
        }
      `}
    >
      <CardImage
        link="https://getmicdrop.com/?pk_campaign=octopusthink&pk_kwd=footer"
        image="/images/portfolio/mic-drop/mic-drop-footer.png"
        alt="Mic Drop: Menubar mic muting for Macs."
        small
      />
      <CardImage
        link="https://turniptimer.com/?pk_campaign=octopusthink&pk_kwd=footer"
        image="/images/portfolio/turnip/turnip-footer.png"
        alt="Turnip: Time tracking for freelancers."
        noMargin
        small
      />
    </div>
  );
};

export default AppsMenu;
