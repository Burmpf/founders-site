import React, { Component } from 'react';
import { Card, Row, Col, CardGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./Gallery.css"

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
                <h1><u>Meet The Founders</u></h1>

                <Row className='row-css'>
                    {cards.map((card) => {
                        const { id, title, imageUrl, link, subtitle } = card;
                        return (
                            <Col xs={12} md={4} align="center" key={id}>
                                <Card className='founder-card' style={{ width: "23rem" }}>
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

                <h1><u>Meet The Team</u></h1>
                <br></br>
                <Row>
                    <h2><u>Our Fearless Leaders</u></h2>
                    <Col xs={12} md={4} align="center">
                        <Card className='founder-card' style={{ width: "23rem" }}>
                            <Card.Img variant="top" src='./images/marcus-founder.png' alt='Marcus' />
                            <Card.Body>
                                <Card.Title>Marcus</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Light and Darkness</Card.Subtitle>
                            </Card.Body>
                            <Card.Footer>
                                <a href="https://twitter.com/xMarcus_Sol" className="btn btn-primary">Follow on Twitter!</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <Col xs={12} md={4} align="center">
                        <Card className='founder-card' style={{ width: "23rem" }}>
                            <Card.Img variant="top" src='./images/founder-love.gif' alt='Endless' />
                            <Card.Body>
                                <Card.Title>Endless</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Founders Founder</Card.Subtitle>
                            </Card.Body>
                            <Card.Footer>
                                <a href="hhttps://twitter.com/endless_poor" className="btn btn-primary">Follow on Twitter!</a>
                            </Card.Footer>
                        </Card>
                    </Col>
                    <h2><u>Our Whitelist/Alpha Hunters</u></h2>
                    <CardGroup>
                            <Col xs={12} md={4} align="center">
                            <Card className='founder-card' style={{ width: "23rem" }}>
                                <Card.Img variant="top" src='./images/mohish-pfp.jpeg' alt='Mohish' />
                                <Card.Body>
                                    <Card.Title>Mohish</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">The Grinder</Card.Subtitle>
                                </Card.Body>
                                <Card.Footer>
                                    <a href="https://mobile.twitter.com/ballistic_NFT" className="btn btn-primary">Follow on Twitter!</a>
                                </Card.Footer>
                            </Card>
                        </Col>
                        <Col xs={12} md={4} align="center">
                            <Card className='founder-card' style={{ width: "23rem" }}>
                                <Card.Img variant="top" src='./images/simple-pfp.jpeg' alt='Simple' />
                                <Card.Body>
                                    <Card.Title>Simple</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">The Lemon Head</Card.Subtitle>
                                </Card.Body>
                                <Card.Footer>
                                    <a href="https://twitter.com/Denvalerka" className="btn btn-primary">Follow on Twitter!</a>
                                </Card.Footer>
                            </Card>
                        </Col>
                    </CardGroup>
                </Row>

            </div>
        );
    }
}

export default Gallery;
