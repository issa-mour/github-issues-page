import { combineReducers } from 'redux-immutable';

import issues from './entities/Issues';
import appState from './appstate/index';

export default combineReducers({
	entities: issues,
	appState
});