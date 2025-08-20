

function List(props) {
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <input type="text" className="form-control" placeholder="Search records..."/>
                </div>
                <div>
                    <span className="fw-bold">Total Records: </span><span id="totalRecords">3</span>
                </div>
            </div>

            <div className="card shadow-sm">
                <div className="card-body">
                    <table className="table table-bordered table-hover align-middle">
                        <thead className="table-dark">
                            <tr>
                                <th>Title</th>
                                <th>Password</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.records.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>{item.password}</td>
                                    <td>
                                        <button className="btn btn-sm btn-warning" onClick={() => props.onEdit(item.id)}>Edit</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => props.onDelete(item.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}

export default List;