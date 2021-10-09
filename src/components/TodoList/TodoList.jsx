import React from "react";
import TodoItem from "../TodoItem/TodoItem";
import {useSelector} from "react-redux";
import styles from './TodoList.module.css';
import {visibilityFilters} from "../../redux/visibility-reducer";

const TodoList = () => {
    const todos = useSelector((state) => state.todos.todos)
    const filter = useSelector(state => state.filter.filter)

    const filterTasks = (todos, filter) => {
        switch (filter) {
            case visibilityFilters.SHOW_COMPLETED:
                return todos.filter(todo => todo.complete);
            case visibilityFilters.SHOW_ACTIVE:
                return todos.filter(todo => !todo.complete);
            default:
                return todos;
        }
    }

    const visibleTodos = filterTasks(todos, filter)

    return (
        <ul className={styles.items}>
            {visibleTodos.map((todo) => <TodoItem key={todo.id} todo={todo}/>
            )}
        </ul>
    )
}

export default TodoList;