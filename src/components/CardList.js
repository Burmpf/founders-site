import React from 'react';
import { Card } from 'react-bootstrap';

const CardList = ({ cards }) => {
    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.title}>
                    <Card.Img variant="top" src={card.imageUrl} alt={card.title} />
                    <Card.Body>
                        <Card.Title>{card.title}</Card.Title>
                    </Card.Body>
                    <Card.Footer>
                        <a href={card.link}>Twitter</a>
                    </Card.Footer>
                </Card>
            ))}
        </div>
    );
};

export default CardList;
