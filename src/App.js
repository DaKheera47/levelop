import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/templates/Home";
import Settings from "./components/templates/Settings";
import ArticleView from "./components/templates/ArticleView";

import NavBar from "./components/organisms/Nav/Nav";

import { SideBarProvider } from "./components/contexts/SideBarContext";
import { PostsContextProvider } from "./components/contexts/AllPostsContext";
import NewArticle from "./components/templates/NewArticle";
import { ArticleContextProvider } from "./components/contexts/ArticleContext";

export default function App() {
    return (
        <SideBarProvider>
            <>
                <NavBar />

                <Switch>
                    <Route exact path="/settings">
                        <Settings />
                    </Route>

                    <Route exact path="/new-article" component={NewArticle} />

                    <PostsContextProvider>
                        <Route exact path="/posts/:id">
                            <ArticleContextProvider>
                                <ArticleView />
                            </ArticleContextProvider>
                        </Route>

                        <Route exact path="/">
                            <Home />
                        </Route>
                    </PostsContextProvider>
                </Switch>
            </>
        </SideBarProvider>
    );
}
