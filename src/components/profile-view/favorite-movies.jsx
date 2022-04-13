import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

export function FavoriteMovies({ favoriteMovieList, removeFav }) {
    return (
        <>
            <Row>
                <Col xs={12}>
                    <h4>My favorite movies</h4>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {favoriteMovieList.map(movie => {
                    return (
                        <Col xs={12} sm={6} md={4} key={movie._id}>
                            <Card>
                                <Card.Img variant="top" src={movie.ImagePath} />
                                <Card.Body>
                                    <Card.Title>{movie.Title}</Card.Title>
                                    <Link to={`/movies/${movie._id}`}>
                                        <Button variant="link">More Info</Button>
                                    </Link>
                                    <Button variant="outline-danger" onClick={() => removeFav(movie._id)}>Remove from list</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })
                }
            </Row>

        </>
    )
}
