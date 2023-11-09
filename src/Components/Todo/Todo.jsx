import React from "react"

function Todo({ children, todo, handleDeleteTodo, handleCheckTodo }) {
    return (
        <li style={{ textDecoration: todo.isCompleted && "line-through" }}>
            <input type="checkbox" data-todo-id={todo.id} onClick={handleCheckTodo} defaultChecked={todo.isCompleted} />
            <span>{children}</span>
            <button type="button" data-todo-id={todo.id} onClick={handleDeleteTodo}>Delete</button>
        </li >
    )
}

export default Todo