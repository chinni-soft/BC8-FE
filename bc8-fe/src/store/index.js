import {applyMiddleware, compose, createStore} from "redux";
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
const middleWare = [thunk];
const initialState = {};

const devTools =
    process.env.NODE_ENV === "production"
        ? applyMiddleware(...middleWare)
        : compose(applyMiddleware(...middleWare));

const store = createStore(rootReducer, initialState, devTools);
export default store;
