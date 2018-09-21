import { CREATE_NEW_ISSUE, RESET_REDIRECT } from '../../actions';


export default function (state = false, {type}) {
	switch (type) {
		case CREATE_NEW_ISSUE:
			return true;
		case RESET_REDIRECT:
			return false;		
		default:
			return state;
	}
}