// App.js
import React, { useState, useEffect } from 'react';
import ToDoList from './components/to_do_list/ToDoList';
import './App.css';

// Funcție pentru a formata data într-un format de tip YYYY-MM-DD HH:MM
const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${year}-${month}-${day} ${hours}:${minutes}`;
};

function App() {
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem("tasks");
        return savedTasks ? JSON.parse(savedTasks) : [];
    });

    const addTask = (text) => {
        const newTask = {
            text,
            completed: false,
            date: formatDate(new Date()) // Adaugă data curentă la sarcină
        };
        setTasks([...tasks, newTask]);
    };

    const removeTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    const toggleCompleteTask = (index) => {
        setTasks(tasks.map((task, i) =>
            i === index ? { ...task, completed: !task.completed } : task
        ));
    };

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <input
                type="text"
                placeholder="Adaugă o sarcină"
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        addTask(e.target.value);
                        e.target.value = "";
                    }
                }}
            />
            <ToDoList
                items={tasks}
                removeTask={removeTask}
                toggleCompleteTask={toggleCompleteTask}
            />
        </div>
    );
}

export default App;
