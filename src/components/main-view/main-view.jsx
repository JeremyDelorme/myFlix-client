import React from 'react';
import axios from 'axios';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { Navbar, Container, Col, Row } from 'react-bootstrap';
import "./main-view.scss"

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';
import { NavbarView } from '../navbar-view/navbar-view';
import { ProfileView } from '../profile-view/profile-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';

export class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        };
    }

    getMovies(token) {
        axios.get('https://movie-api-jeremydelorme.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                // Assign the result to the state
                this.setState({
                    movies: response.data
                });
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    componentDidMount() {
        let accessToken = localStorage.getItem('token');
        if (accessToken !== null) {
            this.setState({
                user: localStorage.getItem('user')
            });
            this.getMovies(accessToken);
        }
    }

    onLoggedIn(authData) {
        console.log(authData);
        this.setState({
            user: authData.user.Username
        });

        localStorage.setItem('token', authData.token);
        localStorage.setItem('user', authData.user.Username);
        this.getMovies(authData.token);
    }

    onLoggedOut() {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.setState({
            user: null
        });
    }

    render() {
        const { movies, user } = this.state;

        return (
            <Router>
                <NavbarView user={user} />
                <Container fluid>
                    <Row className="main-view-row">
                        <Route exact path="/" render={() => {
                            if (!user) return <Col>
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                            if (movies.length === 0) return <div className="main-view" />;
                            return movies.map(m => (
                                <Col lg={3} md={4} sm={6} xs={12} key={m._id}>
                                    <MovieCard movie={m} />
                                </Col>
                            ))
                        }} />
                        <Route path="/register" render={() => {
                            return (
                                <Col>
                                    <RegistrationView />
                                </Col>
                            )
                        }} />

                        <Route path="/movies/:movieId" render={({ match, history }) => {
                            if (movies.length === 0) return <div className="main-view" />;
                            return (
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                                </Col>
                            )
                        }} />

                        <Route path={"/users/${user}"} render={({ history }) => {
                            if (!user) return <Redirect to="/" />
                            return (
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <ProfileView user={user} movies={movies} onBackClick={() => history.goBack()} />
                                </Col>
                            )
                        }} />

                        <Route path={"/directors/:name"} render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            // If movie list is empty (while movies load from API), display empty page
                            if (movies.length === 0) return <div className="main-view" />;
                            return (
                                <Col className="main-director-col" lg={3} md={4} sm={6} xs={12}>
                                    <DirectorView movies={movies} director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                                </Col>
                            )
                        }} />

                        <Route path={"/genres/:name"} render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            // If movie list is empty (while movies load from API), display empty page
                            if (movies.length === 0) return <div className="main-view" />;
                            return (
                                <Col lg={3} md={4} sm={6} xs={12}>
                                    <GenreView movies={movies} genre={movies.find(m => m.Genre.Name === match.params.name).Genre} onBackClick={() => history.goBack()} />
                                </Col>
                            )
                        }} />
                    </Row>
                </Container>
            </Router>
        );
    }
}

export default MainView;