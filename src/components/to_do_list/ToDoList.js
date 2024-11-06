// src/components/to_do_list/ToDoList.js
import React from 'react';

const ToDoList = ({ tasks, setTasks }) => {
    const toggleTaskCompletion = (id) => {
        const updatedTasks = tasks.map((task) =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const deleteTask = (id) => {
        const updatedTasks = tasks.filter((task) => task.id !== id);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
                        <div>
                            <strong>{task.text}</strong>
                            <p>{task.taskType && `Tip: ${task.taskType}`}</p>
                            <p>{task.deadline && `Data limită: ${task.deadline}`}</p>
                            <p>{`Prioritate: ${task.priority}`}</p>
                        </div>
                        <button onClick={() => toggleTaskCompletion(task.id)}>
                            {task.completed ? "Marchează ca nefinalizată" : "Marchează ca finalizată"}
                        </button>
                        <button onClick={() => deleteTask(task.id)}>Șterge</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ToDoList;
