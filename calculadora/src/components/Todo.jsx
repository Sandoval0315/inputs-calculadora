import React, { useState } from "react";
import "./Todo.css";

const Task = () => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");

    const addTodo = () => {
        if (task.trim() === "") return;
        setTodos([...todos, { id: Date.now(), text: task, completed: false }]);
        setTask("");
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="todo-container">
            <h3>Agrega una nueva tarea</h3>
            <div className="todo-input">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="Add a new task..."
                />
            </div>
            <button onClick={addTodo}>Add</button>

            <ul className="todo-list">
                {todos.map((todo) => (
                    <li key={todo.id} className={todo.completed ? "completed" : ""}>
                        <span>{todo.text}</span>
                        <button onClick={() => deleteTodo(todo.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Task;
