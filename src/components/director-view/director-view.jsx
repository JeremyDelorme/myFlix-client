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
                    <Card>
                        <Card.Body>
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
            </Container>
        );
    }
}