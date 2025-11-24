const CartSidebar = ({ cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);

  return (
    <div className="cart-sidebar">
      <div className="cart-header">
        <h3>Shopping Cart</h3>
        <span className="cart-count">{cart.length} items</span>
      </div>

      <div className="cart-items">
        {cart.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-info">
                <h4>{item.name}</h4>
                <p>${item.price}</p>
              </div>

              <div className="cart-item-controls">
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>

                <button className="btn-remove" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button>
              </div>
            </div>
          ))
        )}
      </div>

      {cart.length > 0 && (
        <div className="cart-footer">
          <div className="cart-total">
            <strong>Total: ${total}</strong>
          </div>
          <button className="btn-checkout">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
