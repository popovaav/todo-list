import './App.css';
import TodoList from "./components/TodoList/TodoList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";
import FilterTasks from "./components/FilterTasks/FilterTasks";


const App = () => {
    return (
        <>
            <FilterTasks />
            <AddTaskForm/>
            <TodoList/>
        </>
    );
}

export default App;
