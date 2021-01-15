import { createStore, combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { timeReducer } from "./timeReducer";
import { prompReducer } from "./prompReducer.js";
import { splitTimeReducer } from "./splitTimeReducer.js";
import { ellapsedReducer } from "./ellapsedReducer.js";

const mainReducer = combineReducers({
    menuReducer,
    timeReducer,
    prompReducer,
    splitTimeReducer,
    ellapsedReducer,
});

export const store = createStore(mainReducer);