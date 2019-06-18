import profileReducer from "./profileReducer";
import dialogReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";

const ADD_POST = "ADD-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let store =
    {
        _state: {
            profilePage: {
                posts: [
                    {id: "1", message: "Hi how are you", likesCount: 15},
                    {id: "2", message: "This is my first post", likesCount: 20}
                ],
                newPostText: "it"
            },
            dialogsPage: {
                dialogs: [
                    {id: '1', name: 'Dimych'},
                    {id: "2", name: "Andrew"},
                    {id: "3", name: "Sveta"},
                    {id: "4", name: "Sasha"},
                    {id: "5", name: "Victor"},
                    {id: "6", name: "Valera"},
                ],
                messages: [
                    {id: "1", message: "Hi"},
                    {id: "2", message: "Guten morgen"}
                ],
                newMessageText: "I'm new message"

            },
            sidebar: {}
        },
        _callSubscriber: () => {
        },

        getState() {
            return this._state;
        },
        subscribe(observer) {
            this._callSubscriber = observer;
        },


        dispatch(action) {

            this._state.profilePage = profileReducer(this._state.profilePage, action);
            this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);
            this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._callSubscriber();

        }
    }



export default store;
window.store = store;