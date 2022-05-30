import React from 'react';
import axios from 'axios';
import React, { useState } from 'react';

import { connect } from 'react-redux';

import { BrowserRouter as Router, Route } from "react-router-dom";

import { setMovies } from '../../actions/actions';
import MoviesList from '../movies-list/movies-list';

import { Navbar, Container, Col, Row } from 'react-bootstrap';
import "./main-view.scss"

import { RegistrationView } from '../registration-view/registration-view';
import { LoginView } from '../login-view/login-view';
import { MovieView } from '../movie-view/movie-view';
import { NavbarView } from '../navbar-view/navbar-view';
import { ProfileView } from '../profile-view/profile-view';
import { GenreView } from '../genre-view/genre-view';
import { DirectorView } from '../director-view/director-view';

class MainView extends React.Component {

    constructor() {
        super();
        this.state = {
            user: null
        };
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

    getMovies(token) {
        axios.get('https://movie-api-jeremydelorme.herokuapp.com/movies', {
            headers: { Authorization: `Bearer ${token}` }
        })
            .then(response => {
                this.props.setMovies(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
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
        let { movies } = this.props;
        let { user } = this.state;

        return (
            <Router>
                <NavbarView user={user} />
                <Container fluid>
                    <Row >
                        <Route exact path="/" render={() => {
                            if (!user) return <Col>
                                <LoginView onLoggedIn={user => this.onLoggedIn(user)} />
                            </Col>
                            if (movies.length === 0) return <div />;
                            return <MoviesList movies={movies} />;
                        }} />
                        <Route path="/register" render={() => {
                            return (
                                <Col >
                                    <RegistrationView />
                                </Col>
                            )
                        }} />

                        <Route path="/movies/:movieId" render={({ match, history }) => {
                            if (movies.length === 0) return <div />;
                            return (
                                <Col fluid>
                                    <MovieView movie={movies.find(m => m._id === match.params.movieId)} onBackClick={() => history.goBack()} />
                                </Col>
                            )
                        }} />

                        <Route path={"/users/:userId"} render={({ history }) => {
                            if (!user) return <Redirect to="/" />
                            return (
                                <Col >
                                    <ProfileView user={user} movies={movies} onBackClick={() => history.goBack()} />
                                </Col>
                            )
                        }} />

                        <Route path={"/directors/:name"} render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            // If movie list is empty (while movies load from API), display empty page
                            if (movies.length === 0) return <div />;
                            return (
                                <Col  >
                                    <DirectorView movies={movies} director={movies.find(m => m.Director.Name === match.params.name).Director} onBackClick={() => history.goBack()} />
                                </Col>
                            )
                        }} />

                        <Route path={"/genres/:name"} render={({ match, history }) => {
                            if (!user) return <Redirect to="/" />
                            // If movie list is empty (while movies load from API), display empty page
                            if (movies.length === 0) return <div className="main-view" />;
                            return (
                                <Col >
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

let mapStateToProps = state => {
    return { movies: state.movies }
}

export default connect(mapStateToProps, { setMovies })(MainView);