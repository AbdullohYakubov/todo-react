import React from "react";

import "./Todo.css";
import "./Checkbox.css";

function Todo({ children, todo, handleDeleteTodo, handleCheckTodo }) {
    return (
        <li
            className="todo__item"
            style={{ textDecoration: todo.isCompleted && "line-through" }}>
            <label className="checkbox__wrapper">
                <input
                    id="checkbox"
                    type="checkbox"
                    data-todo-id={todo.id}
                    onClick={handleCheckTodo}
                    defaultChecked={todo.isCompleted}
                />
                <span className="custom-checkbox"></span>
            </label>
            <span className="todo__item--text">{children}</span>
            <button
                className="todo__item--btn"
                type="button"
                data-todo-id={todo.id}
                onClick={handleDeleteTodo}>
                <svg
                    version="1.0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="19"
                    height="19"
                    viewBox="0 0 512 512">
                    <path
                        d="m57.5 58-25 25 86.5 86.5 86.5 86.5-86.5 86.5L32.5 429l25.3 25.2L83 479.5l86.5-86.5 86.5-86.5 86.5 86.5 86.5 86.5 25.2-25.3 25.3-25.2-86.5-86.5-86.5-86.5 86.5-86.5L479.5 83l-25.3-25.2L429 32.5 342.5 119 256 205.5l-86.3-86.3C122.3 71.8 83.3 33 83 33c-.3 0-11.8 11.3-25.5 25z"
                        fill="#CC9A9A"
                    />
                </svg>
            </button>
        </li>
    );
}

export default Todo;
