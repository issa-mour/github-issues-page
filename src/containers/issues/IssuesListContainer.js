import React from 'react';
import { connect } from 'react-redux';

import IssueItem from '../../components/issues/IssueItem';
import { getIssuesEntities } from '../../selectors/Issues';
import IssuesList from '../../components/issues/IssuesList';

function mapStateToProps(state) {
	return {
		issues: getIssuesEntities(state)
	};
}

export function IssuesListContainer (props){
	const { issues , className, location } = props;
	const pathname = location.pathname.endsWith('/') ? location.pathname : `${location.pathname}/`;
	const issueItems = issues.valueSeq().map( issue => (<IssueItem
		key={issue.get('number')}
		className="issues_list_item"
		status={issue.get('state')}
		title={issue.get('title')}
		id={issue.get('number')}
		openTime={'9 hours ago'}
		openBy={issue.get('user').get('login')}
		commentsNumber={issue.get('comments')}
		link={`${pathname}${issue.get('number')}`} />));
		
	return (
		<IssuesList className={className}  addLink={`${pathname}new`}>
			{issueItems}
		</IssuesList>
	);
}

export default connect(
	mapStateToProps
)(IssuesListContainer);