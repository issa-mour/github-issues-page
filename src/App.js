import React, { Component } from 'react';

import IssuesListContainer from './components/issues/IssuesListContainer';
import Paging from './components/paging/Paging';

import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<IssuesListContainer />
				<Paging />
			</React.Fragment>
		);
	}
}

export default App;
