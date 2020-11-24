import React from "react";
import Title from "../../atoms/Title";
import Comment from "../Comment/Comment";
import CallToAction from "../../atoms/CallToAction";

import "./ArticleComments.sass";

export default function ArticleComments({ comments }) {
    return (
        <div>
            <Title className="comments-title" text="Comments" />

            {comments.map((e) => (
                <Comment author={e.author} content={e.content} />
            ))}

            <div className="comments-load-container">
                <CallToAction className="comments-load" text="Load More" />
            </div>
        </div>
    );
}
