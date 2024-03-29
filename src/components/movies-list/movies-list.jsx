import React from 'react';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';
import { Container, Row, Col } from 'react-bootstrap';

const mapStateToProps = state => {
    const { visibilityFilter } = state;
    return { visibilityFilter };
};

function MoviesList(props) {
    const { movies, visibilityFilter } = props;
    let filteredMovies = movies;

    if (visibilityFilter !== '') {
        filteredMovies = movies.filter(m => m.Title.toLowerCase().includes(visibilityFilter.toLowerCase()));
    }

    if (!movies) return <div />;

    return <>
        <Container fluid >
            <Row >
                <Col className="filter-input" >
                    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
                </Col>
            </Row>
            <Row >
                {filteredMovies.map(m => (
                    <Col sm={6} md={4} lg={3} key={m._id}>
                        <MovieCard movie={m} />
                    </Col>
                ))}
            </Row>
        </Container>


    </>;
}

export default connect(mapStateToProps)(MoviesList);