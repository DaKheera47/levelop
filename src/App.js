import React from "react";
import { Route, Switch } from "react-router-dom";
// contexts
import { PostsContextProvider } from "./contexts/AllPostsContext";
import { ApiContextProvider } from "./contexts/ApiContext";
import { NewArticleContextProvider } from "./contexts/NewPostContext";
import { SideBarProvider } from "./contexts/SideBarContext";
// components
import NavBar from "./components/organisms/Nav/Nav";
// pages
import Article from "./components/templates/Article";
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
                                <Article />
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
