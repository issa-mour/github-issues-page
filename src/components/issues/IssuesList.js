import React from 'react';
import PropTypes from 'prop-types';

import IssueItem from './IssueItem';

import './IssuesList.css';

IssuesList.propTypes = {
	issues: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		comments: PropTypes.number.isRequired,
		state: PropTypes.oneOf(['open', 'close']).isRequired,
		title: PropTypes.string.isRequired,
		user: PropTypes.shape({
		  login: PropTypes.string
		}).isRequired
	}))
};

function IssuesList({ issues }) {
	const issueItems = issues.map(({id, comments, state, title, user }) => (<IssueItem
		key={id}
		className="issues_list_item"
		status={state}
		title={title}
		id={id}
		openTime={'9 hours ago'}
		openBy={user.login}
		commentsNumber={comments} />));
	return (<div className="issues_list">{issueItems}</div>);
}

export default IssuesList;