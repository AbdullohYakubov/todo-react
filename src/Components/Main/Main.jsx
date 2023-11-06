import React from "react"

import Todo from "../Todo/Todo"

import "../Button/Button.css"
import "./Main.css"

function Main() {
    const [todos, setTodos] = React.useState([
        {
            id: 0,
            title: "Wake up at 7",
            isCompleted: false
        },

        {
            id: 1,
            title: "Wake up at 7",
            isCompleted: false
        }
    ])

    return (
        <main className="main">
            <input type="text" onKeyUp={(evt) => {
                if (evt.code === "Enter") {
                    let newTodoTitle = evt.target.value

                    const newTodo = {
                        id: todos[todos.length - 1]?.id + 1 || 0,
                        title: newTodoTitle.trim(),
                        isCompleted: false
                    }

                    setTodos([...todos, newTodo])

                    newTodoTitle = null
                }
            }} />

            <ul className="todos">
                {todos.map((todo) => <Todo className="todo" key={todo.id}>
                    {todo.title}
                </Todo>)}
            </ul>
        </main>
    )
}

export default Main