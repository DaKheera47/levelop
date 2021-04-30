import React from "react";
import css from "./AuthorArticle.module.sass";

export default function AuthorArticle({ author, time, imageSrc }) {
    return (
        <div className={`${css.container}`}>
            <img className={`${css.image}`} src={imageSrc} alt="Profile" />
            <p className={`${css.author}`}>
                {author} - {time} min
            </p>
        </div>
    );
}
