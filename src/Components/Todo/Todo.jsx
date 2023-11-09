import React from "react"

function Todo({ children, todo, handleDelete, handleCheckTodo }) {
    // console.log(todo);
    return (
        <li style={{ textDecoration: todo.isCompleted && "line-through" }}>
            <input type="checkbox" data-todo-id={todo.id} onClick={handleCheckTodo} />
            <span>{children}</span>
            <button type="button" data-todo-id={todo.id} onClick={handleDelete}>Delete</button>
        </li >
    )
}

export default Todo