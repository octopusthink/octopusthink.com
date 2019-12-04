import { Heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import GridLayout from 'components/GridLayout';
import Image from 'components/Image';
import Panel from 'components/Panel';

const FriendLogos = () => {
  return (
    <React.Fragment>
      <div
        css={css`
          grid-column: 1 / -1;
          text-align: center;
          margin: 0;
        `}
      >
        <Heading level={2}>A few of our friends</Heading>
      </div>
      <GridLayout columns="3" gap="8.0">
        <Image src="standard.png" alt="Standard Broadcast logo" />
        <Image src="firefox.png" alt="Firefox logo" />
        <Image src="wordpress.com.png" alt="WordPress.com logo" />
        <Image src="snp.png" alt="Scottish National Party logo" />
        <Image src="ns-government.png" alt="Nova Scotia Government logo" />
        <Image src="google.png" alt="Google logo" />
        <Image src="mozilla.png" alt="Mozilla logo" />
        <Image src="automattic.png" alt="Automattic logo" />
        <Image src="ea.png" alt="EA logo" />
        <Image src="10up.png" alt="10up logo" />
        <Image src="fernwood.png" alt="Fernwood Publishing logo" />
        <Image src="nebula.png" alt="Nebula logo" />
        <Image src="arbor-day-foundation.png" alt="Arbor Day Foundation logo" />
        <Image src="hachette.png" alt="Hachette Book Group logo" />
        <Image src="saffron-marigold.png" alt="Saffron Marigold logo" />
        <Image src="wicker-emporium.png" alt="Wicker Emporium logo" />
        <Image src="wordpress.png" alt="WordPress logo" />
        <Image src="nslc.png" alt="Nova Scotia Liquor Commission logo" />
      </GridLayout>
    </React.Fragment>
  );
};

export default FriendLogos;
