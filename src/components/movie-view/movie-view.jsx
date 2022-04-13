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
        const { movie } = this.props;

        return (
            <Container className="movie-view-container">
                <Row className="movie-view-title-row">
                    <Col className="movie-view-title-col">
                        <Card className="movie-view-title-card">
                            <Card.Body className="movie-view-title-card-body">
                                <Card.Title className="movie-view-title">{movie.Title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className="movie-view-row">
                    <Col className="movie-view-col">
                        <Card className="movie-view-card">
                            <Card.Body className="movie-view-card-body">
                                <Card.Img className="movie-view-image" src={movie.ImagePath} />
                                <Card.Text className="movie-description">
                                    {movie.Description}</Card.Text>
                                <Card.Text className="director-card-text">
                                    Director: {movie.Director.Name}
                                </Card.Text>
                                <br />
                                <Card.Text>
                                    Genre: {movie.Genre.Name}
                                </Card.Text>
                                <br />
                                <div className="director-genre-div">
                                    <br />
                                    <div>
                                        <Link to={`/directors/${movie.Director.Name}`}>
                                            <Button className="director-button" variant="link">Director</Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link to={`/genres/${movie.Genre.Name}`}>
                                            <Button className="genre-button" variant="link">Genre</Button>
                                        </Link>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <div className="back-fav-buttons">
                    <Link to={"/"}>
                        <Button className="movie-view-button">Back to full list</Button>
                    </Link>
                    <Link to={`/movies/${movie._id}`}>
                        <Button className="movie-view-button" onClick={() => { }}>Add to favorites</Button>
                    </Link>
                </div>
            </Container >
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