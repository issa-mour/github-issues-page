function getIssuesEntities(state) {
	return state.getIn(['entities', 'issues']);
}

export { getIssuesEntities };