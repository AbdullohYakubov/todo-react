import React from "react"

function Todo({ children }) {
    return (
        <li>
            <input type="checkbox" />
            <span>{children}</span>
            <button type="button">Delete</button>
        </li>
    )
}

export default Todo