import { PageTitle, Paragraph } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import { markdown } from '../../utils/markdown';

import App from '../app';
import PageHeader from '../../components/PageHeader';
import PageBody from '../../components/PageBody';

export const BlogPost = props => {
	const { data } = props;
	const { post } = data;

	const { htmlAst } = post;
	const { author, date, slug, summary, title } = post.fields;

	const content = markdown(htmlAst);

	return (
		<App>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<Fragment key={slug}>
				<PageHeader metadata={date} pageTitle={title} summary={summary} />
			</Fragment>
			<PageBody>
				{content}

				<Paragraph>Written by {author}</Paragraph>
			</PageBody>
		</App>
	);
};

export const pageQuery = graphql`
	query($id: String!) {
		post: markdownRemark(id: { eq: $id }) {
			fields {
				author
				date
				slug
				title
				tags
				summary
			}
			htmlAst
			rawMarkdownBody
			id
		}
	}
`;

export default BlogPost;
