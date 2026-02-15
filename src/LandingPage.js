import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div style={{ textAlign: 'center', padding: '50px', backgroundColor: '#e8f5e9', height: '100vh' }}>
            <h1>Paradise Nursery 🌿</h1>
            <p>Welcome to the ultimate sanctuary for plant lovers!</p>
            <button 
                onClick={() => navigate('/products')}
                style={{ padding: '15px 30px', fontSize: '18px', cursor: 'pointer', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Get Started
            </button>
        </div>
    );
}

export default LandingPage;