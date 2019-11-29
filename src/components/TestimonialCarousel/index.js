import { Link, Paragraph, metadata, useTheme } from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import TestimonialData from '../../../data/testimonials.yaml';
import Divider from 'components/Divider';
import Panel from 'components/Panel';
import Testimonial from 'components/Testimonial';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
};

const TestimonialCarousel = (props) => {
  const theme = useTheme();

  // Get a random testimonial
  const rand = getRandomInt(0, TestimonialData.length);
  let author, position, company, url;

  if (TestimonialData) {
    author = TestimonialData[rand].name;
    position = TestimonialData[rand].title;
    company = TestimonialData[rand].company;
    url = TestimonialData[rand].url;
  }

  return (
    <React.Fragment>
      <Divider light />
      <Panel dark>
        <Testimonial author={author} position={position} company={company} url={url}>
          <Paragraph large inverse>
            {TestimonialData[rand].quote}
          </Paragraph>
        </Testimonial>
      </Panel>
    </React.Fragment>
  );
};

export default TestimonialCarousel;
