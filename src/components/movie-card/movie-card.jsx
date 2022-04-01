
import React from 'react';
import PropTypes from 'prop-types';
import "./movie-card.scss"

import { CardGroup, Container, Button, Card } from "react-bootstrap"

export class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;

        return (
            <Container className="movie-card-container">
                <CardGroup>
                    <Card>
                        <Card.Body className="movie-card-body">
                            <Card.Title className="movie-title">{movie.Title}</Card.Title>
                            <a><Card.Img className='movie-image' variant="top" src={movie.ImagePath} /></a>
                        </Card.Body>
                        <Button className="card-button" onClick={() => onMovieClick(movie)} variant="link">Show more</Button>
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
    onMovieClick: PropTypes.func.isRequired
};