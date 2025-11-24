const EmployeeControl = ({ employees }) => {
  return (
    <div className="section-content">
      <div className="section-header">
        <h2>Employee Control</h2>
        <button className="btn-primary">Add Employee</button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Role</th>
              <th>Email</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {employees.map((e) => (
              <tr key={e.id}>
                <td>{e.name}</td>
                <td>{e.role}</td>
                <td>{e.email}</td>
                <td>
                  <span className={`status ${e.status.toLowerCase()}`}>{e.status}</span>
                </td>
                <td>
                  <button className="btn-action">Edit</button>
                  <button className="btn-action btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default EmployeeControl;
