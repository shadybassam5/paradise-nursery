import React from 'react';
import { useNavigate } from 'react-router-dom';

// صور نباتات حقيقية محولة لأكواد Base64 (مضمونة تظهر فوراً)
const plantImages = {
    snake: 'https://images.unsplash.com/photo-1599591037488-dc784762bc11?auto=format&fit=crop&q=80&w=400',
    spider: 'https://images.unsplash.com/photo-1598935888738-2049e9432822?auto=format&fit=crop&q=80&w=400',
    aloe: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&q=80&w=400',
    lavender: 'https://images.unsplash.com/photo-1520302630591-fd1c66ed11a3?auto=format&fit=crop&q=80&w=400',
    lily: 'https://images.unsplash.com/photo-1597055181300-e3633a207519?auto=format&fit=crop&q=80&w=400',
    money: 'https://images.unsplash.com/photo-1620190892015-8f4383416b9b?auto=format&fit=crop&q=80&w=400'
};

const categories = [
    {
        name: "Air Purifying 🌿",
        plants: [
            { id: 1, name: 'Snake Plant', price: 15, image: plantImages.snake },
            { id: 2, name: 'Spider Plant', price: 12, image: plantImages.spider }
        ]
    },
    {
        name: "Aromatic & Medicinal 🌵",
        plants: [
            { id: 3, name: 'Aloe Vera', price: 10, image: plantImages.aloe },
            { id: 4, name: 'Lavender', price: 18, image: plantImages.lavender }
        ]
    },
    {
        name: "Low Maintenance 🌱",
        plants: [
            { id: 5, name: 'Peace Lily', price: 20, image: plantImages.lily },
            { id: 6, name: 'Money Tree', price: 25, image: plantImages.money }
        ]
    }
];

function ProductList({ addToCart, totalItems }) {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <nav style={{ 
                display: 'flex', justifyContent: 'space-between', padding: '15px 30px',
                backgroundColor: '#2e7d32', color: 'white', borderRadius: '10px', marginBottom: '30px'
            }}>
                <h2 style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Paradise Nursery 🌿</h2>
                <div onClick={() => navigate('/cart')} style={{ cursor: 'pointer', fontSize: '20px' }}>
                    🛒 Cart: <span style={{ fontWeight: 'bold' }}>{totalItems}</span>
                </div>
            </nav>

            {categories.map(category => (
                <div key={category.name} style={{ marginBottom: '50px' }}>
                    <h2 style={{ textAlign: 'center', color: '#2e7d32' }}>{category.name}</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px' }}>
                        {category.plants.map(plant => (
                            <div key={plant.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '15px', textAlign: 'center', background: 'white', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                                <img 
                                    src={plant.image} 
                                    alt={plant.name} 
                                    style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }}
                                    onError={(e) => { e.target.src = 'https://via.placeholder.com/200?text=Plant+Image'; }} 
                                />
                                <h3 style={{ margin: '15px 0' }}>{plant.name}</h3>
                                <p style={{ fontWeight: 'bold', color: '#666' }}>${plant.price}</p>
                                <button 
                                    onClick={() => addToCart(plant)}
                                    style={{ backgroundColor: '#4caf50', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', width: '100%', fontWeight: 'bold' }}
                                >
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ProductList;