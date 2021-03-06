import React, { useState, useRef, useEffect } from "react";
import TodoList from "./components/TodoList"
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState([])
  const taskNameRef = useRef()

  useEffect (() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE))
  if (storedTodos) setTodos(storedTodos)
}, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE, JSON.stringify (todos))
  }, [todos])

  function toggleTasks(id) {
  const newTasks = [...todos]
  const todo = newTasks.find(todo => todo.id === id)
  todo.complete = !todo.complete
  setTodos(newTasks)
}

  function handleAddTask(e) {
    const name = taskNameRef.current.value
    if (name === '' ) return
    setTodos(prevTasks => {
      return [...prevTasks, { id: uuidv4(), name: name, complete: false}]
    })
    taskNameRef.current.value = null
  }

  function handleClearComplete() {
    const newTasks = todos.filter(todo => !todo.complete)
    setTodos(newTasks)
  }

  return (
    <>
    <TodoList todos={todos} toggleTasks={toggleTasks} />
    <input ref={taskNameRef} type="text" />
    <button onClick={handleAddTask}>Add Task</button>
    <button onClick={handleClearComplete}>Clear Completed Tasks</button>
    <div>{todos.filter(todo => !todo.complete).length} task(s) outstanding</div>
    </>
  )
}

export default App;