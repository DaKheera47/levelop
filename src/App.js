import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/templates/Home";

export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    );
}
