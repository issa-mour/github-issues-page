import { fromJS } from 'immutable';

import { GET_ISSUES_SUCCESS } from '../../actions/index';
const INITIAL_STATE = fromJS({ issues: [] });


export default function (state = INITIAL_STATE, {type, payload}) {
	switch (type) {
		case GET_ISSUES_SUCCESS:
			return state.updateIn(['issues'], () => fromJS(payload.items));
		default:
			return state;
	}
}