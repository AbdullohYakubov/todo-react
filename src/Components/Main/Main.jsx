import React from "react";

import Todo from "../Todo/Todo";

import "../Button/Button.css";
import "./Main.css";

function Main() {
    const [todos, setTodos] = React.useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );
    const [type, setType] = React.useState(localStorage.getItem("type") || "all");

    const handleDeleteTodo = (evt) => {
        const todoId = Number(evt.target.dataset.todoId);
        const filteredTodos = todos.filter((todo) => todo.id !== todoId);
        setTodos(filteredTodos);
        localStorage.setItem("todos", JSON.stringify(filteredTodos));
    };

    const handleCheckTodo = (evt) => {
        const todoId = Number(evt.target.dataset.todoId);
        const foundTodo = todos.find((todo) => todo.id === todoId);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        setTodos([...todos]);
        localStorage.setItem("todos", JSON.stringify([...todos]));
    };

    const getTodosByType = (_type, _todos) => {
        if (_type === "all") {
            return _todos;
        }

        if (_type === "active") {
            return _todos.filter((todo) => !todo.isCompleted);
        }

        if (_type === "completed") {
            return _todos.filter((todo) => todo.isCompleted);
        } else {
            return [];
        }
    };

    const saveTypeToLocalStorage = (_type) => {
        setType(_type);
        localStorage.setItem("type", _type);
    };

    return (
        <main className="main">
            <input
                type="text"
                onKeyUp={(evt) => {
                    if (evt.code === "Enter") {
                        if (!evt.target.value) {
                            return;
                        } else {
                            if (type !== "all") {
                                setType("all");

                                const newTodo = {
                                    id: todos[todos.length - 1]?.id + 1 || 0,
                                    title: evt.target.value.trim(),
                                    isCompleted: false,
                                };

                                setTodos([...todos, newTodo]);

                                localStorage.setItem(
                                    "todos",
                                    JSON.stringify([...todos, newTodo])
                                );

                                evt.target.value = null;
                            } else {
                                const newTodo = {
                                    id: todos[todos.length - 1]?.id + 1 || 0,
                                    title: evt.target.value.trim(),
                                    isCompleted: false,
                                };

                                setTodos([...todos, newTodo]);

                                localStorage.setItem(
                                    "todos",
                                    JSON.stringify([...todos, newTodo])
                                );

                                evt.target.value = null;
                            }
                        }
                    }
                }}
            />

            <ul className="todos">
                {todos.length > 0 &&
                    getTodosByType(type, todos).map((todo) => (
                        <Todo
                            className="todo"
                            key={todo.id}
                            todo={todo}
                            handleDeleteTodo={handleDeleteTodo}
                            handleCheckTodo={handleCheckTodo}>
                            {todo.title}
                        </Todo>
                    ))}
            </ul>

            <button type="button" onClick={() => saveTypeToLocalStorage("all")}>
                All
            </button>
            <button type="button" onClick={() => saveTypeToLocalStorage("active")}>
                Active
            </button>
            <button type="button" onClick={() => saveTypeToLocalStorage("completed")}>
                Completed
            </button>
        </main>
    );
}

export default Main;
