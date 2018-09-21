import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewIssue from '../../components/issue/NewIssue';
import { createIssue , resetRedirect } from '../../actions/index';
import { getRedirect } from '../../selectors/UiState';
import {  Redirect } from 'react-router-dom';

function mapStateToProps(state) {
	return {
		redirect: getRedirect(state)
	};
}

class NewIssueContainer extends Component {
	componentWillUnmount() {
		this.props.resetRedirect();
	}
	
	render(){
		const { createIssue, redirect, match } = this.props;
		const { org, repo } = match.params;
		if(redirect){
			return <Redirect to={`/${org}/${repo}`} />;
		}
		return (
			<NewIssue onSubmit={createIssue} initialValues={{
				body: `### Steps to reproduce

		(Guidelines for creating a bug report are [available
		here](http://edgeguides.rubyonrails.org/contributing_to_ruby_on_rails.html#creating-a-bug-report))
		
		### Expected behavior
		Tell us what should happen
		
		### Actual behavior
		Tell us what happens instead
		
		### System configuration
		**Rails version**:
		
		**Ruby version**:
		`}} />
		);
	}
}

export default connect(
	mapStateToProps,
	{ createIssue, resetRedirect })(NewIssueContainer);