import React, { useState } from "react";
import "./NewArticle.sass";

export default function NewArticle() {
    const [articleTitle, setArticleTitle] = useState("");
    const [articleContent, setArticleContent] = useState("");

    const handleChange = (evt, changer) => {
        changer(evt.target.value);
    };

    return (
        <div>
            <div className="new-article-text-area">
                <input
                    type="text"
                    className="new-article-title-input"
                    placeholder="Title (say something interesting)"
                    value={articleTitle}
                    onChange={(evt) => {
                        handleChange(evt, setArticleTitle);
                    }}
                />

                <hr className="new-article-custom-separator" />

                <input
                    type="text"
                    className="new-article-content-input"
                    placeholder="Start Here..."
                    value={articleContent}
                    onChange={(evt) => {
                        handleChange(evt, setArticleContent);
                    }}
                />
            </div>
        </div>
    );
}
