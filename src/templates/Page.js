import { PageTitle, Paragraph } from '@octopusthink/nautilus';
import { graphql } from 'gatsby';
import React from 'react';
import Helmet from 'react-helmet';

import { markdown } from '../utils/markdown';

import App from './app';
import PageHeader from '../components/PageHeader';
import PageBody from '../components/PageBody';

export const Page = props => {
	const { data } = props;

	const { page } = data;
	const { htmlAst } = page;
	const { summary, title } = page.fields;

	const content = markdown(htmlAst);

	return (
		<App>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			<PageHeader pageTitle={title} summary={summary} />
			<PageBody>{content}</PageBody>
		</App>
	);
};

export const pageQuery = graphql`
	query($id: String!) {
		page: markdownRemark(id: { eq: $id }) {
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

export default Page;
