const ADD_TODO = 'ADD-TODO';
const DELETE_TODO = 'DELETE-TODO';
const TOGGLE_TODO = 'TOGGLE-TODO';

const initialState = {
    todos: []
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            const {id, text} = action.payload;
            return {
                ...state,
                todos: [...state.todos, {id, text, complete: false}]
            };
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.id)
            }
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, complete: !todo.complete} : todo)
            }
        default:
            return state;
    }
}

export const addTodo = (text) => ({type: ADD_TODO, payload: {id: Math.ceil(Math.random() * 100), text }});
export const deleteTodo = (id) => ({type: DELETE_TODO, id});
export const toggleTodo = (id) => ({type: TOGGLE_TODO, id});