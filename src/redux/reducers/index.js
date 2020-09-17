import { combineReducers } from "redux";

import admin from "./admin";
import auth from './auth';
import petCategory from './petCategory';
import breed from './breed';

export default combineReducers({ admin, auth, petCategory, breed });