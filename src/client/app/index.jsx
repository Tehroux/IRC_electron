import React from 'react';
import {render} from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider, connect} from 'react-redux'
import Login from './login/index.jsx';

import {hostReducer, connectReducer} from './socket/hostReducer.jsx'

const initialState = {connected: false}

let store = createStore(combineReducers({hostReducer, connected: connectReducer}), initialState);

class App extends React.Component {
    render () {
        if(this.props.connected.connected === false) {
        return (
                <Login />
        );
    } else {
        return (
            <p>prout</p>
        );
    }
}
}

const mapStatetoProps  = (state) => {
    return {
        connected: state
    }
}

const Myapp = connect(
    mapStatetoProps
)(App)

render(
    <Provider store={store}>
        <Myapp />
    </Provider>
    , document.getElementById('app')
);

export default store;
