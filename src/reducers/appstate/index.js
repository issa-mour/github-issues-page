import { combineReducers } from 'redux-immutable';

import issuesPaging from './IssuesPaging';

const appState = combineReducers({
	issuesPaging
});

export default appState;