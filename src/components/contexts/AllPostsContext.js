import React, { createContext, useState } from "react";
import axios from "axios";

export const PostsContext = createContext();

const PostsContextProvider = (props) => {
    const [allPosts, setAllPosts] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const preURL = "https://stormy-sands-86791.herokuapp.com";

    const getAllPosts = async () => {
        const res = await axios.get(`${preURL}/posts`).catch((e) => {
            console.log(e);
        });
        if (res) {
            setIsLoading(false);
            setAllPosts(res);
        } else {
            console.log("bive");
        }
    };

    return (
        <PostsContext.Provider
            value={{ getAllPosts, allPosts, isLoading, setAllPosts }}
        >
            {props.children}
        </PostsContext.Provider>
    );
};

export { PostsContextProvider };
