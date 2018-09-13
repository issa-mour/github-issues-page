import { fromJS } from 'immutable';

import { GET_ISSUES_SUCCESS } from '../../actions/index';
const INITIAL_STATE = fromJS({ page: 1, per_page: 25, totalCount: 0 });


export default function (state = INITIAL_STATE, {type, payload}) {
	switch (type) {
		case GET_ISSUES_SUCCESS:
			return state.set('totalCount', payload.totalCount);
		default:
			return state;
	}
}