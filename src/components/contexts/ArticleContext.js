import React, { createContext, useState } from "react";
import axios from "axios";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const preURL = "https://stormy-sands-86791.herokuapp.com";

    const getArticle = async (id) => {
        const res = await axios.get(`${preURL}/posts/${id}`).catch(e => {
            console.log(e);
        });
        if (res) {
            setIsLoading(false);
            setArticle(res);
        }
    };

    return (
        <ArticleContext.Provider value={{ getArticle, article, isLoading }}>
            {props.children}
        </ArticleContext.Provider>
    );
};

export { ArticleContextProvider };
