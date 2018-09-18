import { fromJS } from 'immutable';

import { GET_COMMENTS_SUCCESS } from '../../actions';
const INITIAL_STATE = fromJS({ byId: {} });

function mergeComments(state, payload) {
	const p = fromJS(payload);
	const comments = p.getIn(['comments', 'entities', 'comments'], fromJS({}));
	return state.mergeDeep({ 'byId': comments });
}

export default function (state = INITIAL_STATE, { type, payload }) {
	switch (type) {
		case GET_COMMENTS_SUCCESS:
			return mergeComments(state, payload);
		default:
			return state;
	}
}