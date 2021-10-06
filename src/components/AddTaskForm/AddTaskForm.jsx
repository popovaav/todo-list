import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addTodo} from "../../redux/todo-reducer";
import styles from './AddTaskForm.module.css';


const AddTaskForm = () => {
    const [newTodo, setNewTodo] = useState('');
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setNewTodo(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(newTodo));
        setNewTodo('');
    };

    return <form className={styles.addTask}>
            <input type="text" className={styles.input} placeholder="Add Todo.." value={newTodo} onChange={handleChange}/>
            <button type="submit" className="btn btn-success btn-lg " onClick={handleSubmit} >Add</button>
        </form>
}

export default AddTaskForm;