import { fromJS } from 'immutable';

import { GET_ISSUES_SUCCESS } from '../../actions/index';
const INITIAL_STATE = fromJS({ issues: {} });

function mergeIssues(state, payload) {
	const p = fromJS(payload);
	const issues = p.getIn(['issues','entities', 'issues'], fromJS({}));
	return state.mergeDeep({ 'issues': issues });
}

export default function (state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case GET_ISSUES_SUCCESS:
			return mergeIssues(state, payload);
		default:
			return state;
	}
}