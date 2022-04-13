import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Card, CardGroup, Container, Col, Row, Link } from 'react-bootstrap';
import "./registration-view.scss"
import axios from 'axios';
import { render } from 'react-dom';

export function RegistrationView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    // Declare hook for each input
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');
    const [emailErr, setEmailErr] = useState('');

    // validate user inputs
    const validate = () => {
        let isReq = true;
        if (!username) {
            setUsernameErr('Username Required');
            isReq = false;
        } else if (username.length < 2) {
            setUsernameErr('Username must be 2 characters long');
            isReq = false;
        }
        if (!password) {
            setPasswordErr('Password Required');
            isReq = false;
        } else if (password.length < 6) {
            setPassword('Password must be 6 characters long');
            isReq = false;
        }
        if (!email) {
            setEmailErr('Email Required');
            isReq = false;
        }


        return isReq;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        console.log(isReq);
        if (isReq) {
            /* Send a request to the server for authentication */
            axios.post('https://movie-api-jeremydelorme.herokuapp.com/users', {
                Username: username,
                Password: password,
                Email: email,
                Birthday: birthday
            })
                .then(response => {
                    const data = response.data;
                    console.log(data);
                    alert("registration successful, please login!")
                    window.open('/', '_self'); // the second argument '_self' is necessary so that the page will open in the current tab
                })
                .catch(e => {
                    console.log('error registering the user')
                    alert("Unable to register")
                });
        }
    };


    return (

        <Container fluid className="register-container">
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
                                        {/* code added here to display validation error */}
                                        {usernameErr && <p>{usernameErr}</p>}
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
                                        {/* code added here to display validation error */}
                                        {passwordErr && <p>{passwordErr}</p>}
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
                                        {/* code added here to display validation error */}
                                        {emailErr && <p>{emailErr}</p>}
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
                                </Form>
                                <Row className="buttons-row">
                                    <Col className="button-col1">
                                        <Button className="register-button" variant="primary"
                                            type="submit"
                                            onClick={handleSubmit}>
                                            Register
                                        </Button>
                                    </Col>
                                    <Col className="button-col2">
                                        <Button className="submit-button" type="submit" onClick={handleSubmit}>Submit</Button>
                                    </Col>
                                </Row>



                            </Card.Body>
                        </Card>
                    </CardGroup>
                </Col>
            </Row>
        </Container>

    )

}

RegistrationView.propTypes = {
    register: PropTypes.shape({
        Username: PropTypes.string.isRequired,
        Password: PropTypes.string.isRequired,
        Email: PropTypes.string.isRequired,
    }),
    onRegistration: PropTypes.func,
};