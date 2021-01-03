import React from "react";
import CallToAction from "../../atoms/CallToAction";
import Comment from "../Comment/Comment";
import "./ArticleComments.sass";

export default function ArticleComments({ comments }) {
    return (
        <>
            {comments.map((e, i) => (
                <div key={e._id}>
                    <Comment
                        key={i}
                        author={e.author.username}
                        content={e.text}
                        id={e._id}
                    />
                </div>
            ))}

            {/* <div className="comments-load-container">
                <CallToAction className="comments-load" text="Load More" />
            </div> */}
        </>
    );
}
