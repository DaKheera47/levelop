import React from "react";
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
                        isCommentOfCurrUser={e.isCommentOfCurrUser}
                    />
                </div>
            ))}
        </>
    );
}
