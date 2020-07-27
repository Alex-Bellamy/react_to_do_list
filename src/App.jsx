import React, { useState, useRef } from "react";
import TodoList from "./components/TodoList"
import uuidv4 from 'uuid/v4'

function App() {
  const [todos, setTodos] = useState([])
  const taskNameRef = useRef()

  function handleAddTask(e) {
    const name = taskNameRef.current.value
    if (name === '' ) return
    setTodos(prevTasks => {
      return [...prevTasks, { id: uuidv4(), name: name, complete: false}]
    })
    taskNameRef.current.value = null
  }

  return (
    <>
    <TodoList todos={todos} />
    <input ref={taskNameRef} type="text" />
    <button onClick={handleAddTask}>Add Task</button>
    <button>Clear Completed Tasks</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;