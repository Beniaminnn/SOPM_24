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
                date: new Date().toLocaleString(),
            };
            setTasks([...tasks, newTask]);
            setNewTaskText(""); // Resetează inputul
        }
    };

    // Gestionarea tastelor pentru adăugarea sarcinii
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            addTask(); // Apelează funcția de adăugare
        }
    };

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
            <button onClick={addTask}>Adaugă</button>
            <ToDoList tasks={tasks} setTasks={setTasks} />
        </div>
    );
}

export default App;
