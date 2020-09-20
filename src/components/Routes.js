import React from "react";
import { Switch, Route } from "react-router-dom";


import { Dashboard, Admins, Login, 
        CreateAdmin, EditAdmin, PetCategories, 
        CreatePetCategory, EditPetCategory, Product, EditProduct, AddProduct, Breeds,
        CreateBreed,
        EditBreed, EditItemProduct, AdoptionTransaction 
    } from "../pages";

export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Login />
            </Route>
            <Route exact path="/dashboard/dashboard">
                <Dashboard />
            </Route>
            <Route exact path="/dashboard/admins">
                <Admins />
            </Route>
            <Route exact path="/dashboard/admins/create">
                <CreateAdmin />
            </Route>
            <Route exact path="/dashboard/product">
                <Product />
            </Route>
            <Route exact path="/dashboard/product/add">
                <AddProduct />
            </Route>
            <Route exact path="/dashboard/product/edit/:id">
                <EditProduct />
            </Route>
            <Route exact path="/dashboard/product/editItem/:id">
                <EditItemProduct />
            </Route>
            
            
            {/* <Route exact path="/dashboard/admins/edit/:id">
                <EditAdmin />
            </Route> */}
            <Route exact path="/dashboard/petCategory">
                <PetCategories />
            </Route>
            <Route exact path="/dashboard/petCategory/create">
                <CreatePetCategory />
            </Route>
            <Route exact path="/dashboard/petCategory/edit/:id">
                <EditPetCategory/>
            </Route>
            <Route exact path="/dashboard/breeds">
                <Breeds/>
            </Route>
            <Route exact path="/dashboard/breeds/edit/:id">
                <EditBreed/>
            </Route>
            <Route exact path="/dashboard/breeds/create">
                <CreateBreed/>
            </Route>
            <Route exact path="/dashboard/petAdoptionTransaction">
                <AdoptionTransaction/>
            </Route>

        </Switch>
    );
}