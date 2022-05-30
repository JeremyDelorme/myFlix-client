import React from 'react';
import Col from 'react-bootstrap/Col';
import { connect } from 'react-redux';

import VisibilityFilterInput from '../visibility-filter-input/visibility-filter-input';
import { MovieCard } from '../movie-card/movie-card';
import { Row } from 'react-bootstrap';

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
        <Row className='input-row'>
            <Col className='input-col'>
                <VisibilityFilterInput visibilityFilter={visibilityFilter} />
            </Col>
        </Row>
        <Row>
            {filteredMovies.map(m => (
                <Col className='movie-list-col' key={m._id}>
                    <MovieCard movie={m} />
                </Col>
            ))}
        </Row>

    </>;
}

export default connect(mapStateToProps)(MoviesList);