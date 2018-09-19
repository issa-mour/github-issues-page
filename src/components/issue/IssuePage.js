import React from 'react';

import IssueContainer from './IssueContainer';
import IssueCommentsListContainer from './IssueCommentsListContainer';

function IssuePage(props) {
	return (
		<React.Fragment>
			<IssueContainer {...props}/>
			<IssueCommentsListContainer {...props} />
		</React.Fragment>
	);
}

export default IssuePage;