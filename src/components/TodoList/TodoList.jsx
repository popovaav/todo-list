import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import {useSelector} from "react-redux";
import styles from './TodoList.module.css';

const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    return (
        <ul className={styles.items}>
            { todos.map((todo) => <TodoItem key={todo.id} todo={todo} />
            )}
        </ul>
    )
}

export default TodoList;