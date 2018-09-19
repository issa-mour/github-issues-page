import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

import './Issue.css';

Issue.propTypes = {
	className: PropTypes.string,
	login: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired
};

function Issue({ className, login, body }) {
	const cls = classNames('issue', className);
	return <div className={cls}>
		<div className="issue_header">
			<a className="issue_header_login" href={`/${login}`}>{login}</a> commented 4 days ago
		</div>
		<ReactMarkdown className="issue_header_body" source={body} />
	</div>;
}

export default Issue;