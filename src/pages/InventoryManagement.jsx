const InventoryManagement = ({ inventory }) => {
  return (
    <div className="section-content">
      <div className="section-header">
        <h2>Inventory Management</h2>
        <button className="btn-primary">Add Item</button>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Item</th>
              <th>Category</th>
              <th>Qty</th>
              <th>Unit</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {inventory.map((item) => (
              <tr key={item.id} className={item.quantity <= item.lowStock ? "low-stock" : ""}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.quantity}</td>
                <td>{item.unit}</td>
                <td>
                  <span className={`status ${item.quantity <= item.lowStock ? "warning" : "active"}`}>
                    {item.quantity <= item.lowStock ? "Low Stock" : "In Stock"}
                  </span>
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

export default InventoryManagement;
