import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'



const CardList = ({ cards }) => {
    console.log(cards)
    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.title}>
                    <Image variant="top" src={card.imageUrl} alt={card.title} />
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
