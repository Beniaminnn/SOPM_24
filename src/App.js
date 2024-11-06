// src/App.js
import React, { useState } from "react";
import ToDoList from "./components/to_do_list/ToDoList";
import Login from "./components/login/Login";
import "./App.css";

let idCounter = 0;

function App() {
    const [tasks, setTasks] = useState([]);
    const [newTaskText, setNewTaskText] = useState(""); // State pentru textul nou al sarcinii
    const [newTaskType, setNewTaskType] = useState(""); // State pentru tipul sarcinii
    const [newTaskDeadline, setNewTaskDeadline] = useState(""); // State pentru data limita
    const [newTaskPriority, setNewTaskPriority] = useState("Medium"); // State pentru prioritate
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const [sortOrder, setSortOrder] = useState({
        byDate: "none", // none, ascending, descending
        byPriority: "none", // none, ascending, descending
        byType: "none", // none, ascending, descending
    });

    const handleLogin = () => {
        setIsAuthenticated(true);
    };

    const addTask = () => {
        if (newTaskText.trim() !== "") {
            const newTask = {
                id: idCounter++,
                text: newTaskText,
                taskType: newTaskType,
                deadline: newTaskDeadline,
                priority: newTaskPriority,
                completed: false,
                date: new Date().toLocaleString(),
            };
            setTasks([...tasks, newTask]);
            setNewTaskText("");
            setNewTaskType("");
            setNewTaskDeadline("");
            setNewTaskPriority("Medium");
        }
    };

    const sortTasksByDate = () => {
        const newSortOrder = sortOrder.byDate === "ascending" ? "descending" : "ascending";
        setSortOrder({ ...sortOrder, byDate: newSortOrder });

        const sortedTasks = [...tasks].sort((a, b) => {
            const dateA = new Date(a.deadline);
            const dateB = new Date(b.deadline);

            return newSortOrder === "ascending"
                ? dateA - dateB
                : dateB - dateA;
        });

        setTasks(sortedTasks);
    };

    const sortTasksByPriority = () => {
        const newSortOrder = sortOrder.byPriority === "ascending" ? "descending" : "ascending";
        setSortOrder({ ...sortOrder, byPriority: newSortOrder });

        const priorityOrder = { Low: 1, Medium: 2, High: 3 };

        const sortedTasks = [...tasks].sort((a, b) => {
            return newSortOrder === "ascending"
                ? priorityOrder[a.priority] - priorityOrder[b.priority]
                : priorityOrder[b.priority] - priorityOrder[a.priority];
        });

        setTasks(sortedTasks);
    };

    const sortTasksByType = () => {
        const newSortOrder = sortOrder.byType === "ascending" ? "descending" : "ascending";
        setSortOrder({ ...sortOrder, byType: newSortOrder });

        const sortedTasks = [...tasks].sort((a, b) => {
            return newSortOrder === "ascending"
                ? a.taskType.localeCompare(b.taskType)
                : b.taskType.localeCompare(a.taskType);
        });

        setTasks(sortedTasks);
    };

    if (!isAuthenticated) {
        return <Login onLogin={handleLogin} />;
    }

    return (
        <div className="App">
            <h1>To-Do List</h1>
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                placeholder="Adaugă o sarcină"
            />
            <select
                value={newTaskType}
                onChange={(e) => setNewTaskType(e.target.value)}
            >
                <option value="">Alege tipul sarcinii</option>
                <option value="Personal">Personal</option>
                <option value="Job">Job</option>
                <option value="Școală">Școală</option>
            </select>
            <input
                type="datetime-local"
                value={newTaskDeadline}
                onChange={(e) => setNewTaskDeadline(e.target.value)}
            />
            <select
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value)}
            >
                <option value="Low">Scăzut</option>
                <option value="Medium">Medie</option>
                <option value="High">Ridicată</option>
            </select>
            <button onClick={addTask}>Adaugă</button>

            <div className="sort-options">
                <button onClick={sortTasksByDate}>
                    Sortare după data limită ({sortOrder.byDate})
                </button>
                <button onClick={sortTasksByPriority}>
                    Sortare după prioritate ({sortOrder.byPriority})
                </button>
                <button onClick={sortTasksByType}>
                    Sortare după tipul sarcinii ({sortOrder.byType})
                </button>
            </div>

            <ToDoList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
