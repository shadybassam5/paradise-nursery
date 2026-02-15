import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
    const navigate = useNavigate();

    return (
        <div style={{ 
            // مطلب 1: إضافة صورة خلفية (A background image)
            backgroundImage: "url('https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=2070')", 
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            textAlign: 'center',
            // إضافة طبقة تعتيم لضمان وضوح النص
            backgroundColor: 'rgba(0,0,0,0.5)',
            backgroundBlendMode: 'darken'
        }}>
            {/* مطلب 2: اسم الشركة (The company name) */}
            <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>Paradise Nursery 🌿</h1>
            
            <div style={{ width: '80px', height: '4px', backgroundColor: '#4caf50', marginBottom: '20px' }}></div>

            {/* مطلب 3: فقرة عن الشركة (A paragraph about the company) */}
            <p style={{ maxWidth: '600px', fontSize: '1.2rem', lineHeight: '1.6', padding: '0 20px' }}>
                At Paradise Nursery, we are passionate about bringing nature closer to your home. 
                Our mission is to provide high-quality houseplants that not only beautify your space 
                but also purify the air and boost your well-being. From air-purifying ferns to 
                low-maintenance succulents, we have the perfect green companion for every plant lover.
            </p>

            {/* مطلب 4: زر Get Started يربط بصفحة المنتجات */}
            <button 
                onClick={() => navigate('/products')}
                style={{ 
                    marginTop: '30px',
                    padding: '15px 40px', 
                    fontSize: '20px', 
                    cursor: 'pointer', 
                    backgroundColor: '#4caf50', 
                    color: 'white', 
                    border: 'none', 
                    borderRadius: '30px',
                    fontWeight: 'bold',
                    transition: '0.3s'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#388e3c'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#4caf50'}
            >
                Get Started
            </button>
        </div>
    );
}

export default LandingPage;