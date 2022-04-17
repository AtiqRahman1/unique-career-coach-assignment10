import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (

        <Card style={{ width: '18rem', background: 'lightgray' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>Price:${price}</Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to='/checkout'>
                    <Button variant="light">Book Now</Button>
                </Link>

            </Card.Body>
        </Card>

    );
};

export default Service;