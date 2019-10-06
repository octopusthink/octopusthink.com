import {
  Button,
  Emphasis,
  Heading,
  Link,
  List,
  Paragraph,
  Strong,
  useTheme,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import IllustratedPoint from 'components/IllustratedPoint';
import Panel from 'components/Panel';
import Testimonial from 'components/Testimonial';
import AccessibilityIllustration from 'static/illustrations/accessibility.svg';
import StrategyIllustration from 'static/illustrations/strategy.svg';
import AppIllustration from 'static/illustrations/app.svg';
import WebIllustration from 'static/illustrations/web.svg';
import ProductIllustration from 'static/illustrations/product.svg';
import VisualIllustration from 'static/illustrations/visual.svg';

const ServicesContent = () => {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Panel>
        <Heading>What we know</Heading>
        <Paragraph>
          We have <Strong>decades of experience</Strong> working on the web—we remember when
          bandwidth was measured in baud. Over that time, we’ve picked up a whole range of different
          skills and keep ourselves up-to-date with best practices in design & development.
        </Paragraph>

        <Paragraph>
          Rather than being narrowly scoped, we have a range of skills and experience allowing us to
          approach projects with a holistic understanding of how everything fits together. We can
          smoothly shepherd your project through all phases of implementation—from{' '}
          <Strong>research to design, development to deployment</Strong>: Octopus Think does it.
        </Paragraph>

        <Paragraph>
          Some may think that makes us masters of none, but we don’t believe that (and neither do
          our clients!){' '}
          {/* For more perspective on this, read our blog post: Masters of some: Why we’re
          proud to call ourselves generalists. */}
        </Paragraph>
      </Panel>
      <Panel dark grid="1fr 1fr">
        <IllustratedPoint label="Strategy & training" illustration={StrategyIllustration}>
          <Paragraph inverse>
            Not sure how to get started, what JavaScript framework you need, or what your users
            really need? We can help with planning, strategy, and execution. We also offer bespoke
            training and workshops, on-site or remotely.
          </Paragraph>
        </IllustratedPoint>

        <IllustratedPoint label="Accessibility" illustration={AccessibilityIllustration}>
          <Paragraph inverse>
            Accessibility and inclusion are fundamental to good design. Everything we make begins
            with an inclusive design process and is built to accessible standards. We can also help
            with audits, compliance and testing.
          </Paragraph>
        </IllustratedPoint>

        <IllustratedPoint label="Web development" illustration={WebIllustration}>
          <Paragraph inverse>
            Because you need more than just a Facebook page. Django, WordPress, Gatsby, React,
            Rails—we’ve been doing this a long time, so we know how to design & build gorgeous
            websites that are fast, accessible, and mobile-optimised. Oh, and they’ll be SEO
            optimised and privacy-aware to boot.
          </Paragraph>
        </IllustratedPoint>

        <IllustratedPoint label="App development" illustration={AppIllustration}>
          <Paragraph inverse>
            Need a web app or a native mobile app? We love building apps that delight users and
            solve real problems. Whether it’s a React Native app or a full-stack solution, you can
            rest assured that you’ll end up with an app that’s stable, performant, easy to use, and
            delightful.
          </Paragraph>
        </IllustratedPoint>

        <IllustratedPoint label="Product design" illustration={ProductIllustration}>
          <Paragraph inverse>
            Design isn’t just about making it pretty—it’s about how it works. We approach problems
            from a user-centric perspective, ensuring every interaction is intuitive and pleasant.
            From user research to usability testing and all the journey maps, wireframes, and
            prototypes in between, we’ve got you covered.
          </Paragraph>
        </IllustratedPoint>

        <IllustratedPoint label="Visual design" illustration={VisualIllustration}>
          <Paragraph inverse>
            Once you’ve got everything usable, you may want to make it pretty after all. Graphic
            design is about using visual media to communicate a message. Whatever you need—design
            systems, branding, visualisations, web design—we ensure your message is communicated
            clearly and effectively.
          </Paragraph>
        </IllustratedPoint>
      </Panel>

      <Panel>
        <Heading>How we work</Heading>
        <Paragraph>
          Every project is different, so we don’t adhere to a rigid process. Our process follows an
          adaptable framework that responds to the unique needs of your project.
        </Paragraph>
        {/* [process diagram] */}
        <Paragraph>
          We’ve spent the last decade working remotely with small and large organisations, so we’re
          great communicators and we know how to manage work across divergent time zones. We’re also
          available to work on-site if the project calls for it, to do staff training, or for short
          periods during a longer project. Here’s what you can expect of working with us:
        </Paragraph>
        <List
          css={css`
            li {
              margin-bottom: 1.6rem;
            }
          `}
        >
          <List.Item>
            <Strong>Frequent status updates.</Strong> Communication is what makes or breaks a
            project.
          </List.Item>
          <List.Item>
            <Strong>Clear milestones, ownership, and deliverables.</Strong> Setting expectations
            up-front and having clear lines of delivery makes for a smoother, more pleasant
            experience.
          </List.Item>
          <List.Item>
            <Strong>Friendly, open, and transparent communication.</Strong> It’s easier to be
            straightforward about concerns, delays, improvements, or suggestions. When we each
            respect one another’s time, we can get more done.
          </List.Item>
          <List.Item>
            <Strong>Zero bullshit.</Strong> We don’t believe in busywork, complex hierarchies of
            middle-management, or needless meetings. Instead, we’re going to focus on getting things
            done and getting them done <Emphasis>well</Emphasis>.
          </List.Item>
          <List.Item>
            <Strong>Agility and pragmatism.</Strong> We aren’t dogmatic about things, and we don’t
            believe in one-size-fits-all solutions. Instead, we’ll work with you to determine the
            technologies, tools, and process that best fits your needs.
          </List.Item>
          <List.Item>
            <Strong>A stress-free launch day.</Strong> We know launching a product is a big deal.
            We’ll be on call for you all day, taking care of anything unexpected that comes up. That
            way, all you need to do is sit back and watch the compliments come rolling in.
          </List.Item>
        </List>
      </Panel>

      <Panel dark>
        <Testimonial
          author="Dave Wiskus"
          position="CEO"
          company="Standard Broadcast"
          url="https://standard.tv"
        >
          <Paragraph large inverse>
            Matt built an entire{' '}
            <Link
              as="a"
              href="https://watchnebula.com/"
              css={css`
                color: ${theme.colors.state.interactiveTextInverse};
              `}
            >
              streaming video platform
            </Link>{' '}
            complete with a custom API and layers upon layers of tests to validate all future
            changes against. All of this in about six months. It was truly awe-inspiring to watch.
          </Paragraph>
          <Paragraph large inverse>
            Do me a favor and don’t hire Octopus Think, because I’d like to book all of their hours
            myself.
          </Paragraph>
        </Testimonial>
      </Panel>

      <Panel>
        <Heading>Work with us</Heading>
        <Paragraph>
          If you’re ready to discuss your project with us, <Link to="/contact">drop us a line</Link>{' '}
          for a no-strings-attached estimate.
        </Paragraph>
        <Paragraph>
          Just in the planning stages? <Strong>Reach out anyway!</Strong> We can help you plan,
          focus, research, and give you unbiased feedback about your idea. We once talked a client
          out of a lucrative contract because it wasn’t the best fit for their needs. Rest assured
          we have no interest in up-selling you.
        </Paragraph>

        <Button navigation to="/contact" minimal>
          Contact us to discuss your project
        </Button>
      </Panel>
    </React.Fragment>
  );
};

export default ServicesContent;
