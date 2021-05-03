import React, { useState } from "react";
import Comment from "../Comment/Comment";
import "./ArticleComments.sass";
import { useParams } from "react-router-dom";
import TextareaAutosize from "react-textarea-autosize";
import Title from "../../atoms/Title";
import handleChange from "../../../helpers/handleInputChange";
import { handleNewComment } from "../../../apiCalls/commentCall";

export default function ArticleComments({ props }) {
    const { setIsArticleLoading, setArticle, article } = props;
    const [newCommentContent, setNewCommentContent] = useState("");

    let { id: postId } = useParams();
    let comments = article.comments;
    const commentComponent = [];

    comments.forEach((e) => {
        let propsForComments = {
            author: e.author.username,
            content: e.text,
            article,
            id: e._id,
            isCommentOfCurrUser: e.isCommentOfCurrUser,
            setIsArticleLoading,
            setArticle,
        };

        commentComponent.push(
            <div key={e._id}>
                <Comment props={propsForComments} />
            </div>
        );
    });

    const newComment = async () => {
        setIsArticleLoading(true);

        let res = await handleNewComment(postId, newCommentContent).catch(
            (e) => {
                setIsArticleLoading(false);
                return;
            }
        );

        console.log(res);

        if (!res.error) {
            setNewCommentContent("");
            setArticle(res.data);
            setIsArticleLoading(false);
        }
    };

    return (
        <>
            <Title className="comments-title" text="Comments" />
            <div className="comment-submission-form">
                <TextareaAutosize
                    type="text"
                    value={newCommentContent}
                    className="new-comment-input"
                    placeholder="Say something about this article..."
                    onChange={(evt) => handleChange(evt, setNewCommentContent)}
                />
                <button
                    className="comment-submission confirmation-btn"
                    onClick={() => {
                        newComment();
                    }}
                >
                    Submit
                </button>
            </div>

            {commentComponent.map((e) => e)}
        </>
    );
}
