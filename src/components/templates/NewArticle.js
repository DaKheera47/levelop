import React, { useState, useContext } from "react";
import { NewPostsContext } from "../contexts/NewPostContext";
import "./NewArticle.sass";
import { useHistory } from "react-router-dom";

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
        });
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="new-article-text-area">
                    <input
                        type="text"
                        name="name"
                        className="new-article-title-input"
                        placeholder="Title (say something interesting)"
                        value={articleTitle}
                        required
                        onChange={(evt) => {
                            handleChange(evt, setArticleTitle);
                        }}
                    />

                    <hr className="new-article-custom-separator" />

                    <textarea
                        type="text"
                        name="content"
                        className="new-article-content-input"
                        placeholder="Start Here..."
                        value={articleContent}
                        required
                        onChange={(evt) => {
                            handleChange(evt, setArticleContent);
                        }}
                    />
                    <button type="submit" className="confirmation-btn">
                        Post
                    </button>
                    <button onClick={handleCancel} className="negative-btn">
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
}
