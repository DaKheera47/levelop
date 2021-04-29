import React from "react";
import Title from "../../atoms/Title";
import AuthorArticle from "../AuthorArticle/AuthorArticle";
import handleChange from "../../../helpers/handleInputChange";
import css from "./ArticleHeader.module.sass";

export default function ArticleHeader({ props }) {
    const { author, time, profileUrl, isEditing, title, setTitle } = props;

    return (
        <>
            {isEditing ? (
                <input
                    className={css.titleInput}
                    onChange={(evt) => {
                        handleChange(evt, setTitle);
                    }}
                    type="text"
                    value={title}
                />
            ) : (
                <Title className="article-title" text={title} />
            )}

            <hr size="1" color="#FA6400" />

            <AuthorArticle author={author} time={time} imageSrc={profileUrl} />
        </>
    );
}
