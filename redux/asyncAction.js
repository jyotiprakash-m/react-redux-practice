const redux = require('redux')
const thunkMiddleware = require('redux-thunk').default
const axios = require('axios')

// Create redux store
const createStore = redux.createStore

// Apply middleware
const applyMiddleware = redux.applyMiddleware

// State Created
const initialState = {
    loading: false,
    users: [],
    error: ''
}

// Action Created

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

// Action Creater Created

const fetchUsersRequest = () => {
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = (users) => {
    return {
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}
const fetchUsersFailure = (error) => {
    return {
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

// Reducer Function

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_USERS_SUCCESS:
            return {
                loading: false,
                users: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                loading: false,
                users: [],
                error: action.payload
            }
    }
}


// Fetch user from API

const fetchUsers = () => {
    return function (dispatch) {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                // response.data is the array of users 
                const users = response.data
                dispatch(fetchUsersSuccess(users))
            })
            .catch(error => {
                // error.message is the error form the API call
                dispatch(fetchUsersFailure(error.message))
            })

    }
}

// Create store
const store = createStore(reducer, applyMiddleware(thunkMiddleware))

// Subscribe the store
store.subscribe(() => {
    console.log(store.getState())
})

// dispatch the async acton creater
store.dispatch(fetchUsers())