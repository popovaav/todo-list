import {combineReducers, createStore} from "redux";
import {todoReducer} from "./todo-reducer";
import {visibilityReducer} from "./visibility-reducer";

const rootReducer = combineReducers({
   todos: todoReducer,
   filter: visibilityReducer
})

export const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());