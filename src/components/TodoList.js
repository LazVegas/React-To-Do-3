import React from "react"
import { useTodos } from "../redux/ducks/todos"

export default function(props) {
  const { todos, remove, toggle } = useTodos()

  return (
    <div classname="ToDoListWrapper">

      <ul id="ToDoListUl" >
        {todos.map(todo => (
          <li
            id="ToDoListLi"
            className={todo.completed ? "completed" : ""}
            key={"todo" + todo.id}
            onClick={e => toggle(todo.id)}
          >
            <div id="box"><p id="checkArrow">&#8897;</p></div>
            <p id="listItem">{todo.title}</p>
            <button id="toDoListButton" onClick={e => remove(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <div className="footer">
        <div className="itemsLeft">items left</div>
        <div className="all">All</div>
        <div className="active">Active</div>
        <div className="done">Completed</div>
        <div className="clearCompleted">Clear Completed</div>
      </div>
    </div>
  )
}
