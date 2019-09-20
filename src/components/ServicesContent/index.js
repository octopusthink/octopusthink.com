import {
  Button,
  Heading,
  Emphasis,
  Icon,
  Link,
  List,
  Paragraph,
  Strong,
  Tags,
  TextField,
  metadata,
} from '@octopusthink/nautilus';
import React from 'react';
import { css } from '@emotion/core';

import { markdown } from '../../utils/markdown';
import config from '../../../config';
import theme from '../../../config/theme';
import Panel from '../Panel';

const ServicesContent = (props) => {
  return (
    <>
      <Panel>
        <Heading>What we do</Heading>
        <Paragraph>
          We have decades of experience working on the web—we remember when bandwidth was measured
          in baud. Over that time, we’ve picked up a whole range of different skills and keep
          ourselves up-to-date with best practices in design & development.
        </Paragraph>

        <Paragraph>
          Rather than being narrowly scoped, we have a range of skills and experience allowing us to
          approach projects with a holistic understanding of how everything fits together. We can
          smoothly shepherd your project through all phases of implementation—from research to
          design, development to deployment: Octopus Think does it.
        </Paragraph>

        <Paragraph>
          Some may think that makes us masters of none, but we don’t believe that (and neither do
          our clients!){' '}
          {/*For more perspective on this, read our blog post: Masters of some: Why we’re
          proud to call ourselves generalists.*/}
        </Paragraph>
      </Panel>
      <Panel dark grid="1fr 1fr">
        <div>
          <Heading
            level={3}
            css={css`
              color: ${theme.colors.text.inverse};
            `}
          >
            Strategy & training
          </Heading>
          <Paragraph small inverse>
            There are always things to improve, but we'll help you decide *what* and then *how*. Not
            sure how to get started, what JavaScript framework you need, or how many engineers your
            new app will require? We can help with planning, strategy, and execution.
            {/*}-
            Documentation and copy-editing (internal, external, and user-facing) - Open source
            software (community, development, and project management) - Workflow & automation
            (developer experience, continuous integration, DevOps, git, GitHub, and automated
            testing) - Bespoke workshops and training (remote work, React, open source, automation,
            DevOps, user research, and design systems)
            */}
          </Paragraph>
        </div>

        <div>
          <Heading
            level={3}
            css={css`
              color: ${theme.colors.text.inverse};
            `}
          >
            Accessibility
          </Heading>
          <Paragraph small inverse>
            Accessibility is just good design. Everything we make begins with an inclusive design
            process and is built to accessible standards. We can also help with audits, compliance
            and testing.
          </Paragraph>
        </div>
      </Panel>
      <Panel>
        <Heading>How we work</Heading>
        <Paragraph>
          Every project is different, so we don't adhere to a rigid process. Our process follows an
          adaptable framework that responds to the unique needs of your project.
        </Paragraph>
        {/*}[process diagram]*/}
        <Paragraph>
          We've spent the last decade working remotely with small and large organisations; we're
          great communicators and we know how to manage work across divergent time zones. We're also
          available to work on-site if the project calls for it, to do staff training, or for short
          periods during a longer project. Here's what you can expect of working with us:
        </Paragraph>
        <List>
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
            <Strong>Friendly, open, and transparent communication.</Strong> It's easier to be
            straightforward about concerns, delays, improvements, or suggestions. When we each
            respect one another's time, we can get more done.
          </List.Item>
          <List.Item>
            <Strong>Zero bullshit.</Strong> We don't believe in busywork, complex hierarchies of
            middle-management, or needless meetings. Instead, we're going to focus on getting things
            done and getting them done <Emphasis>well</Emphasis>.
          </List.Item>
          <List.Item>
            <Strong>Agility and pragmatism.</Strong> We aren't dogmatic about things, and we don't
            believe in one-size-fits-all solutions. Instead, we'll work with you to determine the
            technologies, tools, and process that best fits your needs.
          </List.Item>
          <List.Item>
            <Strong>A stress-free launch day.</Strong> We know launching a product is a big deal,
            and we prioritise your launch. You can expect us to be on call all day, taking care of
            anything unexpected that comes up. That way, you can sit back and watch the compliments
            come rolling in.
          </List.Item>
        </List>
      </Panel>

      <Panel dark>
        <blockquote
          css={css`
            font-size: 1.2em;
            position: relative;

            &::before {
              color: ${theme.colors.text.inverseDark};
              content: '“';
              font-family: Georgia, 'Times New Roman', Times, serif;
              font-size: 12rem;
              position: absolute;
              top: -2.8rem;
              left: -5.6rem;
              display: block;
              opacity: 0.25;
            }
          `}
        >
          <Paragraph large inverse>
            Matt built an entire streaming video platform complete with a custom API and layers upon
            layers of tests to validate all future changes against. All of this in about six months.
            It was truly awe-inspiring to watch.
          </Paragraph>
          <Paragraph large inverse>
            Do me a favor and don’t hire Octopus Think, because I’d like to book all of their hours
            myself.
          </Paragraph>

          <cite
            css={css`
              ${metadata.small(theme)};
              color: ${theme.colors.text.inverseDark};
              font-style: normal;
              opacity: 0.7;
            `}
          >
            Dave Wiskus, CEO @ Standard Broadcast
          </cite>
        </blockquote>
      </Panel>

      <Panel>
        <Heading>Work with us</Heading>
        <Paragraph>
          If you're ready to discuss your project with us, [drop us a line] for a
          no-strings-attached estimate.
        </Paragraph>
        <Paragraph>
          Just in the planning stages? Reach out anyway: we can help you plan, focus, research, and
          give you unbiased feedback about your idea. We have talked past clients out of lucrative
          contracts with us for the betterment of the project, so rest assured we aren't trying to
          up-sell you.
        </Paragraph>
      </Panel>
    </>
  );
};

export default ServicesContent;
