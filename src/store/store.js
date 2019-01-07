import {applyMiddleware, createStore} from "redux";
import * as rootReducer from './reducer';
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from 'redux-thunk';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);