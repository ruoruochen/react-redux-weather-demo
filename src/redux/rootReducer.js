import { combineReducers } from "redux";
import { weatherReducer } from "./weatherModule";

export const reducer = combineReducers({ weather: weatherReducer });
