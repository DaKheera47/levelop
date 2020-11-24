import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/templates/Home";
import Settings from "./components/templates/Settings";
import ArticleView from "./components/templates/ArticleView";

import NavBar from "./components/organisms/Nav/Nav";

import { SideBarProvider } from "./components/contexts/SideBarContext";

export default function App() {
    return (
        <>
            <SideBarProvider>
                <NavBar />
            </SideBarProvider>

            <Switch>
                <Route exact path="/article">
                    <ArticleView />
                </Route>

                <Route exact path="/settings">
                    <SideBarProvider>
                        <Settings />
                    </SideBarProvider>
                </Route>

                <Route exact path="/">
                    <SideBarProvider>
                        <Home />
                    </SideBarProvider>
                </Route>
            </Switch>
        </>
    );
}
