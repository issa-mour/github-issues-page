function getIssuesPaging(state) {
	return state.getIn(['appState', 'issuesPaging']);
}

export { getIssuesPaging };