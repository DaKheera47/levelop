import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/templates/Home";
import Settings from "./components/templates/Settings";
import ArticleView from "./components/templates/ArticleView";

import NavBar from "./components/organisms/Nav/Nav";

import { SideBarProvider } from "./components/contexts/SideBarContext";
import NewArticle from "./components/templates/NewArticle";

export default function App() {
    return (
        <SideBarProvider>
            <>
                <NavBar />

                <Switch>
                    <Route exact path="/article">
                        <ArticleView />
                    </Route>

                    <Route exact path="/settings">
                        <Settings />
                    </Route>

                    <Route exact path="/new-article">
                        <NewArticle />
                    </Route>

                    <Route exact path="/">
                        <Home />
                    </Route>
                </Switch>
            </>
        </SideBarProvider>
    );
}
