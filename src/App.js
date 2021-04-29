import React from "react";
import { Route, Switch } from "react-router-dom";import { PostsContextProvider } from "./contexts/AllPostsContext";
import { ApiContextProvider } from "./contexts/ApiContext";
import { ArticleContextProvider } from "./contexts/ArticleContext";
import { ArticleCommentsContextProvider } from "./contexts/ArticleCommentsContext"
// contexts
import { NewArticleContextProvider } from "./contexts/NewPostContext";
import { SideBarProvider } from "./contexts/SideBarContext";
// components
import NavBar from "./components/organisms/Nav/Nav";
import Article from "./components/templates/Article";
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
                                <ArticleCommentsContextProvider>
                                    <ArticleContextProvider>
                                        <Article />
                                    </ArticleContextProvider>
                                </ArticleCommentsContextProvider>
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
