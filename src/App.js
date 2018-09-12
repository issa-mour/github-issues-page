import React, { Component } from 'react';

import IssuesList from './components/issues/IssuesList';
import Paging from './components/paging/Paging';

import './App.css';

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<IssuesList />
				<Paging />
			</React.Fragment>
		);
	}
}

export default App;
