import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import './IssuesList.css';

IssuesList.propTypes = {
	children: PropTypes.node.isRequired,
	addLink: PropTypes.string.isRequired
};

function IssuesList({ className, children, addLink }) {
	const cls = classNames('issues_list', className);
	return (
		<React.Fragment>
			<div className="issues_creation"><Link to={addLink} className="issues_creation_button">New issue</Link></div>
			<div className={cls}>{children}</div>
		</React.Fragment>
	);
}

export default IssuesList;