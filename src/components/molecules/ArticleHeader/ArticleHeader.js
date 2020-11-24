import React from "react";
import Title from "../../atoms/Title";
import AuthorArticle from "../AuthorArticle/AuthorArticle";

export default function ArticleHeader({ author, time, title, profileUrl }) {
    return (
        <div>
            <Title className="article-title" text={title} />

            <hr size="1" />

            <AuthorArticle author={author} time={time} imageSrc={profileUrl} />
        </div>
    );
}
