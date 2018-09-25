import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import IssuesPage from './pages/issues/IssuesPage';
import IssuePage from './pages/issue/IssuePage';
import ScrollToTop from './components/ScrollToTop';
import NewIssueContainer from './containers/issue/NewIssueContainer';
import IntlRelativeFormatContext, { intlRelativeFormat } from './IntlRelativeFormatContext';

import './App.css';

class App extends Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<IntlRelativeFormatContext.Provider value={intlRelativeFormat}>
						<Switch>
							<Redirect from="/" exact to="/rails/rails" />
							<Route path="/:org/:repo" exact component={IssuesPage} />
							<Route path="/:org/:repo/new" component={NewIssueContainer} />
							<Route path="/:org/:repo/:issueId" exact component={IssuePage} />
						</Switch>
					</IntlRelativeFormatContext.Provider>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
