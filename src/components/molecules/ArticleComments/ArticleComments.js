import React from "react";
import Title from "../../atoms/Title";
import Comment from "../Comment/Comment";

import "./ArticleComments.sass";

export default function ArticleComments({}) {
    return (
        <div>
            <Title className="comments-title" text="Comments" />
            <hr size="1" color="#fa6400" />

            <Comment
                author="Ammar Kashif"
                content="Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet."
            />
            <Comment
                author="Ammar Kashif"
                content="Amet minim mollit non deserunt ullamco est sit aliqua
                        dolor do amet sint. Velit officia consequat duis enim
                        velit mollit. Exercitation veniam consequat sunt nostrud
                        amet."
            />
        </div>
    );
}
