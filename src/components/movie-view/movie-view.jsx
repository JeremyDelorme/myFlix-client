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

    addToFavoriteList(movieId) {
        const currentUser = localStorage.getItem('user');
        const token = localStorage.getItem('token');
        axios.patch(`https://movie-api-jeremydelorme.herokuapp.com/users/${currentUser}/movies/${movieId}`,
            {},
            {
                headers: { Authorization: `Bearer ${token}` }
            })
            .then((response) => {
                console.log(response.data)
                alert(`The movie was successfully add to your list.`)
            }).
            catch(error => console.error(error))
    }

    render() {
        const { movie } = this.props;

        return (
            <Container className='movie-view-container'>

                <h2 >{movie.Title}</h2>
                <Row >
                    <Col className='movie-view-col'>
                        <Card >
                            <Card.Body className='movie-view-card-body'>
                                <Card.Img fluid src={movie.ImagePath} />
                                <Card.Text >
                                    {movie.Description}</Card.Text>
                                <Card.Text >
                                    Director: {movie.Director.Name}
                                </Card.Text>
                                <Card.Text>
                                    Genre: {movie.Genre.Name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row className='buttons-row'>
                    <Link to={"/"}>
                        <Button className='buttons-design'>Back to full list</Button>
                    </Link>
                    <Link to={`/movies/${movie._id}`}>
                        <Button className='buttons-design' onClick={() => this.addToFavoriteList(movie._id)}>Add to favorites</Button>
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