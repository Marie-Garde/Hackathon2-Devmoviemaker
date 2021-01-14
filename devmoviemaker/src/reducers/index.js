import { createStore, combineReducers } from "redux";
import { menuReducer } from "./menuReducer";
import { prompReducer } from "./prompReducer.js";

const mainReducer = combineReducers({ menuReducer, prompReducer });

export const store = createStore(mainReducer);