import { createStore, combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { timeReducer } from "./timeReducer";
import { prompReducer } from "./prompReducer.js";

const mainReducer = combineReducers({ menuReducer, timeReducer, prompReducer });

export const store = createStore(mainReducer);