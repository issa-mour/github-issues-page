import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';

import './NewIssue.css';

NewIssue.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};
function NewIssue({  handleSubmit, pristine, reset, submitting }) {
	return <form onSubmit={handleSubmit}>
		<Field
			name="title"
			component="input"
			type="text"
			placeholder="Title"
			className="new_issue_title"
		/>
		<Field name="body" component="textarea" className="new_issue_body" />
		<div className="issues_creation" style={{ width: '700px' }}><button disabled={pristine || submitting} type="submit" className="issues_creation_button">Submit new issue</button></div>
	</form>;
}

export default reduxForm({
	form: 'NewIssue'
})(NewIssue);