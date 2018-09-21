import { combineReducers } from 'redux-immutable';

import newIssue from './NewIssue';

const uiState = combineReducers({
	newIssue
});

export default uiState;