import {
  Button,
  Emphasis,
  Heading,
  Link,
  List,
  Paragraph,
  Strong,
  metadata,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import IllustratedPoint from '../IllustratedPoint';
import Panel from '../Panel';

const ServicesContent = () => {
  return (
    <React.Fragment>
      <Panel>
        <Heading>We care about stuff.</Heading>

        <Paragraph>
          We believe that technology can be a tool to improve people's lives. As technology becomes
          more intertwined in our everyday lives, it becomes more important that we build products
          thoughtfully and empathically. Our mission is to leverage everything we've learned to make
          the world a little bit better—one website, app, or visualisation at a time.
        </Paragraph>

        <Paragraph>
          We care deeply about making the world a better, fairer place, and we're not willing to
          compromise our values to make a quick quid. We make the most ethical decisions possible,
          from the projects we take on (sorry, Monsanto: we're not interested) to the tools we use.
          We work with governments so vital services are accessible and friendly; we leverage our
          experience with big companies to help small businesses realise big ideas.
        </Paragraph>

        <Heading>We don't do busy work.</Heading>

        <Paragraph>
          Staying small allows us to be nimble and adapt easily. We get things done without getting
          bogged down in endless meetings or onerous administrative overhead. If we can take a
          boring task off your plate so you can direct your energy better—we'll be delighted.
        </Paragraph>

        <Paragraph>
          We love automation and efficiency, which is a thread that runs through all of our work.
          Want to talk about tooling and improving your workflows? We love that kind of thing, and
          it's evidenced in our best work.
        </Paragraph>

        <Heading>
          We get things <Strong>done</Strong>.
        </Heading>

        <Paragraph>
          We've been on the Internet since MUDs and Mosaic. We've worked on a wide range of projects
          with clients of all sizes. We've built experiences for hundreds of millions of users
          across the world. We've contributed thousands of hours to major open-source software
          projects. We've spoken at conferences all over the world. We've taught, mentored, and
          encouraged all sorts of different people.
        </Paragraph>

        <Paragraph>
          We eschew clever for <Strong>simple</Strong>, exclusive for <Strong>open</Strong>, and
          safety for <Strong>boldness</Strong>.
        </Paragraph>
      </Panel>

      <Panel dark grid="1fr 1fr">
        {/* <Heading>Who are we?</Heading> */}
        <IllustratedPoint label="Matthew Riley MacPherson">
          <Paragraph inverse>
            Matt is a full-stack developer with a soft spot for React and JavaScript. He's
            detail-oriented, quick to learn, and well-versed in navigating projects of all sizes. He
            cares about accessibility, automation, and writing clean, readable code that doesn't box
            you in.
          </Paragraph>
          <Paragraph inverse>
            An enthusiastic contributor to open-source projects, he wrote the popular localForage
            library, used by thousands of apps/web services including Mozilla Add-ons, Cordova,
            Twitter and WordPress.com. He also served as the accessibility lead for WordPress 5.0.
          </Paragraph>
          <Paragraph inverse>
            Over the years, Matt has worked for Mozilla (Firefox), Automattic (WordPress), the Nova
            Scotia government, and a variety of start-ups. He's hosted workshops around the world
            and spoken at conferences on nearly every continent.
          </Paragraph>
          <Paragraph inverse>
            In his spare time, Matt likes riding his motorcycle, hiking in the Highlands, and making
            three different types of coffee.
          </Paragraph>
        </IllustratedPoint>
        <IllustratedPoint label="Sarah London Semark">
          <Paragraph inverse>
            Sarah calls herself a "designer who codes", which means she cares most about typography
            and colour but can also write a React component when the mood strikes (which it doesn't
            often).
          </Paragraph>
          <Paragraph inverse>
            Sarah's design work is inclusive from the outset and thoughtfully considered. She's
            skilled at framing a problem from a user-centric perspective and simplifying complex or
            abstract topics (then distilling them in visual form). Sarah has worked with clients
            like Automattic, Feminist Frequency, Joel on Software, and Smitten Kitchen on product
            design, ground-up site redesigns, and user research projects. She's spoken at
            conferences around the world about design, inclusion, and technology.{' '}
          </Paragraph>
          <Paragraph inverse>
            She's especially interested in the intersection of art and science. Data visualisation,
            machine learning, design systems, and user research are among her passions. When she’s
            not busy making things, Sarah likes obsessing over typography, collecting impractical
            footwear, and exploring new places.
          </Paragraph>
        </IllustratedPoint>
      </Panel>

      <Panel>
        <Heading>Our values</Heading>
        <Paragraph>
          You shouldn't need to compromise on the things you believe just to keep the lights on. We
          are advocates of inclusive design, fans of open source, and we believe that technology is
          a tool to make the world a better place.
        </Paragraph>
        <List>
          <List.Item>We believe that accessibility, beauty, and usability co-exist.</List.Item>
          <List.Item>We aim for transparency, clarity, and openness.</List.Item>
          <List.Item>We are advocates for inclusive design and open source.</List.Item>
          <List.Item>We leave our egos at the door and are pragmatic; not dogmatic.</List.Item>
          <List.Item>
            We improve with every project and love to pass on what we're learned.
          </List.Item>
        </List>
        <Paragraph>
          Are you making the world a better place? We offer a 15% discount for charities,
          non-profits, and open-source work.
        </Paragraph>
        <Heading>Hire us</Heading>
        <Paragraph>
          Have an idea you want to build? Maybe you need some extra resources to join your existing
          team? Drop us a line and we'll talk.
        </Paragraph>

        <Button navigation to="/contact" minimal>
          Get in touch with us
        </Button>
      </Panel>
    </React.Fragment>
  );
};

export default ServicesContent;
