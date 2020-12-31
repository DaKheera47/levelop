import React from "react";
import Comment from "../Comment/Comment";
import CallToAction from "../../atoms/CallToAction";

import "./ArticleComments.sass";

export default function ArticleComments({ comments }) {
    return (
        <>
            {comments.map((e, i) => (
                <Comment key={i} author={e.author} content={e.text} />
            ))}

            <div className="comments-load-container">
                <CallToAction className="comments-load" text="Load More" />
            </div>
        </>
    );
}
