import React, { Component } from 'react'
import logo from '../App/assets/logo.svg'

class TodoInput extends Component {

  state = {
    text: '',
  }

  handleEnter = event => {
    if (event.key === 'Enter' && this.state.text.length) {
      this.props.handleNewTodo(this.state.text)
      this.setState({
        text: '',
      })
    }
  }

  handletext = event => {
    this.setState({
      text: event.target.value,
    })
  }

  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <input
            onKeyPress={this.handleEnter}
            value={this.state.text}
            onChange={this.handletext}
          />
        </p>
      </div>
    )
  }
}

TodoInput.propTypes = {
  handleNewTodo: React.PropTypes.func.isRequired,
}

export default TodoInput
