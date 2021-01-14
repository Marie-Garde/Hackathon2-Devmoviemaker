import { createStore, combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { timeReducer } from "./timeReducer";

const mainReducer = combineReducers({ menuReducer, timeReducer });

export const store = createStore(mainReducer);
