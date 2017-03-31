import React from 'react';
import {connect} from 'react-redux'
import msgReducer from './msgReducer.jsx'

class MessageLog extends React.Component {

    render() {
        return (
            <div>
                {this.props.list.map((t) => {return <p>{t}</p>})}
            </div>
        );
    }
}

const mapStatetoProps  = (state) => {
    console.log(state.length);
    return {
        list: state
    }
}

const msgLog = connect(
    mapStatetoProps
)(MessageLog)

export default msgLog;
