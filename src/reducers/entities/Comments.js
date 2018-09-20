import { fromJS } from 'immutable';

import { GET_COMMENTS_SUCCESS } from '../../actions';
const INITIAL_STATE = fromJS({ byId: {}, allIds: [] });

function mergeComments(state, payload) {
	const p = fromJS(payload);
	const comments = p.getIn(['comments', 'entities', 'comments'], fromJS({}));
	const allIds = p.getIn(['comments', 'result'], fromJS([]));
	return state.update('byId', () => comments ).update('allIds', () => allIds);
}

export default function (state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case GET_COMMENTS_SUCCESS:
			return mergeComments(state, payload);
		default:
			return state;
	}
}