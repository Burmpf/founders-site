import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = ({ imageUrl, title, twitterUrl, children }) => {
    return (
        <Card>
            <Card.Img variant="top" src={imageUrl} alt={title} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{children}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <a href={twitterUrl}>Twitter</a>
            </Card.Footer>
        </Card>
    );
};

export default MyCard;
