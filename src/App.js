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
		setRecords([...records, newRecord]);
		localStorage.setItem("records", JSON.stringify(records));
	};

	const editRecord = (id) => {
		const recordToEdit = records.find((item) => item.id === id);
		if (recordToEdit) {
			setCurrentRecord(recordToEdit);
		}
	}

	const updateRecord = (id, title, password) => {
		const newRecord = {
			id: Math.random().toString(),
			title,
			password,
		};
		setRecords([...records, newRecord]);
		localStorage.setItem("records", JSON.stringify(records));
	};

	const deleteRecord = (id) => {

	}
	return (
		<>
			<Add onAddRecord={addRecord} currentRecord = {currentRecord}/>
			<List records={records} onEdit={editRecord} onDelete={deleteRecord}/>
		</>
	);
}

export default App;
