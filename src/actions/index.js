import Octokat from 'octokat';
import parse from 'url-parse';
import dotProp from 'dot-prop';
import { normalize } from 'normalizr';
import { issuesSchema, commentsSchema } from '../Schema';

export const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';

export const GET_COMMENTS_REQUEST = 'GET_COMMENTS_REQUEST';
export const GET_COMMENTS_SUCCESS = 'GET_COMMENTS_SUCCESS';
export const GET_COMMENTS_FAILURE = 'GET_COMMENTS_FAILURE';

export const GET_ISSUE_REQUEST = 'GET_ISSUE_REQUEST';
export const GET_ISSUE_SUCCESS = 'GET_ISSUE_SUCCESS';
export const GET_ISSUE_FAILURE = 'GET_ISSUE_FAILURE';

export const CREATE_NEW_ISSUE = 'CREATE_NEW_ISSUE';
export const RESET_REDIRECT = 'RESET_REDIRECT';

export const getIssues = (org = 'rails', repo = 'rails', page = 1) => dispatch => {
	dispatch({ type: GET_ISSUES_REQUEST });
	dispatch({ type: GET_ISSUES_SUCCESS, payload: {} });

	// const totalCount = getTotalCount('https://api.gethub.com/issues?per_page=25&page=20');
	// const items = [{
	// 	id: 4366, number: 4366, createdAt: '2018-09-25T07:37:23.000Z',
	// 	body: '### Steps to reproduce\r\n\r\n```ruby\r\nredirect_to \'the.evil.site\'\r\n```\r\n\r\n### Expected behavior\r\n\r\nI am redirected to `http://my.site/the.evil.site`\r\n\r\n### Actual behavior\r\n\r\nI am redirected to `http://my.sitethe.evil.site`\r\n\r\n### System configuration\r\n**Rails version**:\r\nEvery\r\n**Ruby version**:\r\nEvery',
	// 	comments: 0, state: 'open', title: `parsing doesn\\'t work ${org} ${repo} ${page}`, user: { login: 'essa.mor' }
	// },
	// {
	// 	id: 4365,  number: 4365, createdAt: '2018-09-19T19:57:20.000Z',
	// 	body: '### Steps to reproduce\r\n\r\n```ruby\r\nredirect_to \'the.evil.site\'\r\n```\r\n\r\n### Expected behavior\r\n\r\nI am redirected to `http://my.site/the.evil.site`\r\n\r\n### Actual behavior\r\n\r\nI am redirected to `http://my.sitethe.evil.site`\r\n\r\n### System configuration\r\n**Rails version**:\r\nEvery\r\n**Ruby version**:\r\nEvery',
	// 	comments: 2, state: 'open', title: `fetching doesn\\'t work ${org} ${repo} ${page}`, user: { login: 'thomas1' }
	// }
	// ];
	// setTimeout(() => {
	// 	const issues = normalize(items, issuesSchema);
	// 	dispatch({ type: GET_ISSUES_SUCCESS, payload: { issues, totalCount, page } });
	// }, 1000);


	const gh = new Octokat();
	gh.repos(org, repo).issues.fetch({ per_page: 25, state: 'open', page })
		.then(result => {
			const { items, lastPageUrl } = result;
			const issues = normalize(items, issuesSchema);
			const totalCount = getTotalCount(lastPageUrl);
			dispatch({ type: GET_ISSUES_SUCCESS, payload: { issues, totalCount, page } });
		});
};

export const getIssueComments = (org = 'rails', repo = 'rails', issueId = 4365) => dispatch => {
	dispatch({ type: GET_COMMENTS_REQUEST });

	// const items = [{
	// 	authorAssociation: 'NONE',
	// 	body: 'body body body',
	// 	createdAt: '2018-09-24T18:39:49.000Z',
	// 	html: () => { },
	// 	htmlUrl: 'https://github.com/rails/rails/issues/33905#issuecomment-421985452',
	// 	id: 421985452,
	// 	issue: () => { },
	// 	issueUrl: 'https://api.github.com/repos/rails/rails/issues/33905',
	// 	nodeId: 'MDEyOklzc3VlQ29tbWVudDQyMTk4NTQ1Mg==',
	// 	updatedAt: null,
	// 	url: 'https://api.github.com/repos/rails/rails/issues/comments/421985452',
	// 	user: { login: 'jablan', id: 1508, nodeId: 'MDQ6VXNlcjE1MDg=', avatarUrl: 'https://avatars1.githubusercontent.com/u/1508?v=4' }
	// },
	// {
	// 	authorAssociation: 'NONE',
	// 	body: 'body body body',
	// 	createdAt: '2018-09-24T20:20:11.000Z',
	// 	html: () => { },
	// 	htmlUrl: 'https://github.com/rails/rails/issues/33905#issuecomment-421985452',
	// 	id: 421985453,
	// 	issue: () => { },
	// 	issueUrl: 'https://api.github.com/repos/rails/rails/issues/33905',
	// 	nodeId: 'MDEyOklzc3VlQ29tbWVudDQyMTk4NTQ1Mg==',
	// 	updatedAt: null,
	// 	url: 'https://api.github.com/repos/rails/rails/issues/comments/421985452',
	// 	user: { login: 'jablan', id: 1508, nodeId: 'MDQ6VXNlcjE1MDg=', avatarUrl: 'https://avatars1.githubusercontent.com/u/1508?v=4' }
	// }];

	// setTimeout(() => {
	// 	const comments = normalize(items, commentsSchema);
	// 	dispatch({ type: GET_COMMENTS_SUCCESS, payload: { comments, issueId } });
	// }, 1000);

	const gh = new Octokat();
	gh.repos(org, repo).issues(issueId).comments.fetch()
		.then(result => {
			const { items } = result;
			const comments = normalize(items, commentsSchema);
			dispatch({ type: GET_COMMENTS_SUCCESS, payload: { comments, issueId } });
		});
};

export const getIssue = (org = 'rails', repo = 'rails', issueId = 4365) => dispatch => {
	dispatch({ type: GET_ISSUE_REQUEST });

	// const item = {
	// 	id: 4365, number: 4365, createdAt: '2018-09-24T17:39:49.000Z',
	//  body: '### Steps to reproduce\r\n\r\n```ruby\r\nredirect_to \'the.evil.site\'\r\n```\r\n\r\n### Expected behavior\r\n\r\nI am redirected to `http://my.site/the.evil.site`\r\n\r\n### Actual behavior\r\n\r\nI am redirected to `http://my.sitethe.evil.site`\r\n\r\n### System configuration\r\n**Rails version**:\r\nEvery\r\n**Ruby version**:\r\nEvery',
	// 	comments: 2, state: 'open', title: `fetching doesn\\'t work ${org} ${repo}`, user: { login: 'thomas1' }
	// };

	// setTimeout(() => {
	// 	dispatch({ type: GET_ISSUE_SUCCESS, payload: { item, issueId } });
	// }, 1000);

	const gh = new Octokat();
	gh.repos(org, repo).issues(issueId).fetch()
		.then(item => {
			dispatch({ type: GET_ISSUE_SUCCESS, payload: { item, issueId } });
		});
};

export const createIssue = (values) => ({ type: CREATE_NEW_ISSUE, payload: values });

export const resetRedirect = () => ({ type: RESET_REDIRECT });

const getTotalCount = lastPageUrl => {
	const url = parse(lastPageUrl, true);
	const perPage = dotProp.get(url, 'query.per_page', 0);
	const page = dotProp.get(url, 'query.page', 0);
	return page * perPage;
};