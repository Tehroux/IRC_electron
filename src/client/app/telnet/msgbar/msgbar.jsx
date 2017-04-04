import React from 'react'

require('./msgbar.less')

class MsgBar extends React.Component {
    render() {
        return (
            <div className="msgBar">
                <form>
                    <div className="formElement">
                        <input type="text" name="msg" onChange={ this.handleHostChange } required />
                        <label htmlFor="msg">Message</label>
                        <hr />
                    </div>
                </form>
            </div>
        )
    }
}

export default MsgBar;
