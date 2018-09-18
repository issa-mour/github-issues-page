function getIssuesEntities(state) {
	return state.getIn(['entities', 'issues', 'byId']);
}

function getIssue(state, { match }) {
	return state.getIn(['entities', 'issues', 'byId', match.params.issueId.toString()]);
}

export { getIssuesEntities, getIssue };