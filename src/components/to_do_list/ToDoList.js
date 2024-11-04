import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoList = ({ items, removeItem }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <ToDoItem key={index} text={item} remove={() => removeItem(index)} />
            ))}
        </ul>
    );
};

export default ToDoList;
