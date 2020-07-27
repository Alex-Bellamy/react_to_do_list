import React from "react";
import TodoList from "./components/TodoList"

function App() {
  return (
    <>
    <TodoList />
    <input type="text" />
    <button>Add Task</button>
    <button>Clear Completed Tasks</button>
    <div>0 left to do</div>
    </>
  )
}

export default App;