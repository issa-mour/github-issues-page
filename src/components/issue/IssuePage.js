import React from 'react';

import IssueContainer from '../../containers/issue/IssueContainer';
import IssueCommentsListContainer from '../../containers/issue/IssueCommentsListContainer';

function IssuePage(props) {
	return (
		<React.Fragment>
			<IssueContainer {...props}/>
			<IssueCommentsListContainer {...props} />
		</React.Fragment>
	);
}

export default IssuePage;