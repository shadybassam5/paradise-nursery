import React from 'react';

const CartItem = ({ item, onIncrement, onDecrement, onRemove }) => {
  return (
    <div className="cart-item">
      <img className="cart-item-image" src={item.image} alt={item.name} />
      <div className="cart-item-details">
        <div className="cart-item-name">{item.name}</div>
        <div className="cart-item-cost">${item.price}</div>
        <div className="cart-item-quantity">
          <button className="cart-item-button" onClick={onDecrement}>-</button>
          <span className="cart-item-quantity-value">{item.quantity}</span>
          <button className="cart-item-button" onClick={onIncrement}>+</button>
        </div>
        <div className="cart-item-total">Total: ${item.price * item.quantity}</div>
        <button className="cart-item-delete" onClick={onRemove}>Delete</button>
      </div>
    </div>
  );
};

export default CartItem;