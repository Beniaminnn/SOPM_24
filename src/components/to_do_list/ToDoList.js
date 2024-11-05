// src/components/to_do_list/ToDoList.js
import React from "react";
import ToDoItem from "../to_do_item/ToDoItem"; // Verifică calea
import "./ToDoList.css";

const ToDoList = ({ tasks, setTasks }) => {
    const removeTask = (id) => {
        // Filtrăm sarcinile folosind id-ul
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks); // Setăm noua listă de sarcini
    };

    const toggleCompleteTask = (id) => {
        const newTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(newTasks);
    };

    return (
        <ul>
            {tasks.map((task) => (
                <ToDoItem
                    key={task.id} // Folosește id-ul ca și cheie
                    text={task.text}
                    completed={task.completed}
                    date={task.date}
                    onDelete={() => removeTask(task.id)} // Apelează removeTask cu id-ul sarcinii
                    onComplete={() => toggleCompleteTask(task.id)}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
