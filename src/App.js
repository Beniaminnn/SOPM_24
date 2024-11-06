// src/App.js
import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ToDoList from "./components/to_do_list/ToDoList"; // Asigură-te că calea este corectă
import "./App.css";

let idCounter = 0; // Un contor pentru generarea id-urilor unice

function App() {
    const [tasks, setTasks] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());
    const [newTaskText, setNewTaskText] = useState(""); // State pentru textul nou al sarcinii
    const [selectedCategory, setSelectedCategory] = useState("All"); // State pentru categoria selectată
    const [dueDate, setDueDate] = useState(""); // State pentru data limită
    const [priority, setPriority] = useState("Medium"); // State pentru prioritate
    const appRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Actualizează la fiecare secundă

        return () => clearInterval(interval); // Curățare la unmount
    }, []);

    useEffect(() => {
        gsap.from(appRef.current, {
            duration: 1.5,
            opacity: 0,
            y: 50,
            ease: "power3.out",
        });
    }, []);

    const addTask = () => {
        if (newTaskText.trim() !== "") {
            const newTask = {
                id: idCounter++, // Generare id unic
                text: newTaskText,
                completed: false,
                category: selectedCategory, // Setăm categoria sarcinii
                date: new Date().toLocaleString(),
                dueDate: dueDate, // Data limită
                priority: priority, // Prioritatea sarcinii
            };
            setTasks([...tasks, newTask]);
            setNewTaskText(""); // Resetează inputul
            setDueDate(""); // Resetează data limită
            setPriority("Medium"); // Resetează prioritatea
        }
    };

    // Gestionarea tastelor pentru adăugarea sarcinii
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask(); // Apelează funcția de adăugare
        }
    };

    // Funcție pentru a filtra sarcinile pe bază de categorie
    const filteredTasks = selectedCategory === "All"
        ? tasks
        : tasks.filter(task => task.category === selectedCategory);

    return (
        <div className="App" ref={appRef}>
            <h1>To-Do List</h1>
            <p>Ora curentă: {currentTime.toLocaleTimeString()}</p> {/* Afișează timpul */}
            <input
                type="text"
                value={newTaskText}
                onChange={(e) => setNewTaskText(e.target.value)}
                onKeyDown={handleKeyDown} // Ascultă apăsarea tastei
                placeholder="Adaugă o sarcină"
            />

            {/* Dropdown pentru a selecta categoria */}
            <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
            >
                <option value="All">Toate</option>
                <option value="Personal">Personal</option>
                <option value="Work">Muncă</option>
                <option value="Important">Important</option>
            </select>

            {/* Input pentru data limită */}
            <input
                type="date"
                value={dueDate}
                onChange={(e) => setDueDate(e.target.value)}
            />

            {/* Dropdown pentru prioritate */}
            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
            >
                <option value="Low">Mică</option>
                <option value="Medium">Mediu</option>
                <option value="High">Important</option>
            </select>

            <button onClick={addTask}>Adaugă</button>

            {/* Lista de sarcini filtrată */}
            <ToDoList tasks={filteredTasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
