import React from 'react';
import PropTypes from 'prop-types';
import "./movie-card.scss"
import { CardGroup, Container, Button, Card } from "react-bootstrap"

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;

        return (
            <Container className="movie-card-container">
                <CardGroup>
                    <Card>
                        <Card.Body className="movie-card-body">
                            <Card.Title className="movie-title">{movie.Title}</Card.Title>
                            <a><Card.Img className='movie-image' variant="top" src={movie.ImagePath} /></a>
                        </Card.Body>
                        <Link to={`/movies/${movie._id}`}>
                            <Button className="card-button" variant="link">Show more</Button>
                        </Link>
                    </Card>
                </CardGroup>
            </Container>
        )
    };
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired
    }).isRequired,
};