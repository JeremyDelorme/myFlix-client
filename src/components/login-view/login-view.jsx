import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button, Form, Container, Col, Row, CardGroup, Card } from 'react-bootstrap';
import './login-view.scss';

import axios from 'axios';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /* Send a request to the server for authentication */
        axios.post('YOUR_API_URL/login', {
            Username: username,
            Password: password
        })
            .then(response => {
                const data = response.data;
                props.onLoggedIn(data);
            })
            .catch(e => {
                console.log('no such user')
            });
    };

    return (
        <Container>
            <Row>
                <Col>
                    <CardGroup>
                        <Card className="login-card">
                            <Card.Body>
                                <Card.Title className="login-title">Please login</Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                    </Form.Group>

                                    <Button
                                        className="login-button"
                                        variant="primary"
                                        type="submit"
                                        onClick={handleSubmit}>Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>

    );

}

LoginView.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }),
    onLoggedIn: PropTypes.func.isRequired,
};