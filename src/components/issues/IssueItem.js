import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import IssueCommentIcon from './IssueCommentIcon';
import './IssueItem.css';

function IssueItem({ className, status, title, id, openTime, openBy, commentsNumber, link }) {
	const cls = classNames('issue_item', className);
	return (<div className={cls}>
		<svg className={`octicon ${status}`} viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path></svg>
		<div className="issue_item_col2">
			<div className="issue_item_row1">
				<span className="issue_item_title_container"><Link to={link} className="issue_item_title">{title}</Link></span>
				<IssueCommentIcon commentsNumber={commentsNumber} />
			</div>
			<div className="issue_item_row2 text_small text_gray">
				#{id} opened {openTime} by {openBy}
			</div>
		</div>
	</div>);
}

PropTypes.propTypes = {
	className: PropTypes.string,
	status: PropTypes.oneOf(['open', 'close']).isRequired,
	title: PropTypes.string.isRequired,
	id: PropTypes.number.isRequired,
	openTime: PropTypes.string.isRequired,
	openBy: PropTypes.string.isRequired,
	commentsNumber: PropTypes.number,
	link: PropTypes.string.isRequired
};

export default IssueItem;