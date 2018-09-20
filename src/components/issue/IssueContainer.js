import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getIssue } from '../../actions/index';
import Issue from './Issue';
import { getIssue as getIssueSelector } from '../../selectors/Issues';

function mapStateToProps(state, props) {
	return {
		issue: getIssueSelector(state, props)
	};
}

class IssueContainer extends Component {
	componentDidMount() {
		const { issue, match, getIssue } = this.props;
		if (issue === undefined) {
			getIssue(match.params.org, match.params.repo, match.params.issueId);
		}
	}

	render() {
		const { issue } = this.props;
		
		if(issue === undefined){
			return null;
		}

		return (
			<Issue login={issue.get('user').get('login')} body={issue.get('body')} />
		);
	}
}

export default connect(
	mapStateToProps,
	{ getIssue }
)(IssueContainer);