import React from 'react';
import PropTypes from 'prop-types';

import Issue from './Issue';
import './IssueCommentsList.css';

IssueCommentsList.propTypes = {
	comments: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		body: PropTypes.string.isRequired,
		user: PropTypes.object.isRequired
	})).isRequired,
};

function IssueCommentsList({ comments }) {
	const issueComments = comments.map(({ id, body, user, createdAt }) => <Issue className="issue_comments_list_item" key={id} body={body} login={user.login} createdAt={createdAt}/>);
	return <React.Fragment>{issueComments}</React.Fragment>;
}

export default IssueCommentsList;