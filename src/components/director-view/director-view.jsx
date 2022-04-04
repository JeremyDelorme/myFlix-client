import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import './director-view.scss';
import { Link } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

export class DirectorView extends React.Component {

    render() {
        const { director, onBackClick, movies } = this.props;

        return (
            <Container fluid className="director-container">
                <Row>
                    <Card fluid>
                        <Card.Body className="director-card-body" fluid>
                            <Card.Title className="director-title">Director</Card.Title>
                            <Card.Text className="director-bio">
                                <span className="label"></span>
                                <span className="value">{director.Name}</span>
                            </Card.Text>
                            <Card.Text>
                                <span className="label"></span>
                                <span className="value">{director.Bio}</span>
                            </Card.Text>
                            <Card.Text>
                                <span className="label">Birth: </span>
                                <span className="value">{director.Birth}</span>
                            </Card.Text>
                            <Card.Text>
                                <span className="label">Death: </span>
                                <span className="value">{director.Death}</span>
                            </Card.Text>

                            <Button variant="outline-light" onClick={() => { onBackClick(); }}>Back</Button>
                        </Card.Body>
                    </Card>
                </Row>
                <Row className="director-row">
                    {movies.map(movie => (
                        <Card className="favorite-movie-card" key={movie._id} >
                            <Col className="director-col" lg={3} md={4} sm={6} xs={12}>
                                <Card.Img
                                    className="fav-poster"
                                    variant="top"
                                    src={movie.ImagePath} />
                                <Card.Body>
                                    <Card.Title className="movie_title">
                                        {movie.Title}
                                    </Card.Title>
                                </Card.Body>
                            </Col>

                        </Card>
                    ))}
                </Row>
            </Container>
        );
    }
}