import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';


const CardList = ({ cards }) => {
    console.log(cards)
    return (
        <div className="card-list">
            {cards.map(card => (
                <Card key={card.title} style={{ width: '18rem' }}>
                    <Image variant="top" src={card.imageUrl} alt={card.name}  />
                    {/* <Card.ImgOverlay> */}
                    <Card.Body>
                        <Card.Title>{card.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">{card.title}</Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        <Button href={card.link}>Follow on Twitter!</Button>
                    </Card.Footer>
                    {/* </Card.ImgOverlay> */}
                </Card>
            ))}
        </div>
    );
};

export default CardList;
