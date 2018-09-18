import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import './IssuesList.css';

IssuesList.propTypes = {
	children: PropTypes.node.isRequired
};

function IssuesList({ className, children }) {
	const cls = classNames('issues_list', className);
	return (<div className={cls}>{children}</div>);
}

export default IssuesList;