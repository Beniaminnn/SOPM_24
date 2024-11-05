// src/components/to_do_item/ToDoItem.js
import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ text, completed, date, onDelete, onComplete }) => {
    return (
        <li className={`todo-item ${completed ? 'completed' : ''}`}>
            <div>
        <span onClick={onComplete} style={{ cursor: "pointer" }}>
          {text}
        </span>
                <div className="task-date">Adăugat la: {date}</div>
            </div>
            <button onClick={onDelete}>Șterge</button>
        </li>
    );
};

export default ToDoItem;
