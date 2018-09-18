import { combineReducers } from 'redux-immutable';

import comments from './entities/Comments';
import issues from './entities/Issues';
import appState from './appstate/index';

const entities = combineReducers({
	issues, comments
});

export default combineReducers({
	entities, appState
});