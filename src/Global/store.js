import { createStore, combineReducers, applyMiddleware } from "redux";
import todoReducer from "./todoReducer";
import settingsReducer from "./settingsReducer";
import { thunk } from "redux-thunk";
import postReducer from "./postReducer";

const rootReducer = combineReducers({
  todos: todoReducer,
  settings: settingsReducer,
  post: postReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
