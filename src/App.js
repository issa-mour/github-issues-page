import React, { Component } from 'react';

import IssuesListContainer from './components/issues/IssuesListContainer';
import PagingContainer from './components/paging/PagingContainer';

import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<IssuesListContainer />
				<PagingContainer />
			</React.Fragment>
		);
	}
}

export default App;
