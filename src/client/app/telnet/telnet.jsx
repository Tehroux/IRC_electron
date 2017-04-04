import React from 'react'

import MsgLog from './msglog/messagelog.jsx'
import MsgBar from './msgbar/msgbar.jsx'

require('./telnet.less')

class Telnet extends React.Component {
    render() {
        return (
            <div className="telnet">
                <MsgLog />
                <MsgBar />
            </div>
        )
    }
}

export default Telnet;
