import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
	
	renderField(field) {
		const className = `form-group ${field.meta.touched && field.meta.error ? 'has-danger' : ""}`;

		return (
			<div className={className}>
				<label>{field.label}</label>
				<input className="form-control"
					type="text"
					{...field.input}
				/>
				<div className="text-help">{field.meta.touched ? field.meta.error : ''}</div>
			</div>
		);
	}
	onSubmit(values) {
		this.props.createPost(values);
	}

	render() {
		const { handleSubmit } = this.props;

		return (
			<form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
				<button type="submit" className="btn btn-primary">Submit</button>
				<Link to="/" className="btn btn-danger">Cancel</Link>
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
 })(
 	connect(null, { createPost })(PostsNew)
 );