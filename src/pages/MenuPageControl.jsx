const MenuPageControl = ({ menuItems, addToCart }) => {
  return (
    <div className="section-content">
      <div className="section-header">
        <h2>Menu Page Control</h2>
        <button className="btn-primary">Add Menu Item</button>
      </div>

      <div className="menu-grid">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <div className="menu-card-header">
              <h3>{item.name}</h3>
              <span className={`status ${item.status === "Available" ? "active" : "inactive"}`}>
                {item.status}
              </span>
            </div>

            <div className="menu-card-body">
              <p>Category: {item.category}</p>
              <p className="price">${item.price}</p>
            </div>

            <div className="menu-card-actions">
              <button className="btn-action">Edit</button>
              <button className="btn-action btn-danger">Delete</button>

              <button
                className="btn-primary"
                onClick={() => addToCart(item)}
                disabled={item.status !== "Available"}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MenuPageControl;
