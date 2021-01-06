import React, { createContext, useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { ApiContext } from "./ApiContext";

export const ArticleContext = createContext();

const ArticleContextProvider = (props) => {
    const [article, setArticle] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const { authAxios, currUser } = useContext(ApiContext);
    const history = useHistory();

    const createUpdatedArticle = (updatedArticle) => {
        updatedArticle?.comments.forEach((e) => {
            // compare author of comment with currently authenticated user
            // and check if they belong to each other
            e.isCommentOfCurrUser = e?.author?.id === currUser._id;
        });

        setArticle(updatedArticle);
        setIsLoading(false);
    };

    const getArticle = (postId) => {
        setIsLoading(true);
        authAxios
            .get(`posts/${postId}`)
            .then((res) => {
                createUpdatedArticle(res.data.foundPost);
            })
            .catch((e) => {
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
                console.log(res);
                // TODO: doesn't return complete post
                // setUpdatedArticle(res.data.editedPost);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const handleDeleteComment = (postId, commentId) => {
        setIsLoading(true);
        authAxios
            .delete(`posts/${postId}/comments/${commentId}`)
            .then((res) => {
                console.log(res);
                createUpdatedArticle(res.data.refreshPost);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleEditComment = (commentId, postId, newCommentText) => {
        setIsLoading(true);
        authAxios
            .put(`posts/${postId}/comments/${commentId}`, {
                text: newCommentText,
            })
            .then((res) => {
                createUpdatedArticle(res.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    const handleNewComment = (postId, newCommentText, setNewCommentContent) => {
        authAxios
            .post(`posts/${postId}/comments`, { text: newCommentText })
            .then((res) => {
                createUpdatedArticle(res.data);
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
