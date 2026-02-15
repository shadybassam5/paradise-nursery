import React from 'react';
import { useNavigate } from 'react-router-dom';

const plants = [
    { id: 1, name: 'Snake Plant', price: 15, image: '🌿' },
    { id: 2, name: 'Aloe Vera', price: 10, image: '🌵' },
    { id: 3, name: 'Peace Lily', price: 20, image: '🌸' },
    { id: 4, name: 'Spider Plant', price: 12, image: '🌱' },
    { id: 5, name: 'Money Tree', price: 25, image: '🌳' },
    { id: 6, name: 'Ficus', price: 18, image: '🍃' }
];

function ProductList({ addToCart, totalItems }) {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <h2>Our Plants</h2>
                <button onClick={() => navigate('/cart')} style={{ fontSize: '20px', cursor: 'pointer' }}>
                    🛒 Cart ({totalItems})
                </button>
            </nav>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
                {plants.map(plant => (
                    <div key={plant.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '10px', textAlign: 'center' }}>
                        <div style={{ fontSize: '50px' }}>{plant.image}</div>
                        <h3>{plant.name}</h3>
                        <p>${plant.price}</p>
                        <button 
                            onClick={() => addToCart(plant)}
                            style={{ backgroundColor: '#2e7d32', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
                        >
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;