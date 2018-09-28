import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import asyncComponent from './components/AsyncComponent';
import ScrollToTop from './components/ScrollToTop';
import IntlRelativeFormatContext, { intlRelativeFormat } from './IntlRelativeFormatContext';

import './App.css';

const IssuesPage = asyncComponent(() => import(/* webpackChunkName: "issues_list" */'./pages/issues/IssuesPage'));
const IssuePage = asyncComponent(() => import(/* webpackChunkName: "issue" */'./pages/issue/IssuePage')); 
const NewIssueContainer = asyncComponent(() => import(/* webpackChunkName: "new_issue" */'./containers/issue/NewIssueContainer'));

class App extends Component {
	render() {
		return (
			<Router>
				<ScrollToTop>
					<IntlRelativeFormatContext.Provider value={intlRelativeFormat}>
						<Switch>
							<Redirect from="/" exact to="/github-issues-page/rails/rails" />
							<Route path="/github-issues-page/:org/:repo" exact component={IssuesPage} />
							<Route path="/github-issues-page/:org/:repo/new" component={NewIssueContainer} />
							<Route path="/github-issues-page/:org/:repo/:issueId" exact component={IssuePage} />
						</Switch>
					</IntlRelativeFormatContext.Provider>
				</ScrollToTop>
			</Router>
		);
	}
}

export default App;
