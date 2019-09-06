import { Link, Paragraph, Tags, metadata } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React, { Fragment } from 'react';
import { css } from '@emotion/core';

import { markdown } from '../../utils/markdown';
import dayjs from 'dayjs';

import App from '../App';
import AuthorByline from '../../components/AuthorByline';
import PageHeader from '../../components/PageHeader';
import PageBody from '../../components/PageBody';
import SequentialLink from '../../components/SequentialLink';
import SEO from '../../components/SEO';
import config from '../../../config';
import theme from '../../../config/theme';

export const BlogPost = props => {
  const { data, pageContext } = props;
  const { post } = data;

  const { htmlAst } = post;
  const { authors, date, metaDescription, slug, summary, tags, title } = post.fields;

  const formattedDate = dayjs(date).format(config.dateFormat);

  const formattedMetadata = (
    <div
      css={css`
        align-items: center;
        display: flex;
        white-space: nowrap;
      `}
    >
      <Tags label="Published on">
        <Tags.Tag>{formattedDate}</Tags.Tag>
      </Tags>
      <span
        css={css`
          ${metadata.small(theme)};
          color: ${theme.colors.neutral.grey800};
          padding: 0 0.4rem;
        `}
      >
        &middot;
      </span>
      <Tags label="Tags">
        {tags.map(tag => {
          return (
            <Tags.Tag>
              <Link
                to={`/blog/tags/${tag.id}`}
                css={css`
                  border: none;
                  color: ${theme.colors.neutral.grey800};

                  &:hover {
                    color: ${theme.colors.text.inverseDark};
                  }
                `}
              >
                #{tag.name}
              </Link>
            </Tags.Tag>
          );
        })}
      </Tags>
    </div>
  );
  const description = metaDescription || summary;
  const content = markdown(htmlAst);

  return (
    <App>
      <SEO title={title} description={description} />
      <Fragment key={slug}>
        <PageHeader metadata={formattedMetadata} pageTitle={title} summary={summary} />
      </Fragment>

      <PageBody>
        {content}
        {authors.map(author => (
          <AuthorByline name={author.name} avatar={author.avatar} title={author.title}>
            {author.bio}
          </AuthorByline>
        ))}
      </PageBody>

      <div
        css={css`
          width: 100%;
          padding: 3.2rem;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 3.2rem;
        `}
      >
        <SequentialLink
          direction="previous"
          title={pageContext.prevtitle}
          to={pageContext.prevslug}
        />

        <SequentialLink direction="next" title={pageContext.nexttitle} to={pageContext.nextslug} />
      </div>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      fields {
        authors {
          avatar
          bio
          id
          name
          title
        }
        date
        metaDescription
        slug
        summary
        title
        tags {
          id
          name
          summary
        }
      }
      htmlAst
      rawMarkdownBody
      id
    }
  }
`;

export default BlogPost;
