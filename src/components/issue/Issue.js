import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';
import IntlRelativeFormat from 'intl-relativeformat';

import './Issue.css';

Issue.propTypes = {
	className: PropTypes.string,
	login: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.string.isRequired
};

const rf = new IntlRelativeFormat('en-US');

function Issue({ className, login, body, createdAt }) {
	const cls = classNames('issue', className);
	const date = new Date(createdAt);
	return <div className={cls}>
		<div className="issue_header">
			<a className="issue_header_login" href={`/${login}`}>{login}</a> commented <span title={date}>{rf.format(date)}</span>
		</div>
		<ReactMarkdown className="issue_header_body" source={body} />
	</div>;
}

export default Issue;