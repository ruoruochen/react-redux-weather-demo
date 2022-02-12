import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "./rootReducer";
import thunk from "redux-thunk";

const enhancer = compose(applyMiddleware(thunk));

const store = createStore(reducer, enhancer);
export default store;
