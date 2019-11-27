import { Link, Paragraph, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import Divider from 'components/Divider';
import Panel from 'components/Panel';
import Testimonial from 'components/Testimonial';

const TestimonialCarousel = (props) => {
  const { author, children, company, position, url } = props;
  const theme = useTheme();

  return (
    <React.Fragment>
      <Divider light />
      <Panel dark>
        <Testimonial
          author="Dave Wiskus"
          position="CEO"
          company="Standard Broadcast"
          url="https://standard.tv"
        >
          <Paragraph large inverse>
            {/* prettier-ignore */}
            Matt built an entire{' '}
            <Link
              as="a"
              href="https://watchnebula.com/"
              css={css`
                color: #e33592;
              `}
            >
              streaming video platform
            </Link>{' '}
            complete with a custom API and layers upon layers of tests to validate all future
            changes against. All of this in about six months. It was truly awe-inspiring to watch.
          </Paragraph>

          <Paragraph large inverse>
            Do me a favor and don't hire Octopus Think, because I'd like to book all of their hours
            myself.
          </Paragraph>
        </Testimonial>
      </Panel>
    </React.Fragment>
  );
};

export default TestimonialCarousel;
