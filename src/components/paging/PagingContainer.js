import React, { Component } from 'react';
import { connect } from 'react-redux';
import parse from 'url-parse';
import empty from 'is-empty';
import { getIssues } from '../../actions/index';
import ReactPaginate from 'react-paginate';
import { getIssuesPaging } from '../../selectors/IssuesPaging';
import './PagingContainer.css';

function mapStateToProps(state) {
	return {
		issuesPaging: getIssuesPaging(state)
	};
}

export class PagingContainer extends Component {
	constructor(props) {
		super(props);
		this.goToPage = this.goToPage.bind(this);
	}

	goToPage(page) {
		const { history, match } = this.props;
		const { selected } = page;
		history.push(`/${match.params.org}/${match.params.repo}/?page=${selected + 1}`);
	}

	componentDidMount() {
		const { getIssues, match } = this.props;
		const currPage = parse(window.location, true).query;
		if (!empty(currPage)) {
			getIssues(match.params.org, match.params.repo, parseInt(currPage.page));
		} else {
			getIssues(match.params.org, match.params.repo);
		}
	}

	componentDidUpdate(prevProps) {
		const { getIssues, match } = this.props;
		const prevPage = parse(prevProps.location.search, true).query;
		const currPage = parse(window.location, true).query;
		if (prevPage.page !== currPage.page) {
			getIssues(match.params.org, match.params.repo, parseInt(currPage.page));
		}
	}

	render() {
		const { issuesPaging } = this.props;
		const pageCount = issuesPaging.get('totalCount') / issuesPaging.get('per_page');
		if (pageCount <= 1) {
			return null;
		}
		return (
			<ReactPaginate previousLabel={'Previous'}
				nextLabel={'Next'}
				forcePage={issuesPaging.get('page') - 1}
				breakLabel={'...'}
				breakClassName={'pagination_page break_me'}
				pageCount={pageCount}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={this.goToPage}
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
	{ getIssues }
)(PagingContainer);