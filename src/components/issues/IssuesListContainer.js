import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIssuesEntities } from '../../selectors/Issues';
import { getIssues } from '../../actions/index';
import IssuesList from './IssuesList';

function mapStateToProps(state) {
	return {
		issues: getIssuesEntities(state)
	};
}

export class IssuesListContainer extends PureComponent {
	componentDidMount() {
		const { getIssues } = this.props;
		getIssues();
	}

	render() {
		const { issues } = this.props;
		return (
			<IssuesList issues={issues.toJS()} />
		);
	}
}

export default connect(
	mapStateToProps,
	{ getIssues }
)(IssuesListContainer);