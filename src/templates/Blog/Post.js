import { Link, Tags, metadata, useTheme } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React, { Fragment } from 'react';
import { css } from '@emotion/core';
import dayjs from 'dayjs';

import AuthorByline from 'components/AuthorByline';
import Divider from 'components/Divider';
import PageBody from 'components/PageBody';
import PageFooter from 'components/PageFooter';
import PageHeader from 'components/PageHeader';
import PageWrapper from 'components/PageWrapper';
import SequentialLink from 'components/SequentialLink';
import SEO from 'components/SEO';
import config from 'data/SiteConfig';
import App from 'templates/App';

export const BlogPost = (props) => {
  const theme = useTheme();

  const { data, pageContext } = props;
  const { post } = data;

  const { body } = post;
  const {
    authors,
    canonical,
    date,
    metaDescription,
    slug,
    summary,
    tags,
    title,
    thumbnail,
    updated,
  } = post.fields;

  const formattedDate = dayjs(date).format(config.dateFormat);
  const formattedUpdated = updated && dayjs(updated).format(config.dateFormat);

  const formattedMetadata = (
    <div
      css={css`
        align-items: center;
        display: flex;
        white-space: nowrap;
      `}
    >
      <Tags label="Published on">
        <Tags.Tag title={formattedUpdated && `Updated ${formattedUpdated}`}>
          <span
            css={css`
              color: ${theme.colors.neutral.grey600};
            `}
          >
            {formattedDate}
          </span>
        </Tags.Tag>
      </Tags>

      {tags.length && (
        <React.Fragment>
          <span
            css={css`
              ${metadata.small(theme)};
              color: ${theme.colors.neutral.grey600};
              padding-right: 0.4rem;
            `}
          >
            &middot;
          </span>

          <Tags label="Tags">
            {tags.map((tag) => {
              return (
                <Tags.Tag>
                  <Link
                    unstyled
                    to={`/blog/tags/${tag.id}`}
                    css={css`
                      text-decoration: none;
                      color: ${theme.colors.neutral.grey600};
                      padding-right: 0.4rem;

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
        </React.Fragment>
      )}
    </div>
  );
  const description = metaDescription || summary;
  const tagArray = tags.map((tag) => {
    return tag.name;
  });

  return (
    <App>
      <SEO
        article
        canonical={canonical}
        description={description}
        modifiedTime={updated}
        pathname={slug}
        publishedTime={date}
        tags={tagArray}
        title={title}
        image={thumbnail}
      />
      <PageWrapper>
        <Fragment key={slug}>
          <PageHeader metadata={formattedMetadata} summary={summary} title={title} />
        </Fragment>
        <PageBody>
          <MDXRenderer>{body}</MDXRenderer>
          {authors.map((author) => (
            <AuthorByline
              name={author.name}
              alt={author.alt}
              avatar={author.avatar}
              title={author.title}
            >
              {author.bio}
            </AuthorByline>
          ))}
        </PageBody>

        <PageFooter>
          {pageContext.prevslug !== slug && (
            <SequentialLink
              direction="previous"
              title={pageContext.prevtitle}
              to={pageContext.prevslug}
            />
          )}

          {pageContext.nextslug !== slug && (
            <SequentialLink
              direction="next"
              title={pageContext.nexttitle}
              to={pageContext.nextslug}
            />
          )}
        </PageFooter>
        <Divider light />
      </PageWrapper>
    </App>
  );
};

export const pageQuery = graphql`
  query($id: String!, $nowTimestamp: Int!) {
    post: mdx(id: { eq: $id }, fields: { timestamp: { lte: $nowTimestamp } }) {
      fields {
        authors {
          alt
          avatar
          bio
          id
          name
          title
        }
        canonical
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
        thumbnail
        updated
      }
      body
      id
    }
  }
`;

export default BlogPost;
