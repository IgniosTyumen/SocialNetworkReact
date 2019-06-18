import {authApi} from "../api/AuthApi";

const SET_USER_DATA = "SET_USER_DATA";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";


let initialState = {
    data: {
        userID: null,
        email: null,
        login: null,
    },
    isFetching: false,
    isAuth: false
};

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_USER_DATA : {

            let stateCopy = {
                ...state,
                data : action.data,
                isAuth: true
            };
            return stateCopy;
        }


        default : {
            return state;
        }

    }
};


export const setAuthUserData = (userId, userEmail, userLogin) => (
    {

        type: SET_USER_DATA,
        data: {
            userID: userId,
            email: userEmail,
            login: userLogin,
        }
    }
);

export const toggleIsFetching = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
);

export const authorise = () => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        authApi.authorize()
            .then(data => {
                dispatch(toggleIsFetching(false));
                if (data.resultCode === 0){
                    let {id, login, email} = data.data;
                    dispatch(setAuthUserData(id, email, login));
                }
            });
    }
};



export default authReducer;