import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/products')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Products:', data);
                setProducts(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <div style={{ display: 'flex',
        justifyContent: 'center', 
        flexWrap: 'wrap',   }}>
            {products.map(product => (
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{product.name}</Card.Title>
                        <Card.Text>
                            {product.description} - ${product.price}
                        </Card.Text>
                        <Button variant="primary">Buy</Button>
                    </Card.Body>
                </Card>
            ))}
        </div>
    );
}
