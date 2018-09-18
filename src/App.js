import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import IssuesPage from './components/issues/IssuesPage';
import Issue from './components/issue/Issue';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Switch>
						<Redirect from="/" exact to="/rails/rails" />
					</Switch>
					<Route path="/:org/:repo" exact component={IssuesPage} />
					<Route path="/:org/:repo/:issueId" component={Issue} />
				</React.Fragment>
			</Router>
		);
	}
}

export default App;
