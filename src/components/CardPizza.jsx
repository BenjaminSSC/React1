import React from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const CardPizza = ({ name, price, ingredients, img }) => {
  return (
    <Card style={{ width: '38rem' }} className="mb-4">
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Price: ${price.toLocaleString('es-CL')}</Card.Subtitle>
        <Card.Text>
          Ingredients: {ingredients.join(', ')}
        </Card.Text>
        <Button variant="primary" className="me-2">Ver más</Button>
        <Button variant="success" className='mx-5'>Añadir</Button>
      </Card.Body>
    </Card>
  );
};

export default CardPizza;
