import './App.css';
import TodoList from "./components/TodoList/TodoList";
import AddTaskForm from "./components/AddTaskForm/AddTaskForm";


function App() {
    return (
        <>
            <AddTaskForm/>
            <TodoList/>
        </>
    );
}

export default App;
