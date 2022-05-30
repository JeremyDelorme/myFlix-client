import React from 'react';
import PropTypes from 'prop-types';
import "./movie-card.scss"
import { CardGroup, Container, Button, Card } from "react-bootstrap"

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
    render() {
        const { movie } = this.props;

        return (
            <Container >
                <CardGroup>
                    <Card>
                        <Card.Body >
                            <Card.Title >{movie.Title}</Card.Title>
                            <a><Card.Img src={movie.ImagePath} /></a>
                        </Card.Body>
                        <Link to={`/movies/${movie._id}`}>
                            <Button variant="link">Show more</Button>
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