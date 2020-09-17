import { combineReducers } from "redux";

import admin from "./admin";
import auth from './auth';
import petCategory from './petCategory'

export default combineReducers({ admin, auth, petCategory });