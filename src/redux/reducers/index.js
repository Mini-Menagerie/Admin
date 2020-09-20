import { combineReducers } from "redux";

import admin from "./admin";
import auth from './auth';
import petCategory from './petCategory';
import breed from './breed';
import product from './product';
import image from './image';
import productPurchased from './productPurchased';
import listAdoptionTransaction from './listAdoptionTransaction'




export default combineReducers({ admin, auth, petCategory, breed, product, image, productPurchased, listAdoptionTransaction });


