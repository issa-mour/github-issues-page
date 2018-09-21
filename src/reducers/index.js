import { combineReducers } from 'redux-immutable';
import { reducer as form } from 'redux-form/immutable';

import comments from './entities/Comments';
import issues from './entities/Issues';
import appState from './appstate/index';
import uiState from './uiState/index';

const entities = combineReducers({
	issues, comments
});

export default combineReducers({
	entities, appState, form, uiState
});