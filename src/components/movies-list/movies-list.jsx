import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';
import { Container, Row } from 'react-bootstrap';

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
                <Col xs={6} md={3} >
                    <VisibilityFilterInput visibilityFilter={visibilityFilter} />
                </Col>
            </Row>
            <Row >
                {filteredMovies.map(m => (
                    <Col xs={6} md={3} className='movie-list-col mb-3 pb-3' key={m._id}>
                        <MovieCard className="movie-list-card" movie={m} />
                    </Col>
                ))}
            </Row>
        </Container>


    </>;
}

export default connect(mapStateToProps)(MoviesList);