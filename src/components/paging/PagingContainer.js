import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import ReactPaginate from 'react-paginate';
import { getIssuesPaging } from '../../selectors/IssuesPaging';
import './PagingContainer.css';

function mapStateToProps(state) {
	return {
		issuesPaging: getIssuesPaging(state)
	};
}

export class PagingContainer extends PureComponent {
	render() {
		const { issuesPaging } = this.props;
		const pageCount = issuesPaging.get('totalCount')/ issuesPaging.get('per_page');
		if(pageCount <= 1){
			return null;
		}
		return (
			<ReactPaginate previousLabel={'Previous'}
				nextLabel={'Next'}
				forcePage={issuesPaging.get('page')}
				breakLabel={'...'}
				breakClassName={'pagination_page break_me'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={(this.handlePageClick)}
				containerClassName={'pagination'}
				pageClassName={'pagination_page'}
				previousClassName={'pagination_page'}
				activeClassName={'active'} 
				nextClassName={'pagination_page next'}
				pageLinkClassName={'pagination_page_link'}
				previousLinkClassName={'pagination_page_link'}
				nextLinkClassName={'pagination_page_link'}
			/>
		);
	}
}

export default connect(
	mapStateToProps,
)(PagingContainer);