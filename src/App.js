import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IssuesListContainer from './components/issues/IssuesListContainer';
import PagingContainer from './components/paging/PagingContainer';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<IssuesListContainer className="app_list" />
					<Route component={PagingContainer}/>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
