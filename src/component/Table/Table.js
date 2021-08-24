import React, { useState } from 'react';

const TableHeader = () => {
	return (
			<thead>
			<tr>
					<th>Name</th>
					<th>Email</th>
					<th>Age</th>
					<th>Remove</th>
			</tr>
			</thead>
	)
}

const TableBody = (props) => {
	const [edit, setEdit] = useState(false)
	const saveEditItem = () => {
		setEdit(false);
		props.editPerson()
			}

	const rows = props.characterData.map((row, _id) => {
					return (
							<tr key={row._id}>
									<td>{row._id}</td>
									<td>{row._id}</td>
									<td>{row._id}</td>
									<td>
											<button onClick={() => props.removeCharacter(row._id)}>Delete</button> 
											{edit ? (
        <button onClick={saveEditItem}>Сохранить</button>
      ) : (
        <button onClick={() => setEdit(true)}>Редактировать</button>
      )}

									</td>
							</tr>
					)
			})
			return <tbody>{rows}</tbody>

}

const Table = (props) => {
	const {characterData, removeCharacter} = props;

	return (
			<table>
					<TableHeader />
					<TableBody characterData={characterData} removeCharacter={removeCharacter} />
			</table>
	)
}
export default Table;