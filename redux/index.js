const redux = require("redux")
const reduxLogger = require("redux-logger")
const createStore = redux.createStore;
const combineReducers = redux.combineReducers

// Create middleware
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// Create action

function buyCake() {
    return {
        type: BUY_CAKE,
        info: "First Redux action"
    }
}
function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: "Second Redux action"
    }
}

// Create State
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}

// Reducer Function

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }

}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {

        case BUY_ICECREAM: return {
            ...state,
            numOfIceCream: state.numOfIceCream - 1
        }
        default: return state
    }

}

// Create redux store
// const store = createStore(reducer)

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))

// getSate() method

console.log("Initial State: ", store.getState())

// subscribe to changes

const unsubscribe = store.subscribe(() => { })

const result = store.dispatch(buyCake())

// console.log("Result ": result)
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())

// unsubscribe()



