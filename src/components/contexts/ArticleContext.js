import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ApiContext } from "./ApiContext";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { authAxios, preUrlAxios } = useContext(ApiContext);

    const history = useHistory();

    const getArticle = (postId) => {
        preUrlAxios
            .get(`posts/${postId}`)
            .then((res) => {
                setIsLoading(false);
                setArticle(res?.data);
                console.log(res?.data);
            })
            .catch((e) => {
                console.log(e);
                setIsLoading(false);
                setArticle({
                    data: {
                        author: { username: "DaKheera47" },
                        title:
                            "[Offline] How to learn node.js with MongoDB in just 15 days!",
                        content: "This is the content of the offline article",
                        comments: [
                            {
                                author: {
                                    username: "DaKheera47",
                                },
                                text: "This is rocket league",
                            },
                        ],
                    },
                });
            });
    };

    const handleDeleteComment = (postId, commentId) => {
        console.log(commentId);
        authAxios
            .delete(`posts/${postId}/comments/${commentId}`)
            .then((res) => {
                console.log(res);
                setArticle(res?.data?.refreshPost);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleEditComment = (commentId, postId, newCommentText) => {
        console.log(newCommentText);
        setIsLoading(true);
        authAxios
            .put(`posts/${postId}/comments/${commentId}`, {
                text: newCommentText,
            })
            .then((res) => {
                setIsLoading(false);
                setArticle(res?.data?.refreshPost);
                console.log(res?.data);
            })
            .catch((e) => {
                setIsLoading(false);
                console.log(e);
            });
    };

    const handleDeletePost = (postId) => {
        authAxios
            .delete(`posts/${postId}`)
            .then((res) => {
                console.log(res);
                history.push("/");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleEditPost = (postId, newArticleTitle, newArticleContent) => {
        setIsLoading(true);
        authAxios
            .put(`posts/${postId}`, {
                post: {
                    title: newArticleTitle,
                    content: newArticleContent,
                },
            })
            .then((res) => {
                setIsLoading(false);
                console.log(res);
                // setArticle(res?.data?.refreshPost);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleNewComment = (postId, newCommentText, setNewCommentContent) => {
        console.log(newCommentText);
        authAxios
            .post(`posts/${postId}/comments`, { text: newCommentText })
            .then((res) => {
                console.log(res);
                console.log(article);
                setArticle(res?.data?.refreshPost);
                setNewCommentContent("");
            })
            .catch((e) => {
                console.log(e);
            });
    };

    return (
        <ArticleContext.Provider
            value={{
                getArticle,
                article,
                isLoading,
                handleDeleteComment,
                handleEditComment,
                handleDeletePost,
                handleEditPost,
                handleNewComment,
            }}
        >
            {props.children}
        </ArticleContext.Provider>
    );
};

export { ArticleContextProvider };
