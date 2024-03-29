import { combineReducers } from 'redux';

import { SET_FILTER, SET_MOVIES } from '../../actions/actions';

function visibilityFilter(state = '', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.value;
        default:
            return state;
    }
}

function movies(state = [], action) {
    switch (action.type) {
        case SET_MOVIES:
            return action.value;
        default:
            return state;
    }
}

export default combineReducers({
    visibilityFilter,
    movies
});
