import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from "../contexts/ApiContext";

export const NewPostsContext = createContext();

const NewArticleContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const { preUrl, cookies } = useContext(ApiContext);

    const makeNewPost = async (articleTitle, articleContent) => {
        const config = {
            headers: {
                Authorization: cookies.get("jwt"),
            },
        };

        const data = {
            title: articleTitle,
            content: articleContent,
        };

        console.log(data);

        const res = await axios
            .post(`${preUrl}/posts`, data, config)
            .then((res) => {
                console.log(res);
            })
            .catch((e) => {
                console.log(e);
            });
        if (res) {
            setIsLoading(false);
        }
    };

    return (
        <NewPostsContext.Provider value={{ makeNewPost, isLoading }}>
            {props.children}
        </NewPostsContext.Provider>
    );
};

export { NewArticleContextProvider };
