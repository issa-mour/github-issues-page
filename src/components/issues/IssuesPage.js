import React from 'react';

import IssuesListContainer from './IssuesListContainer';
import PagingContainer from '../paging/PagingContainer';

function IssuesPage(props) {
	return (
		<React.Fragment>
			<IssuesListContainer {...props} className="app_list" /> 
			<PagingContainer {...props} />            
		</React.Fragment>
	);
}

export default IssuesPage;