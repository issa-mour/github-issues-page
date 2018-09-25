import { fromJS } from 'immutable';

import { GET_ISSUES_SUCCESS, GET_COMMENTS_SUCCESS, GET_ISSUE_SUCCESS } from '../../actions/index';
const INITIAL_STATE = fromJS({ byId: {}, allIds: [] });

function mergeIssues(state, payload) {
	const p = fromJS(payload);
	const issues = p.getIn(['issues', 'entities', 'issues'], fromJS({}));
	const allIds = p.getIn(['issues', 'result'], fromJS([]));
	return state.update('byId', () => issues).update('allIds', () => allIds);
}

function updateCommentsIds(state, payload) {
	const p = fromJS(payload);
	const g = p.getIn(['comments', 'entities', 'comments'], fromJS({})).valueSeq().map(comment => comment.get('id'));
	return state.updateIn(['byId', payload.issueId.toString(), 'commentsIds'], () => g);
}

function mergeIssue(state, payload) {
	const p = fromJS(payload);
	return state.updateIn(['byId', p.get('issueId').toString()], () => p.get('item'))
		.update('allIds', _allIds => _allIds.merge(fromJS([parseInt(p.get('issueId'))])));
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