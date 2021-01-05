import React, { createContext, useState, useContext } from "react";
import { ApiContext } from "../contexts/ApiContext";
import { useHistory } from "react-router-dom";

export const NewPostsContext = createContext();

const NewArticleContextProvider = (props) => {
    const [isLoading, setIsLoading] = useState(false);
    const { authAxios } = useContext(ApiContext);
    const history = useHistory();

    const makeNewPost = async (articleTitle, articleContent) => {
        setIsLoading(true);

        authAxios
            .post(`posts`, {
                title: articleTitle,
                content: articleContent,
            })
            .then((res) => {
                setIsLoading(false);
                console.log(res);
                history.push("/");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <NewPostsContext.Provider value={{ makeNewPost, isLoading }}>
            {props.children}
        </NewPostsContext.Provider>
    );
};

export { NewArticleContextProvider };
