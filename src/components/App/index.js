import React, { Component } from 'react'
import TodoInput from '../TodoInput'
import TodoList from '../TodoList'
import './style.css'

class App extends Component {

  state = {
    todos: [],
  }

  newTodo = text => {
    const todos = this.state.todos
    this.setState({
      todos: [
        ...todos,
        {
          id: todos.length ? todos[todos.length - 1].id + 1 : 1,
          text,
          finish: false,
        },
      ],
    })
  }

  toggleTodo = id => {
    this.setState({
      todos: this.state.todos.map(todo =>
        todo.id === id ? { ...todo, finish: !todo.finish } : todo),
    })
  }

  removeTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => id ? todo.id !== id : todo),
    })
  }

  render() {
    return (
      <div className="App">
        <TodoInput handleNewTodo={this.newTodo} />
        <TodoList {...this.state} handleToggle={this.toggleTodo} handleRemove={this.removeTodo} />
      </div>
    )
  }
}

export default App
