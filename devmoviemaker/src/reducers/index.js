import { createStore, combineReducers } from "redux";
import { menuReducer } from "./menuReducer";

const mainReducer = combineReducers({ menuReducer });

export const store = createStore(mainReducer);
