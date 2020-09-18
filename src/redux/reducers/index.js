import { combineReducers } from "redux";

import admin from "./admin";
import auth from './auth';
import petCategory from './petCategory';
import product from './product';
import image from './image'

export default combineReducers({ admin, auth, petCategory, product, image });