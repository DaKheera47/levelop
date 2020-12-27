import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from "./ApiContext";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { preUrl } = useContext(ApiContext);

    const getArticle = async (id) => {
        const res = await axios.get(`${preUrl}/posts/${id}`).catch((e) => {
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
