import React from "react";
import "./AuthorArticle.sass"

export default function AuthorArticle({ author, time, imageSrc }) {
    return (
        <div className="article-author-container">
            <img
                className="article-author-image"
                src={imageSrc}
                alt="Profile"
            />
            <p className="article-author-author">
                {author} - {time} min
            </p>
        </div>
    );
}
