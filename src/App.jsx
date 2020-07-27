import React, { useState } from "react";
import TodoList from "./components/TodoList"

function App() {
  const [todos, setTodos] = useState([{ id: 1, name: 'Todo', complete: false }])
  return (
    <>
    <TodoList todos={todos} />
    <input type="text" />
    <button>Add Task</button>
    <button>Clear Completed Tasks</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;