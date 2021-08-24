import React, { Component } from 'react';
class Form extends Component {
	initialState = {
			__v: '',
			_id: '',
			data: {
					name: '',
					email: '',
					age: '',
			},
	}
	state = this.initialState;

	handleChange = event => {
			const { name, value } = event.target;

			this.setState({
					data: {
							[name] : value,
					}
					// [data]: {
					//     [name] : value,
					// }
			});
	}

	submitForm = async (event) => {
			event.preventDefault();
			this.props.handleSubmit(this.state);
			this.setState(this.initialState);

			const data = {
					data: {
							name: this.state.data.name,
							email: this.state.data.email,
							age: this.state.data.age,
					}
			};

			await fetch('http://178.128.196.163:3000/api/records', {
					method: 'PUT',
					headers: {
							'Accept': 'application/json',
							'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
			})
					.then(() => {console.log(data)});
	}

	render() {
			const {name, email, age} = this.state;

			return(
					<form>
							<label htmlFor='name'>Name</label>
							<input
									type='text'
									name='name'
									id='name'
									value={name}
									onChange={this.handleChange} />
							<label htmlFor='email'>Email</label>
							<input
									type='text'
									name='email'
									id='email'
									value={email}
									onChange={this.handleChange} />
							<label htmlFor='age'>Age</label>
							<input
									type='text'
									name='age'
									id='age'
									value={age}
									onChange={this.handleChange} />
							<input type='button' value='Submit' onClick={this.submitForm} />
					</form>
			)
	}
}
export default Form;