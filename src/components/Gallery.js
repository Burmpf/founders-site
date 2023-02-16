import React /*, { Component }*/ from 'react';
import { Card, Row, Col, /*CardGroup, CardImg*/ } from 'react-bootstrap';
import PropTypes from 'prop-types';
import "./Gallery.css"


class GalleryCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isHovered: false,
        };
    }

    handleMouseOver = () => {
        this.setState({ isHovered: true });
    };

    handleMouseOut = () => {
        this.setState({ isHovered: false });
    };

    render() {
        const { id, title, imageUrl, link, subtitle, hoverUrl } = this.props;
        const { isHovered } = this.state;
        return (
            <Col xs={12} md={4} align="center" key={id}>
                <Card className="founder-card">
                    <Card.Img
                        className="still-img"
                        variant="top"
                        src={isHovered ? hoverUrl : imageUrl}
                        alt={title}
                        onMouseOver={this.handleMouseOver}
                        onMouseOut={this.handleMouseOut}
                    />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {subtitle}
                        </Card.Subtitle>
                    </Card.Body>
                    <Card.Footer>
                        <a href={link} className="btn btn-primary">
                            Follow on Twitter!
                        </a>
                    </Card.Footer>
                </Card>
            </Col>
        );
    }
}

class Gallery extends React.Component {
    static propTypes = {
        cards: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number,
                title: PropTypes.string,
                subtitle: PropTypes.string,
                imageUrl: PropTypes.string,
                link: PropTypes.string,
                hoverUrl: PropTypes.string,
            })
        ).isRequired,
    };

    render() {
        const { cards } = this.props;
        return (
            <div className="card-list">
                <h1>
                    <u>Meet The Founders</u>
                </h1>
                <Row className="row-css">
                    {cards.map((card) => (
                        <GalleryCard {...card} />
                    ))}
                </Row>
            </div>
        );
    }
}

export default Gallery;
