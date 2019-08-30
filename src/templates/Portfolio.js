import { PageTitle } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { markdown } from '../utils/markdown';

import App from './app';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';
import SEO from '../components/SEO';

export const Portfolio = props => {
	const { data } = props;

	const { portfolioPiece } = data;
	const { htmlAst } = portfolioPiece;
	const { title, summary } = portfolioPiece.fields;

	const content = markdown(htmlAst);

	return (
		<App>
			<SEO title={title} />
			<PageHeader pageTitle={title} summary={summary} />
			<PageBody>{content}</PageBody>
		</App>
	);
};

export const pageQuery = graphql`
	query($id: String!) {
		portfolioPiece: markdownRemark(id: { eq: $id }) {
			fields {
				slug
				title
				summary
			}
			htmlAst
			rawMarkdownBody
			id
		}
	}
`;

export default Portfolio;
