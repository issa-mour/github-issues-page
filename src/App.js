import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import IssuesPage from './components/issues/IssuesPage';
import IssuePage from './components/issue/IssuePage';
import ScrollToTop from './components/ScrollToTop';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<Switch>
						<Redirect from="/" exact to="/rails/rails" />
					</Switch>
					<Route path="/:org/:repo" exact component={IssuesPage} />
					<Route path="/:org/:repo/:issueId" component={IssuePage} />
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
