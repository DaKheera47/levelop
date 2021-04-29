import React, { useState, useContext } from "react";
import { NewPostsContext } from "../../contexts/NewPostContext";
import { useHistory } from "react-router-dom";
import ArticleInput from "../molecules/ArticleInput/ArticleInput";
import "./NewArticle.sass";
import handleChange from "../../helpers/handleInputChange"

export default function NewArticle() {
    const history = useHistory();

    const [articleTitle, setArticleTitle] = useState("");
    const [articleContent, setArticleContent] = useState("");

    const { makeNewPost, isLoading } = useContext(NewPostsContext);

    const handleCancel = () => {
        setArticleContent("");
        setArticleTitle("");

        history.push("/");
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        makeNewPost(articleTitle, articleContent).then((res) => {
            setArticleContent("");
            setArticleTitle("");
        });
    };

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : (
                <ArticleInput
                    handleSubmit={handleSubmit}
                    articleTitle={articleTitle}
                    articleContent={articleContent}
                    setArticleContent={setArticleContent}
                    setArticleTitle={setArticleTitle}
                    handleCancel={handleCancel}
                    handleChange={handleChange}
                />
            )}
        </>
    );
}
