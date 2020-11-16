import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/templates/Home";
import { SideBarProvider } from "./components/contexts/SideBarContext";

export default function App() {
    return (
        <div>
            <Switch>
                <Route path="/">
                    <SideBarProvider>
                        <Home />
                    </SideBarProvider>
                </Route>
            </Switch>
        </div>
    );
}
