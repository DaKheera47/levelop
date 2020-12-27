import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from "./ApiContext";

export const PostsContext = createContext();

const PostsContextProvider = (props) => {
    const [allPosts, setAllPosts] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { preUrl } = useContext(ApiContext);

    const getAllPosts = async () => {
        axios
            .get(`${preUrl}/posts`)
            .then((res) => {
                setIsLoading(false);
                console.log(res)
                setAllPosts(res);
            })
            .catch((e) => {
                console.log(e);
            });
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
