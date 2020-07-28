import React from 'react';
import Todo from './Todo'

export default function TodoList({ todos, toggleTasks }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} toggleTasks={toggleTasks} todo={todo} />
    })
  )
}