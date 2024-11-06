// src/components/to_do_list/ToDoList.js
import React, { useState } from "react";

function ToDoList({ tasks, setTasks }) {
    const [isEditing, setIsEditing] = useState(null); // Care sarcină este în mod de editare
    const [editedText, setEditedText] = useState(""); // Starea pentru textul editat

    const handleDelete = (id) => {
        setTasks(tasks.filter(task => task.id !== id)); // Șterge sarcina
    };

    const handleToggleComplete = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleEdit = (id, currentText) => {
        setIsEditing(id); // Setează sarcina în modul de editare
        setEditedText(currentText); // Setează textul curent pentru editare
    };

    const saveEdit = (id) => {
        setTasks(
            tasks.map(task =>
                task.id === id ? { ...task, text: editedText } : task
            )
        );
        setIsEditing(null); // Oprește editarea
        setEditedText(""); // Resetează textul editat
    };

    return (
        <div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? "completed" : ""}>
                        {isEditing === task.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={editedText}
                                    onChange={(e) => setEditedText(e.target.value)}
                                />
                                <button onClick={() => saveEdit(task.id)}>Salvează</button>
                            </div>
                        ) : (
                            <div>
                                <span>{task.text}</span>
                                <span style={{ marginLeft: "10px", fontStyle: "italic", color: "gray" }}>
                                    ({task.category})
                                </span>
                                <span style={{ marginLeft: "10px" }}>
                                    <strong>Prioritate:</strong> {task.priority}
                                </span>
                                <span style={{ marginLeft: "10px" }}>
                                    <strong>Data limită:</strong> {task.dueDate ? task.dueDate : "Nu este setată"}
                                </span>
                                <div style={{ marginTop: "10px" }}>
                                    <button onClick={() => handleToggleComplete(task.id)}>
                                        {task.completed ? "Marchează ca nefinalizată" : "Marchează ca finalizată"}
                                    </button>
                                    <button onClick={() => handleDelete(task.id)}>Șterge</button>
                                    <button onClick={() => handleEdit(task.id, task.text)}>Editează</button>
                                </div>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;
