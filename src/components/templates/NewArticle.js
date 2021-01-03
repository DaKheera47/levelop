import React, { useState, useContext } from "react";
import { NewPostsContext } from "../contexts/NewPostContext";
import { useHistory } from "react-router-dom";
import ArticleInput from "../molecules/ArticleInput/ArticleInput";
import "./NewArticle.sass";

export default function NewArticle() {
    const history = useHistory();

    const [articleTitle, setArticleTitle] = useState("");
    const [articleContent, setArticleContent] = useState("");

    const { makeNewPost } = useContext(NewPostsContext);

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

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
            history.push("/");
        });
    };

    return (
        <>
            <ArticleInput
                handleSubmit={handleSubmit}
                articleTitle={articleTitle}
                articleContent={articleContent}
                setArticleContent={setArticleContent}
                setArticleTitle={setArticleTitle}
                handleCancel={handleCancel}
                handleChange={handleChange}
            />
        </>
    );
}
