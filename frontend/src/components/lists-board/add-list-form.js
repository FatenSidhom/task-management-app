import React, { useState } from 'react'

const AddListForm = props => {
	const initialFormState = { id: null, name: ''}
	const [ list, setList ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target
		setList({ ...list, id: 3, [name]: value })
	}

	return (
		<form className="addList"
			onSubmit={event => {
				event.preventDefault()
				if (!list.name) return

			//	console.log(list);

				props.addList(list)
				setList(initialFormState)
			
			}}
		>
			<input type="text" name="name"  placeholder='enter list name' value={list.name} onChange={handleInputChange} className="form__input" />
			<button> Add List</button>
		</form>
	)
}
export default AddListForm
