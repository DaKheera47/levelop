import React, { useState, useContext } from "react";
import Comment from "../Comment/Comment";
import "./ArticleComments.sass";
import { useParams } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import Title from "../../atoms/Title";
import handleChange from "../../../helpers/handleInputChange"
import { ArticleCommentsContext } from "../../../contexts/ArticleCommentsContext";

export default function ArticleComments({ comments }) {
    const [newCommentContent, setNewCommentContent] = useState("");
    const { handleNewComment } = useContext(ArticleCommentsContext);
    let { id: postId } = useParams();

    return (
        <>
            <Title className="comments-title" text="Comments" />
            <div className="comment-submission-form">
                <TextareaAutosize
                    type="text"
                    value={newCommentContent}
                    className="new-comment-input"
                    placeholder="Say something about this article..."
                    onChange={(evt) =>
                        handleChange(evt, setNewCommentContent)
                    }
                />
                <button
                    className="comment-submission confirmation-btn"
                    onClick={() => {
                        handleNewComment(
                            postId,
                            newCommentContent,
                            setNewCommentContent
                        );
                    }}
                >
                    Submit
                </button>
            </div>
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
