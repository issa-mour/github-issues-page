import React from 'react';
import PropTypes from 'prop-types';

import './IssueCommentIcon.css';

function IssueCommentIcon({ commentsNumber }) {
	const issueCommentIcon = commentsNumber > 0 ? (<div className="issue_comment_icon">
		<svg className="octicon octicon_comment" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fillRule="evenodd" d="M14 1H2c-.55 0-1 .45-1 1v8c0 .55.45 1 1 1h2v3.5L7.5 11H14c.55 0 1-.45 1-1V2c0-.55-.45-1-1-1zm0 9H7l-2 2v-2H2V2h12v8z"></path></svg>
		<span className="text_small text_bold issue_item_comments">{commentsNumber}</span>
	</div>): null;
	return issueCommentIcon;
}

PropTypes.propTypes = {
	commentsNumber: PropTypes.number
};

export default IssueCommentIcon;