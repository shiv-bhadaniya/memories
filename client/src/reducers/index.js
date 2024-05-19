import { combineReducers } from "redux";

import postReducer from "./post";
import authReducer from "./auth";
import userReducer from "./user";
import getOnePostDetailsReducer from "./postDetails";
import userDetailsReducer from "./userDetails";

export const rootreducers = combineReducers( { postReducer, authReducer, userReducer, getOnePostDetailsReducer, userDetailsReducer } );