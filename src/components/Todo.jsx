import React from 'react'

export default function Todo({ todo, toggleTasks }) {
  
  function handleTaskClick() {
    toggleTasks(todo.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTaskClick} />
        {todo.name}
      </label>
    </div>
  )
}