import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import "./registration-view.scss"

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(username, password, email);

        props.onRegistration(username);
    };



    return (
        <Container className="register-container">
            <Row>
                <Col>
                    <CardGroup>
                        <Card className="register-card">
                            <Card.Body>
                                <Card.Title className="register-title">Please register</Card.Title>
                                <Form>
                                    <Form.Group>
                                        <Form.Label className="register-card-label">Username</Form.Label>
                                        <Form.Control
                                            type="text"
                                            value={username}
                                            onChange={e => setUsername(e.target.value)}
                                            required
                                            placeholder="Enter a username"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="register-card-label">Password</Form.Label>
                                        <Form.Control
                                            type="password"
                                            value={password}
                                            onChange={e => setPassword(e.target.value)}
                                            required
                                            placeholder="Enter a Password"
                                            minLength="8"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label className="register-card-label">Email</Form.Label>
                                        <Form.Control
                                            type="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            required
                                            placeholder="Enter your email adress"
                                        />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Birthday:</Form.Label>
                                        <Form.Control
                                            type="date"
                                            value={birthday}
                                            onChange={e => setBirthday(e.target.value)}
                                            required
                                            placeholder="Enter your birthday" />
                                    </Form.Group>

                                    <Button className="register-button" variant="primary"
                                        type="submit"
                                        onClick={handleSubmit}>
                                        Register
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>

    )

}

RegistrationView.propTypes = {
    onRegistration: PropTypes.func.isRequired
};