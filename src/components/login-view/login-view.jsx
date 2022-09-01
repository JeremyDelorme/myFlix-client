import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Button, Form, Container, Col, Row, CardGroup, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './login-view.scss';
import axios from 'axios';

export function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // Declare hook for each input
    const [usernameErr, setUsernameErr] = useState('');
    const [passwordErr, setPasswordErr] = useState('');

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

        return isReq;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isReq = validate();
        console.log(isReq);
        if (isReq) {
            /* Send a request to the server for authentication */
            axios.post('https://movie-api-jeremydelorme.herokuapp.com/login', {
                Username: username,
                Password: password
            })
                .then(response => {
                    const data = response.data;
                    props.onLoggedIn(data);
                })
                .catch(e => {
                    console.log('no such user')
                    alert("No such user :(")
                });
        }
    };


    return (
        <Container className='login-container'>
            <Row>
                <Col>
                    <CardGroup>
                        <Card className='login-card' >
                            <Card.Body >
                                <Card.Title className='login-card-title' >Please login</Card.Title>
                                <Form className='login-form' >
                                    <Form.Group>
                                        <Form.Label>Username:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            onChange={e => setUsername(e.target.value)}
                                        />
                                        {/* code added here to display validation error */}
                                        {usernameErr && <p>{usernameErr}</p>}
                                    </Form.Group>
                                    <Form.Group controlId="formPassword">
                                        <Form.Label>Password:</Form.Label>
                                        <Form.Control
                                            type="password"
                                            onChange={e => setPassword(e.target.value)}
                                        />
                                        {/* code added here to display validation error */}
                                        {passwordErr && <p>{passwordErr}</p>}
                                    </Form.Group>
                                    <div className='login-div-submit-button'>
                                        <Button
                                            className='login-submit-button'
                                            type="submit"
                                            onClick={handleSubmit}>Submit
                                        </Button>
                                    </div>

                                    <div className='login-buttons-below' >
                                        <Link to={`/register`}>
                                            <Button className='login-register-now'>Register Now!</Button>
                                        </Link>
                                    </div>

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