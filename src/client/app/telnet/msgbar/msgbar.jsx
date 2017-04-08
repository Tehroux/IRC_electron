import React from 'react'
import store from '../../index.jsx'
import {sendMessage} from './msgbaraction.jsx'

require('./msgbar.less')

class MsgBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: ''
    }
    this.handleMessageChange = this.handleMessageChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleMessageChange(event) {
    this.setState({message: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    store.dispatch(sendMessage(this.state.message))
    this.setState({ message: ''})
  }

  render() {
    return (
      <div className="msgBar">
        <form onSubmit={ this.handleSubmit } >
          <div className="formElement">
            <input type="text" name="msg" value= {this.state.message } onChange={ this.handleMessageChange } required />
            <label htmlFor="msg">Message</label>
            <hr />
          </div>
        </form>
      </div>
    )
  }

}

export default MsgBar;
