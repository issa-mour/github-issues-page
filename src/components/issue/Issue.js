import React from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
import classNames from 'classnames';

import IntlRelativeFormatContext from '../../IntlRelativeFormatContext';
import './Issue.css';

Issue.propTypes = {
	className: PropTypes.string,
	login: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
	createdAt: PropTypes.instanceOf(Date).isRequired
};

function Issue({ className, login, body, createdAt }) {
	const cls = classNames('issue', className);
	return <IntlRelativeFormatContext.Consumer>
		{rf => (<div className={cls}>
			<div className="issue_header">
				<a className="issue_header_login" href={`/${login}`}>{login}</a> commented <span title={createdAt}>{rf.format(createdAt)}</span>
			</div>
			<ReactMarkdown className="issue_header_body" source={body} />
		</div>)}
	</IntlRelativeFormatContext.Consumer>;
}

export default Issue;