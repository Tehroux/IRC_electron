import React from 'react';
import {connect} from 'react-redux'

var shortid = require('shortid');

require('./msglog.less')

class MessageLog extends React.Component {

    render() {
        return (
            <div className="msgList">
                {this.props.list.msgList.map((t) => {return <p key={shortid.generate()}>{t}</p>})}
            </div>
        );
    }
}

const mapStatetoProps  = (state) => {
    return {
        list: state.msgReducer
    }
}

const MsgLog = connect(
    mapStatetoProps
)(MessageLog)

export default MsgLog;
