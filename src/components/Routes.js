import React from "react";
import { Switch, Route } from "react-router-dom";

import { Dashboard, Admins, Login, CreateAdmin, EditAdmin, PetCategories, CreatePetCategory, EditPetCategory } from "../pages";

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
            <Route exact path="/dashboard/petCategory">
                <PetCategories />
            </Route>
            <Route exact path="/dashboard/petCategory/create">
                <CreatePetCategory />
            </Route>
            <Route exact path="/dashboard/petCategory/edit/:id">
                <EditPetCategory/>
            </Route>

        </Switch>
    );
}