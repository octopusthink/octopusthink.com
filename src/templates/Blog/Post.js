import { Paragraph } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React, { Fragment } from 'react';

import { markdown } from '../../utils/markdown';
import dayjs from 'dayjs';

import App from '../App';
import PageHeader from '../../components/PageHeader';
import PageBody from '../../components/PageBody';
import SEO from '../../components/SEO';
import config from '../../../config';

export const BlogPost = props => {
	const { data } = props;
	const { post } = data;

	const { htmlAst } = post;
	const { author, date, metaDescription, slug, summary, title } = post.fields;
	const formattedDate = dayjs(date).format(config.dateFormat);

	const description = metaDescription || summary;
	const content = markdown(htmlAst);

	return (
		<App>
			<SEO title={title} description={description} />
			<Fragment key={slug}>
				<PageHeader metadata={formattedDate} pageTitle={title} summary={summary} />
			</Fragment>
			<PageBody>
				{content}

				<Paragraph>
					Written by
					{author}
				</Paragraph>
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
				metaDescription
				slug
				summary
				title
				tags
			}
			htmlAst
			rawMarkdownBody
			id
		}
	}
`;

export default BlogPost;
