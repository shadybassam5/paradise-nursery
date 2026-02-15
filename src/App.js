import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ProductList from './ProductList';
import CartPage from './CartPage';

function App() {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find(item => item.name === product.name);
            if (existingItem) {
                return prevCart.map(item =>
                    item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/products" element={<ProductList addToCart={addToCart} totalItems={totalItems} />} />
                <Route path="/cart" element={<CartPage cart={cart} setCart={setCart} totalItems={totalItems} />} />
            </Routes>
        </Router>
    );
}

export default App;
