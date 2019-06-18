const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
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

    };

const dialogReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText:action.newMessageText
            };
        }

        case ADD_MESSAGE : {
            let newMessage = {
                id: 7,
                message: state.newMessageText,
            };
            return {
                ...state,
                messages: [...state.messages,newMessage],
                newMessageText:""
            };
        }
        default:
            return state;
    }


};

export const addMessage = () => {

    return {type: ADD_MESSAGE};
};
export const updateNewMessageText = (text) => {


    return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text};
};

export default dialogReducer;