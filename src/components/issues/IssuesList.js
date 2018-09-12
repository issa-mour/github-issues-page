import React from 'react';
import IssueItem from './IssueItem';

import './IssuesList.css';

function IssuesList() {
	return (<div className="issues_list"><IssueItem
		className="issues_list_item"
		status="Open"
		title="Hosting react site on node.js and redirect all pages to index.html"
		id="4326"
		openTime="9 hours ago"
		openBy="Leejjon"
		commentsNumber="2" />
	<IssueItem
		className="issues_list_item"
		status="Open"
		title="Hosting react site on node.js and redirect all pages to index.html"
		id="4326"
		openTime="9 hours ago"
		openBy="Leejjon"
		commentsNumber="0" /></div>);
}

export default IssuesList;