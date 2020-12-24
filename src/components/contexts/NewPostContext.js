import React, { createContext, useState } from "react";
import querystring from "querystring";
import axios from "axios";

export const NewPostsContext = createContext();

const NewArticleContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const preURL = "http://ammar-228df1a1.localhost.run";

    const makeNewPost = async ({ articleTitle, articleContent }) => {
        const res = await axios
            .post(
                `${preURL}/posts`,
                querystring.stringify({
                    title: articleTitle,
                    content: articleContent,
                })
            )
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
