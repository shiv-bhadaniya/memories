import { combineReducers } from "redux";

import postReducer from "./post";
import authReducer from "./auth";
import userReducer from "./user";


export const rootreducers = combineReducers( { postReducer, authReducer, userReducer } );