import React from 'react';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form/immutable';
import empty from 'is-empty';

import './NewIssue.css';

NewIssue.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};

const required = value => !empty(value) && !empty(value.trim()) ? undefined : 'Required';

function NewIssue({  handleSubmit, pristine, submitting, invalid }) {
	return <form onSubmit={handleSubmit}>
		<Field
			name="title"
			component="input"
			type="text"
			placeholder="Title"
			className="new_issue_title"
			validate={required}
		/>
		<Field name="body" component="textarea" className="new_issue_body" validate={required}/>
		<div className="issues_creation" style={{ width: '700px' }}><button disabled={pristine || submitting || invalid} type="submit" className="issues_creation_button">Submit new issue</button></div>
	</form>;
}

export default reduxForm({
	form: 'NewIssue'
})(NewIssue);