import axios from "axios";
import React, { useState, useContext } from "react";
import { NewPostsContext } from "../contexts/NewPostContext";
import "./NewArticle.sass";
import querystring from "querystring";

export default function NewArticle() {
    const [articleTitle, setArticleTitle] = useState("");
    const [articleContent, setArticleContent] = useState("");

    const { makeNewPost, isLoading } = useContext(NewPostsContext);

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(articleTitle);

        console.log({
            title: articleTitle,
            content: articleContent,
        });

        axios.post(
            "http://ammar-228df1a1.localhost.run/posts",
            querystring.stringify({
                title: articleTitle,
                content: articleContent,
            })
        );
    };

    return (
        <div>
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

                    <input
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
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
