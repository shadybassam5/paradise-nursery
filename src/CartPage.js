import React from 'react';
import { useNavigate } from 'react-router-dom';

function CartPage({ cart, setCart, totalItems }) {
    const navigate = useNavigate();
    const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0);

    const updateQuantity = (name, delta) => {
        setCart(prev => prev.map(item => 
            item.name === name ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
        ).filter(item => item.quantity > 0));
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Shopping Cart 🛒</h2>
            <h3>Total Items: {totalItems} | Total Price: ${totalPrice}</h3>
            <button onClick={() => navigate('/products')}>Continue Shopping</button>
            <div style={{ marginTop: '20px' }}>
                {cart.map(item => (
                    <div key={item.name} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #eee', padding: '10px' }}>
                        <span>{item.name} (${item.price})</span>
                        <div>
                            <button onClick={() => updateQuantity(item.name, -1)}>-</button>
                            <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                            <button onClick={() => updateQuantity(item.name, 1)}>+</button>
                            <button onClick={() => updateQuantity(item.name, -item.quantity)} style={{ marginLeft: '10px', color: 'red' }}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={() => alert('Coming Soon!')} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'green', color: 'white' }}>Checkout</button>
        </div>
    );
}

export default CartPage;