import {profileApi} from "../api/ProfileApi";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const SET_STATUS = "SET_STATUS";

let initialState = {
        posts: [
            {id: "1", message: "Hi how are you", likesCount: 15},
            {id: "2", message: "This is my first post", likesCount: 20}
        ],
        newPostText: "it",
    profile: null,
    isFetching: false,
    status: ""
    };



const profileReducer = (state = initialState,action) =>{


    switch (action.type) {

        case ADD_POST: {

            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText:"",
                posts: [...state.posts, newPost]
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }

        case SET_USER_PROFILE:{
            return{
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS:{
            return{
                ...state,
                status: action.status
            }
        }

        case TOGGLE_IS_FETCHING:
        {
            return{
                ...state,
                isFetching: action.isFetching
            }
        }

        default: return state;
    }
};

export const setUserProfile = (profile) => {
    return {type:SET_USER_PROFILE,
    profile}
};

export const setStatus = (status) => {
    return {type:SET_STATUS,
    status}
};

export const addPost = () => {


    return {type: ADD_POST};
};
export const updateNewPostText = (text) => {


    return {type: UPDATE_NEW_POST_TEXT, newText: text};
};

export const toggleIsFetching = (isFetching) =>(
    {
        type:TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
);

export const getProfile = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        if (!userId) {
            userId = 2;
        }
        profileApi.getProfile(userId)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUserProfile(data));
            });
    };
};

export const freeComponentProfile = () =>{
    return (dispatch) => {
        dispatch(toggleIsFetching(false));
        dispatch(setUserProfile(null));
    }
 };

export const getStatus = (userId) =>{
    return (dispatch) =>{
        profileApi.getStatus(userId)
            .then(
                response => {
                    dispatch(setStatus(response.data))
                }
            );
    };
};
export const updateStatus = (status) =>{
    return (dispatch) =>{
        profileApi.updateStatus(status)
            .then(
                response => {
                    if (response.data.resultCode === 0){
                        dispatch(setStatus(status))
                    }
                }
            );
    };
};

export default profileReducer;