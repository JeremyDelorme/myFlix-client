
import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './movie-card.scss';
import { Link } from 'react-router-dom';

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
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        ImagePath: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired,
        }).isRequired,
        Director: PropTypes.shape({
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired,
            Death: PropTypes.string.isRequired,
            Name: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};