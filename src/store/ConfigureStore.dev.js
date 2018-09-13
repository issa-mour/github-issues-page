import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import rootReducer from '../reducers/index';

const configureStore = preloadedState => {
	const middlewares = [thunk];
	const middlewareEnhancer = applyMiddleware(...middlewares);
	const enhancers = [middlewareEnhancer];
	const composedEnhancers = composeWithDevTools(...enhancers);
	const store = createStore(
		rootReducer,
		preloadedState,
		composedEnhancers
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;