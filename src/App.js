import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import IssuesListContainer from './components/issues/IssuesListContainer';
import PagingContainer from './components/paging/PagingContainer';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Redirect from="/" exact to="/rails/rails" />
					</Switch>
					<IssuesListContainer className="app_list" />
					<Route path="/:org/:repo" component={PagingContainer} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
