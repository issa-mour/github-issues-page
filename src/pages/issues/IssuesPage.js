import React from 'react';

import IssuesListContainer from '../../containers/issues/IssuesListContainer';
import PagingContainer from '../../containers/paging/PagingContainer';

function IssuesPage(props) {
	return (
		<React.Fragment>
			<IssuesListContainer {...props} className="app_list" /> 
			<PagingContainer {...props} />            
		</React.Fragment>
	);
}

export default IssuesPage;