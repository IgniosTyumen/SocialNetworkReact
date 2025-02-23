import {usersApi} from "../api/UsersApi";
import {followApi} from "../api/FollowApi";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingInProgress: []
};

const UsersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({...u, followed: true});
                    }
                    return u;
                })
            };
        }

        case UNFOLLOW : {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return ({...u, followed: false});
                    }
                    return u;
                })
            };
        }

        case SET_USERS: {
            return {...state, users: [...action.users]}
        }

        case SET_CURRENT_PAGE : {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }

        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        }

        case TOGGLE_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                isFollowingInProgress: action.isFetching
                    ? [...state.isFollowingInProgress, action.userId]
                    : state.isFollowingInProgress.filter(id => id != action.userId)
            }
        }

        default : {
            return state;
        }

    }
};

export const followSuccess = (userId) => (

    {
        type: FOLLOW, userId: userId
    }
);

export const unfollowSuccess = (userId) => (
    {
        type: UNFOLLOW, userId: userId
    }
);

export const setUsers = (users) => (
    {
        type: SET_USERS, users: users
    }
);

export const setCurrentPage = (page) => (
    {
        type: SET_CURRENT_PAGE, currentPage: page
    }
);

export const setTotalUsersCount = (usersCount) => (
    {
        type: SET_TOTAL_USERS_COUNT,
        totalUsersCount: usersCount
    }
);

export const toggleIsFetching = (isFetching) => (
    {
        type: TOGGLE_IS_FETCHING,
        isFetching: isFetching
    }
);
export const toggleIsFollowingProgress = (isFetching, userID) => (
    {
        type: TOGGLE_IS_FOLLOWING_PROGRESS,
        isFetching: isFetching,
        userId: userID
    }
);

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        usersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setCurrentPage(currentPage));
                dispatch(setTotalUsersCount(data.totalCount));
            });
    }
};

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        followApi.follow(userId)
            .then(() => {
                    dispatch(followSuccess(userId));
                    dispatch(toggleIsFollowingProgress(false, userId));
                }
            )
    }
};

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, userId));
        followApi.unfollow(userId)
            .then(() => {
                    dispatch(unfollowSuccess(userId));
                    dispatch(toggleIsFollowingProgress(false, userId));
                }
            )
    }
};


export default UsersReducer;