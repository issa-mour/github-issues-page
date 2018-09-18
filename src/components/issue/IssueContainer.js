import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIssueComments, getIssue } from '../../actions/index';
import Issue from './Issue';
import { getIssue as getIssueSelector } from '../../selectors/Issues';

function mapStateToProps(state, props) {
	return {
		issue: getIssueSelector(state, props)
	};
}

class IssueContainer extends PureComponent {
	componentDidMount() {
		const { issue, match, getIssue, getIssueComments } = this.props;
		if (issue !== undefined) {
			getIssueComments(match.params.org, match.params.repo, issue.get('id'));
		} else {
			getIssue(match.params.org, match.params.repo, match.params.issueId);
		}
	}

	componentDidUpdate(prevProps) {
		const { issue, match, getIssueComments } = this.props;
		if (prevProps.issue === undefined && issue !== undefined) {
			getIssueComments(match.params.org, match.params.repo, issue.get('id'));
		}
	}

	render() {
		const { issue } = this.props;
		console.log(issue);
		return (
			<div>
				<Issue />
			</div>
		);
	}
}

export default connect(
	mapStateToProps,
	{ getIssueComments, getIssue }
)(IssueContainer);