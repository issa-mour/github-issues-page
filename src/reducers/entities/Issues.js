import { fromJS } from 'immutable';

import { GET_ISSUES_SUCCESS, GET_COMMENTS_SUCCESS, GET_ISSUE_SUCCESS } from '../../actions/index';
const INITIAL_STATE = fromJS({ byId: {} });

function mergeIssues(state, payload) {
	const p = fromJS(payload);
	const issues = p.getIn(['issues', 'entities', 'issues'], fromJS({}));
	return state.mergeDeep({ 'byId': issues });
}

function updateCommentsIds(state, payload) {
	const p = fromJS(payload);
	const g = p.getIn(['comments', 'entities', 'comments'], fromJS({})).valueSeq().map(comment => comment.get('id'));
	return state.updateIn(['byId', payload.issueId.toString(), 'commentsIds'], () => g);
}

function mergeIssue(state, payload) {
	const p = fromJS(payload);
	return state.updateIn(['byId', p.get('issueId').toString()], () => p.get('item'));
}

export default function (state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case GET_ISSUES_SUCCESS:
			return mergeIssues(state, payload);
		case GET_ISSUE_SUCCESS:
			return mergeIssue(state, payload);
		case GET_COMMENTS_SUCCESS:
			return updateCommentsIds(state, payload);
		default:
			return state;
	}
}