import { Paragraph } from '@octopusthink/nautilus';
import React from 'react';

import Divider from 'components/Divider';
import Panel from 'components/Panel';
import Testimonial from 'components/Testimonial';
import TestimonialData from '../../../data/testimonials.yaml';

// Get a random integer between two values.
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min);
};

const TestimonialCarousel = () => {
  // Get a random testimonial
  const rand = getRandomInt(0, TestimonialData.length);
  let name;
  let title;
  let company;
  let url;

  if (TestimonialData) {
    name = TestimonialData[rand].name;
    title = TestimonialData[rand].title;
    company = TestimonialData[rand].company;
    url = TestimonialData[rand].url;
  }

  return (
    <React.Fragment>
      <Panel dark>
        <Testimonial name={name} title={title} company={company} url={url}>
          <Paragraph large inverse>
            {TestimonialData[rand].quote}
          </Paragraph>
        </Testimonial>
      </Panel>
    </React.Fragment>
  );
};

export default TestimonialCarousel;
