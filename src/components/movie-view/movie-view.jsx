import React from 'react';
import PropTypes from "prop-types";
import { Card, Col, Container, Row, Button } from "react-bootstrap"
import "./movie-view.scss"

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
            <Container>
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
                                <Card.Text id="movie-genre" className="movie-gerne">
                                    Genre: {movie.Genre.Name}</Card.Text>
                            </Card.Body>
                        </Card>
                        <Button className="movie-view-button" onClick={() => { onBackClick(null); }}>Back</Button>
                        <Button className="movie-view-button" onClick={() => { }}>Add to favorites</Button>
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