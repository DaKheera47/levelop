import React from "react";
import { Route, Switch } from "react-router-dom";
import { PostsContextProvider } from "./components/contexts/AllPostsContext";
import { ApiContextProvider } from "./components/contexts/ApiContext";
import { ArticleContextProvider } from "./components/contexts/ArticleContext";
// contexts
import { NewArticleContextProvider } from "./components/contexts/NewPostContext";
import { SideBarProvider } from "./components/contexts/SideBarContext";
// components
import NavBar from "./components/organisms/Nav/Nav";
import ArticleView from "./components/templates/ArticleView";
// pages
import Home from "./components/templates/Home";
import Login from "./components/templates/Login";
import NewArticle from "./components/templates/NewArticle";
import Settings from "./components/templates/Settings";
import SignUp from "./components/templates/SignUp";

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

                            {/* <Route path="*">
                                <Redirect to="/" />
                            </Route> */}
                        </PostsContextProvider>
                    </Switch>
                </>
            </SideBarProvider>
        </ApiContextProvider>
    );
}
