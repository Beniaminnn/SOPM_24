// src/components/to_do_item/ToDoItem.js
import React, { useRef } from "react";
import { gsap } from "gsap";
import "./ToDoItem.css";
import trashIcon from "../../assets/trash.svg"; // Verifică calea

const ToDoItem = ({ text, onDelete, onComplete, date, completed }) => {
    const itemRef = useRef(null);

    const handleDelete = () => {
        gsap.to(itemRef.current, {
            duration: 0.5,
            opacity: 0,
            x: -50,
            onComplete: () => {
                onDelete(); // Apelează onDelete după animație
            },
        });
    };

    return (
        <li ref={itemRef} className={`todo-item ${completed ? "completed" : ""}`}>
            <span onClick={onComplete} className="task-text">{text}</span>
            <div className="task-date">Adăugat la: {date}</div>
            <button onClick={handleDelete}>
                <img src={trashIcon} alt="Șterge" />
            </button>
        </li>
    );
};

export default ToDoItem;
