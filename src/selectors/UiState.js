export function getRedirect (state){
    const result = state.getIn(['uiState', 'newIssue']);
    console.log(result);
    return result;
}