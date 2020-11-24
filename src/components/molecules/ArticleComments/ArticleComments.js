import React from "react";
import Title from "../../atoms/Title";
import Comment from "../Comment/Comment";
import CallToAction from "../../atoms/CallToAction";

import "./ArticleComments.sass";

export default function ArticleComments({}) {
    return (
        <div>
            <Title className="comments-title" text="Comments" />

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

            <div className="comments-load-container">
                <CallToAction className="comments-load" text="Load More" />
            </div>
        </div>
    );
}
