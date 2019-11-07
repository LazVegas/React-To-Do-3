import React, { useState } from "react"
import { useTodos } from "../redux/ducks/todos"

export default function (props) {
  const { add } = useTodos()
  const [todo, setTodo] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    add(todo)
    setTodo("")
  }

  return (
    <div className="toDoFormWrapper">
      <p id="downArrow">&#8897;</p>
      <form id="formWrapper" onSubmit={handleSubmit}>
        <input
          id="inputWrapper"
          type="text"
          onChange={e => setTodo(e.target.value)}
          value={todo}
          placeholder="What needs to be done?"
        />
      </form>
    </div>
  )
}
