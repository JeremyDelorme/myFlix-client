import React from 'react';
import PropTypes from "prop-types";
import { Card, Col, Container, Row, Button } from "react-bootstrap"
import "./movie-view.scss"
import axios from 'axios';

import { Link } from 'react-router-dom'

export class MovieView extends React.Component {
    keypressCallback(event) {
        console.log(event.key);
    }
    componentDidMount() {
        document.addEventListener('keypress', this.keypressCallback);
    }
    componentWillUnmount() {
        document.removeEventListener('keypress', this.keypressCallback);
    }
    render() {
        const { movie, onBackClick } = this.props;

        return (
            <Container className="movie-view-container">
                <Row>
                    <Col>
                        <Card className="movie-view">
                            <Card.Body>
                                <Card.Title className="movie-view-title">{movie.Title}</Card.Title>
                                <Card.Img className="movie-view-image" variant="top" src={movie.ImagePath} />
                                <Card.Text id="movie-description" className="movie-description">
                                    {movie.Description}</Card.Text>
                                <Card.Text id="movie-director" className="movie-director">
                                    Director: {movie.Director.Name}</Card.Text>
                                <Link to={`/directors/${movie.Director.Name}`}>
                                    <Button variant="link">Director</Button>
                                </Link>
                                <Card.Text id="movie-genre" className="movie-genre">
                                    Genre: {movie.Genre.Name}</Card.Text>
                                <Link to={`/genres/${movie.Genre.Name}`}>
                                    <Button variant="link">Genre</Button>
                                </Link>
                            </Card.Body>
                        </Card>
                        <Link to={"/"}>
                            <Button variant="outline-light">Back to full list</Button>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    }
}
MovieView.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Bio: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired
        }),
        ImagePath: PropTypes.string.isRequired
    }).isRequired,

    onBackClick: PropTypes.func.isRequired
};