import React from 'react';
import styles from './ToDoItem.module.css';

const ToDoItem = ({ text, remove }) => (
    <li className={styles.item}>
        {text}
        <button onClick={remove}>Șterge</button>
    </li>
);

export default ToDoItem;
