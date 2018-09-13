// import Octokat from 'octokat';
import parse from 'url-parse';
import dotProp from 'dot-prop';

export const GET_ISSUES_REQUEST = 'GET_ISSUES_REQUEST';
export const GET_ISSUES_SUCCESS = 'GET_ISSUES_SUCCESS';
export const GET_ISSUES_FAILURE = 'GET_ISSUES_FAILURE';

export const getIssues = (page = 1) => dispatch =>{
	dispatch({type: GET_ISSUES_REQUEST});
	// const gh = new Octokat();

	const totalCount = getTotalCount('https://api.gethub.com/issues?per_page=25&page=20');
	const items = [{id: 4366, comments: 0, state: 'open', title: `parsing doesn\\'t work ${page}`, user:{login: 'essa.mor'}}, 
		{id: 4365, comments: 2, state: 'open', title: `fetching doesn\\'t work ${page}`, user:{login: 'thomas1'}}
	];
	setTimeout(() => {
		dispatch({type: GET_ISSUES_SUCCESS, payload: {items, totalCount, page}});	
	}, 1000);
	

	// gh.repos('facebook','create-react-app').issues.fetch({per_page:25, state: 'open'})
	// 	.then(result => {
	// 		const { items , lastPageUrl } = result;
	// 		const totalCount = 0; //getTotalCount(lastPageUrl);
	// 		dispatch({type: GET_ISSUES_SUCCESS, payload: {items, totalCount}});
	// 	});
};

const getTotalCount = lastPageUrl => {
	const url = parse(lastPageUrl, true);
	const perPage = dotProp.get(url, 'query.per_page', 0);
	const page = dotProp.get(url, 'query.page', 0);
	return page * perPage;
};