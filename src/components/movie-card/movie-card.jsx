import React from 'react';
import PropTypes from 'prop-types';
import "./movie-card.scss"
import { CardGroup, Container, Button, Card } from "react-bootstrap"

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;

        return (
            <Container className="movie-card-container flex-grow-1 h-100">
                <CardGroup className='movie-card-card-group'>
                    <Card className='movie-card-card-body'>
                        <Card.Body>
                            <Card.Title >{movie.Title}</Card.Title>
                            <a><Card.Img className='movie-card-img' src={movie.ImagePath} /></a>
                        </Card.Body>
                        <Link to={`/movies/${movie._id}`}>
                            <Button className='buttons-design' >Show more</Button>
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