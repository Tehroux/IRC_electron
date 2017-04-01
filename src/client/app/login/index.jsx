import React from 'react';
import { render } from 'react-dom';

import store from '../index.jsx';
import {actionConnect} from './actionConnect.jsx'
require('./login.less')

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            host: ''
        ,   port: ''
        }
        this.handleHostChange = this.handleHostChange.bind(this);
        this.handlePortChange = this.handlePortChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        store.dispatch(actionConnect(this.state.host, this.state.port))
        event.preventDefault()
    }

    handleHostChange(event) {
        this.setState({host: event.target.value});
    }

    handlePortChange(event) {
        this.setState({port: event.target.value});
    }

    render() {
        return (
            <form onSubmit={ this.handleSubmit }>
                <div className="formElement">
                    <input type="text" name="host" onChange={ this.handleHostChange } required />
                    <label htmlFor="host">Host</label>
                    <hr />
                </div>
                <div className="formElement">
                    <input type="text" name="port" onChange={ this.handlePortChange } required />
                    <label htmlFor="port">Port</label>
                    <hr />
                </div>
                <div className="buttonContainer">
                    <input type="submit" value="connect" className="button" />
                </div>
            </form>
        );
    }
};

export default Login;
