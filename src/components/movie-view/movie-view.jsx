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
            <Container >

                <h2 >{movie.Title}</h2>
                <Row >
                    <Col >
                        <Card >
                            <Card.Body>
                                <Card.Img fluid src={movie.ImagePath} />
                                <Card.Text >
                                    {movie.Description}</Card.Text>
                                <Card.Text >
                                    Director: {movie.Director.Name}
                                </Card.Text>
                                <br />
                                <Card.Text>
                                    Genre: {movie.Genre.Name}
                                </Card.Text>
                                <br />
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Link to={"/"}>
                        <Button >Back to full list</Button>
                    </Link>
                    <Link to={`/movies/${movie._id}`}>
                        <Button onClick={() => { }}>Add to favorites</Button>
                    </Link>
                </Row>

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