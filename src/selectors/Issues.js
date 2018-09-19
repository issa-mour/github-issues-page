import { createSelector } from 'reselect';
import { fromJS } from 'immutable';

function getIssuesEntities(state) {
	return state.getIn(['entities', 'issues', 'byId']);
}

function getIssue(state, { match }) {
	return state.getIn(['entities', 'issues', 'byId', match.params.issueId.toString()]);
}

const issueCommentIdsSelector = (state, { match }) => state.getIn(['entities', 'issues', 'byId', match.params.issueId.toString(), 'commentsIds']);
const commentsSelector = state => state.getIn(['entities', 'comments', 'byId']);
const getIssueComments = createSelector(
	issueCommentIdsSelector,
	commentsSelector,
	(commentsIds, comments) => commentsIds !== undefined ? commentsIds.map(v => comments.get(v.toString())) : fromJS([]));

export { getIssuesEntities, getIssue, getIssueComments };