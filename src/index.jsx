import React from 'react';
import ReactDOM from 'react-dom';
import Container from 'react-bootstrap/Container';
import store from './store';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';

import MainView from './components/main-view/main-view';

//Import statement indicating need to bundle `./index.scss`
import './index.scss';




//The Main component
class MyFlixApplication extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Container fluid>
                    <MainView />
                </Container>
            </Provider>

        );
    }
}

// Finds the root of the app
const container = document.getElementById('app-container');

// Tells React to render the app in the root DOM element
ReactDOM.render(React.createElement(MyFlixApplication), container);