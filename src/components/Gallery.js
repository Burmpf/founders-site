import React, { Component } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Gallery extends Component {
    static propTypes = {
        cards: PropTypes.arrayOf(PropTypes.shape({
            id: PropTypes.number,
            title: PropTypes.string,
            subtitle: PropTypes.string,
            imageUrl: PropTypes.string,
            link: PropTypes.string,
        })).isRequired,
    }
    render() {
        const { cards } = this.props;
        return (
            <div className="card-list">
                <Row>
                    {cards.map((card) => {
                        const { id, title, imageUrl, link, subtitle } = card;
                        return (
                            <Col xs={12} md={4} key={id}>
                                <Card style={{ width: "18rem" }}>
                                    <Card.Img variant="top" src={imageUrl} alt={title} />
                                    <Card.Body>
                                        <Card.Title>{title}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{subtitle}</Card.Subtitle>
                                    </Card.Body>
                                    <Card.Footer>
                                        <a href={link} className="btn btn-primary">Follow on Twitter!</a>
                                    </Card.Footer>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        );
    }
}

export default Gallery;
