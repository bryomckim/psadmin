'use strict';

var React = require('react');

var AuthorForm = React.createClass({
	render: function() {
		return (
			<form>
				<h1>Manage Author</h1>
				<label htmlFor="firstName">First Name</label>
				<input
					type="text"
					name="firstName"
					className="form-control"
					value={this.props.author.firstName}
					onChange={this.props.onChange}
					placeholder="John"
					ref="firstName" />
				<br />
				<label htmlFor="lastName">Last Name</label>
				<input
					type="text"
					name="lastName"
					className="form-control"
					placeholder="Doe"
					ref="lastName"
					value={this.props.author.lastName} 
					onChange={this.props.onChange} />
				<br />

				<input type="submit" value="Save" className="btn btn-default" />
			</form>
		);
	}
});

module.exports = AuthorForm;