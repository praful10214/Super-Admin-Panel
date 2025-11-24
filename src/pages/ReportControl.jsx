const ReportControl = ({ reports }) => {
  return (
    <div className="section-content">
      <div className="section-header">
        <h2>Report Control</h2>
        <button className="btn-primary">Generate Report</button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Type</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {reports.map((r) => (
              <tr key={r.id}>
                <td>{r.name}</td>
                <td>{r.date}</td>
                <td>{r.type}</td>
                <td>
                  <button className="btn-action">View</button>
                  <button className="btn-action">Download</button>
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

export default ReportControl;
