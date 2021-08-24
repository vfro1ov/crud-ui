import React, { Component } from 'react';
import './App.css';
import Form from './component/Form/Form';
import Table from './component/Table/Table';
import axios from 'axios'

class App extends Component {
	state = {
			characters: [],
	}

	componentDidMount() {
			this.getPeople()
	}

	getPeople() {
			fetch("http://178.128.196.163:3000/api/records")
					.then((result) => result.json())
					.then((result) => this.setState({characters: result,}))
					.catch(error => console.log(error));
	}

	handleSubmit = (character) => {
			this.setState({characters: [...this.state.characters, character]})
	}

	removeCharacter = async (_id) => {
			const {characters} = this.state;

			await fetch('http://178.128.196.163:3000/api/records/' + _id, {
					method: 'DELETE',
			})
					.then((result) => {
							return result.json();
					})
					.catch((error) => console.log(error))

			this.setState({
					characters: characters.filter((character, i) => {
							return i != _id;
					})
			})



	}
	async ediPerson(id, name, surname) {
    await axios.post(
      `http://178.128.196.163:3000/api/records/${id}`,
      { data: { name, surname } }
    )
  }


	render() {
			const {characters} = this.state;
			return (
					<div className='container'>
							<Table characterData={characters} removeCharacter={this.removeCharacter} />
							<Form handleSubmit={this.handleSubmit} />
					</div>
			)
	}
}

export default App;