import {applyMiddleware, combineReducers, createStore} from "redux";
import dialogReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";
import sidebarReducer from "./sidebarReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
        profilePage : profileReducer,
        dialogsPage: dialogReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
}
);

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;