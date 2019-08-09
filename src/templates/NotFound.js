import { PageTitle } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { markdown } from '../utils/markdown';

import App from './app';

export const NotFound = props => {
	const { data } = props;

	const { page } = data;
	const { htmlAst } = page;
	const { title } = page.fields;

	const content = markdown(htmlAst);

	return (
		<App>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<PageTitle>{title}</PageTitle>
			{content}
		</App>
	);
};

export const pageQuery = graphql`
	query($id: String!) {
		page: markdownRemark(id: { eq: $id }) {
			fields {
				slug
				title
			}
			htmlAst
			rawMarkdownBody
			id
		}
	}
`;

export default NotFound;
