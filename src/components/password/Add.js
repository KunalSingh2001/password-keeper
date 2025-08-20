import React, {useEffect, useState} from 'react';

function Add(props) {
    const [editId, setEditId] = useState("");
    const [title, setTitle] = useState("");
    const [password, setPassword] = useState("");
    
    useEffect(()=> {
        if (props.currentRecord) {
            setEditId(props.currentRecord.id)
            setTitle(props.currentRecord.title)
            setPassword(props.currentRecord.password)
        }else {
            setEditId("");
            setTitle("");
            setPassword("");
        }
    }, [props.currentRecord])

    function titleChangeHandler(event) {
        setTitle(event.target.value)
    }

    function passwordChangeHandler(event) {
        setPassword(event.target.value)
    }


    function submitForm (event) {
        event.preventDefault();
        if (title != ""&& password.length == 6 ) {
            if (editId) {
                props.onEditRecord(editId, title, password);
                setEditId("");
            }else {
                props.onAddRecord(title, password);
            }
            setTitle("");
            setPassword("");
        }
    }

    

    return (
        <>
        <div className="card shadow-sm mb-4">
            <div className="card-body">
                <form className="row g-3" onSubmit={submitForm}>
                    <input type="hidden" value={editId}/>
                    <div className="col-md-5">
                        <label className="form-label">Title</label>
                        <input type="text" className="form-control" onChange={titleChangeHandler} placeholder="Enter title" value={title}/>
                    </div>
                    <div className="col-md-5">
                        <label className="form-label">Password</label>
                        <input type="password" className="form-control" onChange={passwordChangeHandler} placeholder="Enter password" value={password}/>
                    </div>
                    <div className="col-md-2 d-flex align-items-end">
                        <button type="submit" className="btn btn-primary w-100">Add</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default Add;