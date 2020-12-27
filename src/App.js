import React from "react";
import { Switch, Route } from "react-router-dom";

// pages
import Home from "./components/templates/Home";
import Settings from "./components/templates/Settings";
import ArticleView from "./components/templates/ArticleView";
import Login from "./components/templates/Login";
import SignUp from "./components/templates/SignUp";
import NewArticle from "./components/templates/NewArticle";

// components
import NavBar from "./components/organisms/Nav/Nav";

// contexts
import { NewArticleContextProvider } from "./components/contexts/NewPostContext";
import { SideBarProvider } from "./components/contexts/SideBarContext";
import { PostsContextProvider } from "./components/contexts/AllPostsContext";
import { ArticleContextProvider } from "./components/contexts/ArticleContext";
import { ApiContextProvider } from "./components/contexts/ApiContext";

export default function App() {
    return (
        <ApiContextProvider>
            <SideBarProvider>
                <>
                    <NavBar />

                    <Switch>
                        <Route exact path="/settings">
                            <Settings />
                        </Route>

                        <Route exact path="/new-article">
                            <NewArticleContextProvider>
                                <NewArticle />
                            </NewArticleContextProvider>
                        </Route>

                        <Route exact path="/login">
                            <Login />
                        </Route>

                        <Route exact path="/signup">
                            <SignUp />
                        </Route>

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
        </ApiContextProvider>
    );
}
