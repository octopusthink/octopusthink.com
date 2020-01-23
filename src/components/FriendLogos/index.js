import { Heading } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import GridLayout from 'components/GridLayout';
import Hide from 'components/Hide';
import Image from 'components/Image';

const FriendLogos = (props) => {
  const { abbreviated, title } = props;
  return (
    <React.Fragment>
      <div
        css={css`
          text-align: center;
        `}
      >
        <Heading level={2}>{title}</Heading>
      </div>
      <GridLayout columnsMobile="2" columnsTablet="3" gap="8.0">
        {!abbreviated && <Image src="standard.png" alt="Standard Broadcast logo" />}
        <Image src="firefox.png" alt="Firefox logo" />
        {!abbreviated && <Image src="wordpress.com.png" alt="WordPress.com logo" />}
        <Image src="snp.png" alt="Scottish National Party logo" />
        {!abbreviated ? (
          <Image src="ns-government.png" alt="Nova Scotia Government logo" />
        ) : (
          <Hide mobile>
            <Image src="ns-government.png" alt="Nova Scotia Government logo" />
          </Hide>
        )}
        <Image src="google.png" alt="Google logo" />
        <Image src="mozilla.png" alt="Mozilla logo" />
        <Image src="automattic.png" alt="Automattic logo" />
        <Image src="ea.png" alt="EA logo" />
        {!abbreviated && <Image src="fernwood.png" alt="Fernwood Publishing logo" />}
        <Image src="10up.png" alt="10up logo" />
        {!abbreviated && <Image src="nebula.png" alt="Nebula logo" />}
        {!abbreviated && <Image src="arbor-day-foundation.png" alt="Arbor Day Foundation logo" />}
        {!abbreviated && <Image src="hachette.png" alt="Hachette Book Group logo" />}
        {!abbreviated && <Image src="nslc.png" alt="Nova Scotia Liquor Commission logo" />}
        {!abbreviated && <Image src="wicker-emporium.png" alt="Wicker Emporium logo" />}
        <Image src="wordpress.png" alt="WordPress logo" />
        {!abbreviated && <Image src="saffron-marigold.png" alt="Saffron Marigold logo" />}
      </GridLayout>
    </React.Fragment>
  );
};

export default FriendLogos;
