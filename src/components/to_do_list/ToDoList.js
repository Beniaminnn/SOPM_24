// src/components/ToDoList/ToDoList.js
import React from 'react';
import ToDoItem from '../to_do_item/ToDoItem';

const ToDoList = ({ items, removeTask, toggleCompleteTask }) => {
    return (
        <ul>
            {items.map((task, index) => (
                <ToDoItem
                    key={index}
                    text={task.text}
                    completed={task.completed}
                    date={task.date} // Transmiterea datei către componenta ToDoItem
                    onDelete={() => removeTask(index)}
                    onComplete={() => toggleCompleteTask(index)}
                />
            ))}
        </ul>
    );
};

export default ToDoList;
