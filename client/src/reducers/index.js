import { combineReducers } from "redux";

import postReducer from "./post";
import authReducer from "./auth";

export const rootreducers = combineReducers( { postReducer, authReducer } );