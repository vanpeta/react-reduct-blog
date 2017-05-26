import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
	
	renderField(field) {
		return (
			<div className="form-gropu">
				<label>{field.label}</label>
				<input className="form-control"
					type="text"
					{...field.input}
				/>
			</div>
		);
	}

	render() {
		return (
			<form>
				<Field
					label="Post Title"
					name="title"
					component={this.renderField}
				/>
				<Field
					label="Caregories"
					name="categories"
					component={this.renderField}
				/>
				<Field
					label="Post Content"
					name="content"
					component={this.renderField}
				/>
			</form>
		);
	}
}

function validate(values) {
	const errors = {};
	if (!values.title || values.title.length < 3) {
		errors.title = "Title must be at least 3 characters long"
	};
	if (!values.categories) {
		errors.categories = "Enter some categories"
	};
	if (!values.content) {
		errors.content = "Enter some content"
	}
	return errors;
};

export default reduxForm({
	//validate: validate
	validate,
	form: 'PostsNewForm'
 })(PostsNew);