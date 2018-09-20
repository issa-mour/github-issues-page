import { createSelector } from 'reselect';

const issuesSelector = state => state.getIn(['entities', 'issues', 'byId']);
const issuesIdsSelector = state => state.getIn(['entities', 'issues', 'allIds']);
const getIssuesEntities = createSelector(issuesSelector,
	issuesIdsSelector,
	(issues, issuesIds) => issuesIds.map(id => issues.get(id.toString())));

function getIssue(state, { match }) {
	return state.getIn(['entities', 'issues', 'byId', match.params.issueId.toString()]);
}

const commentIdsSelector = state => state.getIn(['entities', 'comments', 'allIds']);
const commentsSelector = state => state.getIn(['entities', 'comments', 'byId']);
const getIssueComments = createSelector(
	commentIdsSelector,
	commentsSelector,
	(commentsIds, comments) => commentsIds.map(v => comments.get(v.toString())));

export { getIssuesEntities, getIssue, getIssueComments };