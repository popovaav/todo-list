import React from "react";
import styles from './TodoItem.module.css'
import {useDispatch} from "react-redux";
import {deleteTodo, toggleTodo} from "../../redux/todo-reducer";


export const TodoItem = ({todo}) => {
    const dispatch = useDispatch()

    const handleChecked = () => dispatch(toggleTodo(todo.id));
    const deleteBtn = () => dispatch(deleteTodo(todo.id))

    return (
        <div>
            <label className={todo.complete && styles.completed}>
                <input type='checkbox' checked={todo.complete} onChange={handleChecked}/>
                {todo.text}
            <button className="btn btn-danger btn-sm" onClick={deleteBtn}>Delete</button>
            </label>

        </div>
    );
};
export default TodoItem;