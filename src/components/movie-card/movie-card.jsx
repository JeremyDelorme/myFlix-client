import React from 'react';
import PropTypes from 'prop-types';

import './movie-card.scss';

export class MovieCard extends React.Component {
    render() {
        const { movie, index, onMovieClick } = this.props;
        if (index == 0) {
            return (
                <div>
                    <div className="movie-card-titles">My Movies</div>
                    <div onMouseOver={changeBackground} onMouseOut={resetBackground} onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
                </div>
            );
        } else {

            return (
                <div>
                    <div onMouseOver={changeBackground} onMouseOut={resetBackground} onClick={() => onMovieClick(movie)} className="movie-card">{movie.Title}</div>
                </div>);
        }
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Description: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
            Name: PropTypes.string.isRequired,
            Birth: PropTypes.string.isRequired,
            Death: PropTypes.string.isRequired
        }),
        ImagePath: PropTypes.string.isRequired
    }).isRequired,
    index: PropTypes.number.isRequired,
    onMovieClick: PropTypes.func.isRequired
};
