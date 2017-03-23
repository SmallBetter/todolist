import React from 'react'
import TodoItem from '../TodoItem'
import './style.css'

const TodoList = ({ todos, handleToggle, handleRemove }) => (
  <span className="App-intro">
    <ul>
      {todos.map(todo =>
        <TodoItem key={todo.id} {...todo} handleToggle={handleToggle} handleRemove={handleRemove} />)}
    </ul>
  </span>
)

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.shape({
    id: React.PropTypes.number.isRequired,
    text: React.PropTypes.string.isRequired,
    finish: React.PropTypes.bool.isRequired,
  })).isRequired,
  handleToggle: React.PropTypes.func.isRequired,
  handleRemove: React.PropTypes.func.isRequired,
}

export default TodoList