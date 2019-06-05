import {
  Heading2,
  Heading3,
  Heading4,
  List,
  PageTitle,
  Paragraph,
} from '@octopusthink/nautilus';
import React from "react";
import Helmet from "react-helmet";
import RehypeReact from 'rehype-react';
import { graphql } from "gatsby";
import Layout from "../layout";
import UserInfo from "../components/UserInfo/UserInfo";
import PostTags from "../components/PostTags/PostTags";
import SEO from "../components/SEO/SEO";
import config from "../../data/SiteConfig";
import "./b16-tomorrow-dark.css";
import "./post.css";

export default class PostTemplate extends React.Component {
  render() {
    const { data, pageContext } = this.props;
    const { slug } = pageContext;
    const postNode = data.markdownRemark;
    const post = postNode.frontmatter;
    if (!post.id) {
      post.id = slug;
    }
    if (!post.category_id) {
      post.category_id = config.postDefaultCategoryID;
    }

    const renderAst = new RehypeReact({
      createElement: React.createElement,
      components: {
        h1: PageTitle,
        h2: Heading2,
        h3: Heading3,
        h4: Heading4,
        p: Paragraph,
        ul: List,
        ol: () => <List ordered />,
        li: List.Item,
      },
    }).Compiler;

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${post.title} | ${config.siteTitle}`}</title>
          </Helmet>
          <SEO postPath={slug} postNode={postNode} postSEO />
          <article>
            <PageTitle>{post.title}</PageTitle>
            {/* <div dangerouslySetInnerHTML={{ __html: postNode.html }} /> */}
            {renderAst(postNode.htmlAst)}
            <div className="post-meta">
              <PostTags tags={post.tags} />
            </div>
            <UserInfo config={config} />
          </article>
        </div>
      </Layout>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      timeToRead
      excerpt
      frontmatter {
        title
        cover
        date
        category
        tags
      }
      fields {
        slug
        date
      }
    }
  }
`;
