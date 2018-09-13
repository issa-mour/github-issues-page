import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { getIssuesEntities } from '../../selectors/Issues';
import IssuesList from './IssuesList';

function mapStateToProps(state) {
	return {
		issues: getIssuesEntities(state)
	};
}

export class IssuesListContainer extends PureComponent {
	render() {
		const { issues , className } = this.props;
		return (
			<IssuesList issues={issues.toJS()} className={className} />
		);
	}
}

export default connect(
	mapStateToProps
)(IssuesListContainer);