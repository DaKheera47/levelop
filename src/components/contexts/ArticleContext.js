import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import { ApiContext } from "./ApiContext";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const { preUrl } = useContext(ApiContext);

    // used to cancel axios request on component unmount
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    const getArticle = async (id) => {
        const res = await axios
            .get(`${preUrl}/posts/${id}`, {
                cancelToken: source.token,
            })
            .catch((e) => {
                console.log(e);
            });
        if (res) {
            setIsLoading(false);
            setArticle(res);
        }
        return () => {
            source.cancel();
        };
    };

    return (
        <ArticleContext.Provider value={{ getArticle, article, isLoading }}>
            {props.children}
        </ArticleContext.Provider>
    );
};

export { ArticleContextProvider };
