import React, { useState, useEffect } from 'react';
import './App.css';
import Add from './components/password/Add';
import List from './components/password/List'
function App() {
	const [records, setRecords] = useState([]);
	const [currentRecord, setCurrentRecord] = useState(null);
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem("records")) || [];
		setRecords(data);
	}, [])

	const addRecord = (title, password) => {
		const newRecord = {
			id: Math.random().toString(),
			title,
			password,
		};
		let updatedArray = [...records, newRecord];
		setRecords(updatedArray);
		localStorage.setItem("records", JSON.stringify(updatedArray));
	};

	const editRecord = (id) => {
		const recordToEdit = records.find((item) => item.id === id);
		if (recordToEdit) {
			setCurrentRecord(recordToEdit);
		}
	}

	const updateRecord = (id, title, password) => {
		const records = JSON.parse(localStorage.getItem("records"));
		const updatedArray = records.map((item) => {
			if (item.id == id) {
				return {
					...item,
					title,
					password
				}
			};
			return item;
		});
		localStorage.setItem('records', JSON.stringify(updatedArray));
		setRecords(updatedArray);
	};

	const deleteRecord = (id) => {
		const records = JSON.parse(localStorage.getItem("records"));
		const filteredRecords = records.filter((record) => record.id !== id);
		localStorage.setItem('records', JSON.stringify(filteredRecords));
		setRecords(filteredRecords);
	}


	const searchData = (search) => {
		const records = JSON.parse(localStorage.getItem("records"));
		const filteredRecords = records.filter((record) =>
			record.title.toLowerCase().includes(search.toLowerCase())
		);
		setRecords(filteredRecords);
	} 
	return (
		<>
			<Add onAddRecord={addRecord} onEditRecord={updateRecord} currentRecord = {currentRecord}/>
			<List records={records} onEdit={editRecord} onDelete={deleteRecord} onSearch={searchData}/>
		</>
	);
}

export default App;