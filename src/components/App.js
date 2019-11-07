import React from "react"
import { Provider } from "react-redux"
import store from "../redux/store"

import TodoFormA from "./TodoForm"  // Whatever the default function is from ./TodoForm goes to TodoFormA
import TodoList from "./TodoList"

function App() {
  return (
    <Provider store={store}>
      <div className="mainContainer">
        <div id="pages">
          <h1 id="title">todos</h1>
          <TodoFormA />
          <TodoList />
        </div>
      </div>
    </Provider>
  )
}

export default App
