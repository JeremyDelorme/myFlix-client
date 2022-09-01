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
            <Container fluid>
                <Row>
                    <Card fluid>
                        <Card.Body fluid>
                            <Card.Title>Director</Card.Title>
                            <Card.Text>
                                <span></span>
                                <span>{director.Name}</span>
                            </Card.Text>
                            <Card.Text>
                                <span></span>
                                <span>{director.Bio}</span>
                            </Card.Text>
                            <Card.Text>
                                <span>Birth: </span>
                                <span>{director.Birth}</span>
                            </Card.Text>
                            <Card.Text>
                                <span>Death: </span>
                                <span>{director.Death}</span>
                            </Card.Text>

                            <Button className='buttons-design' onClick={() => { onBackClick(); }}>Back</Button>
                        </Card.Body>
                    </Card>
                </Row>
                {/* <Row className="director-row">
                    {movies.map(movie => (
                        <Card className="favorite-movie-card" key={movie._id} >
                            <Col className="director-col">
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
                </Row> */}
            </Container>
        );
    }
}