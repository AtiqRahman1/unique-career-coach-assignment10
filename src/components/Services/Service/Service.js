import React from 'react';
import { Button, Card } from 'react-bootstrap';


const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price:${price}</Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary">Book Now</Button>
            </Card.Body>
        </Card>

    );
};

export default Service;