import { combineReducers, configureStore } from "@reduxjs/toolkit"
import QueueReducer from "../reducers/Queue";

const reducer = combineReducers({
    Queue : QueueReducer
});

export const store = configureStore({
    reducer: reducer
});