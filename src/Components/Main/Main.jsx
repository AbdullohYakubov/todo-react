import React from "react";

import Todo from "../Todo/Todo";

import "../Button/Button.css";
import "./Main.css";

function Main() {
    const [todos, setTodos] = React.useState([
        {
            id: 0,
            title: "Wake up at 7",
            isCompleted: false,
        },

        {
            id: 1,
            title: "Breakfast at 7:30",
            isCompleted: false,
        },
    ]);

    const handleDelete = (evt) => {
        const todoId = evt.target.dataset.todoId;
        const filteredTodos = todos.filter((todo) => todo.id != todoId);
        setTodos(filteredTodos);
    };

    const handleCheckTodo = (evt) => {
        const todoId = evt.target.dataset.todoId;
        // const findTodo = todos.filter(todo => todo.id == todoId)
        // findTodo[0].isCompleted = !findTodo[0].isCompleted
        const foundTodo = todos.find(todo => todo.id == todoId)
        foundTodo.isCompleted = !foundTodo.isCompleted
        setTodos([...todos])
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
                            const newTodo = {
                                id: todos[todos.length - 1]?.id + 1 || 0,
                                title: evt.target.value.trim(),
                                isCompleted: false,
                            };

                            setTodos([...todos, newTodo]);

                            evt.target.value = null;
                        }
                    }
                }}
            />

            <ul className="todos">
                {todos.map((todo) => (
                    <Todo
                        className="todo"
                        key={todo.id}
                        todo={todo}
                        handleDelete={handleDelete}
                        handleCheckTodo={handleCheckTodo}>
                        {todo.title}
                    </Todo>
                ))}
            </ul>
        </main>
    );
}

export default Main;
