require('./style.less')

import React from 'react';
import {render} from 'react-dom';
import { createStore, combineReducers } from 'redux';
import {Provider, connect} from 'react-redux'
import Login from './login/index.jsx';
import Telnet from './telnet/telnet.jsx'

import {hostReducer, connectReducer, sendMessage} from './socket/hostReducer.jsx'
import msgReducer from './telnet/msglog/msgReducer.jsx'

const initialState = {connected: false, msgList: ['nick']}

let store = createStore(combineReducers({
    hostReducer
,   connectReducer
,   sendMessage
,   msgReducer
}));

class App extends React.Component {
    render () {
        if(this.props.connected === false) {
            return (
                <Login />
            );
        } else {
            return (
                <Telnet/>
            );
        }
    }
}

const mapStatetoProps  = (state) => {
    return {
        connected: state.connectReducer.connected
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
